import React, { useState, useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPlan } from '../../actions/plan'
import { getTask } from '../../actions/task'
import Plan from './plan/Plan'
import Kanban from './task/Kanban'

const Logbook = (props) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [taskID, setTaskID] = useState(null)
  const studentID = props.match.params.studentID;

  useEffect(() => {
    dispatch(getPlan(studentID));
    if (taskID) {
      dispatch(getTask(taskID));
    }
    // console.log(taskID) 
  }, [dispatch, taskID])

  return (
    <Grid>
      <Plan studentID={studentID} setPage={setPage} page={page} setTaskID={setTaskID}/>
      {!taskID ? <CircularProgress /> : (
        <Kanban studentID={studentID} taskID={taskID} page={page}/>
      )}

    </Grid>
  )
}

export default Logbook
