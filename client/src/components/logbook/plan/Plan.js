import React, { useState, useEffect, useMemo } from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux'

import useStyles from './styles'
import ActionButtons from './ActionButtons';
import ActionModal from './ActionModal'
import { createTask } from '../../../actions/task'
import { createPlanPeriod, updatePlanPeriod, deletePlanPeriod } from '../../../actions/plan'
import { Box, Card, Typography } from '@material-ui/core';
const UIDGenerator = require('uid-generator');

const Plan = ({ studentID, page, setPage, setTaskID}) => {
  const uidgen = new UIDGenerator(UIDGenerator.BASE16);
  const classes = useStyles();
  const dispatch = useDispatch();
  const plan = useSelector(state => state.plan);
  const [modalOpen, setModalOpen] = useState(false)
  const [action, setAction] = useState('')
  const [periodData, setPeriodData] = useState({})
  const periods = plan.periods || [];

  useEffect(() => {
    setTaskID(periods[page - 1]?.taskID)
  }, [plan])

  const handleChangePage = (event, value) => {
    setPage(value)
  }

  const handleChangeTask = useMemo(() => {
    setTaskID(periods[page-1]?.taskID);
  }, [page])

  // Action Modal
  const handleOpenModal = (type) => {
    if (type === "Add") {
      setPeriodData({})
    } else {
      setPeriodData(periods[page - 1])
    } 
    setModalOpen(true);
    setAction(type)
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const handleModalChange = (e) => {
    setPeriodData({...periodData, [e.target.name]: e.target.value})
  }

  const handleDateChange = (date, name) => {
    setPeriodData({...periodData, [name]: date})
    console.log(periodData)
  }

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (action === "Add") {
      uidgen.generate()
      .then(uid => {
        // console.log(uid)
        // console.log(periodData.taskID)
        dispatch(createTask(uid))
        dispatch(createPlanPeriod(studentID, uid, periodData))
      })
    } else if (action === "Update") {
      dispatch(updatePlanPeriod(studentID, periodData))
      console.log(periodData)
    } else {
      dispatch(deletePlanPeriod(studentID, periodData.taskID))
      setPage((prevPage) => prevPage - 1)
    }
    handleCloseModal()
  }

  return (
    <>
      <Box mb={3}>
        <ActionButtons handleOpenModal={handleOpenModal} />
      </Box>
      <Pagination className={classes.timeLinePagination}
        variant="text"
        count={periods.length}
        page={page}
        onChange={handleChangePage}
        renderItem={(item)=> {
          if (item.type === "page") {
            const index = item.page-1
            if (periods[index].startTime && periods[index].endTime) {
              item.page = periods[index].title + '\n' + new Date(periods[index].startTime).toLocaleDateString('en-GB') + ' - ' + new Date(periods[index].endTime).toLocaleDateString('en-GB')
            } else {
              item.page = periods[index].title 
            }
          };
          return <PaginationItem className={classes.timeLinePaginationItem} {...item} />
        } }
      />
      <Card className={classes.planOverview}>
        <Typography variant='h5'>Overall Objective:</Typography>
        <Typography>{periods[page-1]?.overview}</Typography>
      </Card>
      <ActionModal 
        action={action}
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal} 
        handleModalChange={handleModalChange} 
        handleDateChange={handleDateChange} 
        handleModalSubmit={handleModalSubmit} 
        periodData={periodData}
      />
    </>
  )
}

export default Plan
