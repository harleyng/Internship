import React, { useState } from 'react'
import { Container, Typography, TextField, Paper, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import useStyles from './styles'
import { useHistory } from 'react-router-dom'

import { createStudent } from "../../../actions/student";
import { createDocumentModel } from '../../../actions/document';
import { createScore } from '../../../actions/score';
import { createPlan } from '../../../actions/plan'

const NewStudent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [studentID, setStudentID] = useState(null)
  const user = JSON.parse(localStorage.getItem('profile'))
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPlan(studentID));
    dispatch(createScore(studentID));
    dispatch(createDocumentModel(studentID));
    dispatch(createStudent({userID: user.result._id, studentID: studentID}, history));
  }
  return (
    <Container component="main" maxWidth="sx">
      <Paper className={classes.GetStartedContentContainer}>
        <Typography  className={classes.GetStartedTitle} variant='h6'>Getting Started</Typography>
        <Typography>It seem like this is the first time you access this system. What is your student ID?</Typography>
        <form onSubmit={handleSubmit}>
          <TextField className={classes.GetStartedInput} name="studentID" label="Student ID" variant="outlined" fullWidth onChange={(e) => {setStudentID(e.target.value)}}/>
          <Button fullWidth type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default NewStudent
