import React, { useState, useEffect } from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux'

import useStyles from './styles'
import ActionButtons from './ActionButtons';
import ActionModal from './ActionModal'
import { createTask } from '../../../actions/task'
import { createPlanPeriod } from '../../../actions/plan'
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
    // console.log(plan)
    setTaskID(periods[page - 1]?.taskID)
  }, [plan, page])

  const handleChangePage = (event, value) => {
    console.log(page)
    console.log(periods[page-1].taskID)

    setPage(value)
    setTaskID(periods[page-1].taskID);
    // console.log(value)
  }

  // Action Modal
  const handleOpenModal = (type) => {
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

    uidgen.generate()
    .then(uid => {
            // console.log(periodData)
      console.log(uid)
      console.log(periodData.taskID)
      dispatch(createTask(uid))
      dispatch(createPlanPeriod(studentID, uid, periodData))
    })
    .then(() => {
      setPeriodData({})
      handleCloseModal()
    })
  }

  return (
    <>
      <ActionButtons handleOpenModal={handleOpenModal} />
      <Pagination className={classes.timeLinePagination}
        variant="text"
        count={periods.length}
        page={page}
        onChange={handleChangePage}
        renderItem={(item)=> {
          if (item.type === "page") {
            const index = item.page-1
            item.page = periods[index].title + '\n' + new Date(periods[index].startTime).toLocaleDateString('en-GB') + ' - ' + new Date(periods[index].endTime).toLocaleDateString('en-GB')

          };
          return <PaginationItem className={classes.timeLinePaginationItem} {...item} />
        } }
      />
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
