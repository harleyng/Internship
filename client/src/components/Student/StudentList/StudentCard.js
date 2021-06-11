import React, { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import { STUDENTS_PAGE } from "../../../setting/constants/pages";
import { useDispatch, useSelector } from "react-redux";
import SupervisorEvaluationModal from "../evaluation/SupervisorEvaluationModal";
import { getScore, updateScore } from "../../../actions/score"

const StudentInformation = ({title, text}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}><Typography variant="body1" component="p" align='right'><b>{title}</b></Typography></Grid>
      <Grid item xs={9}><Typography variant="body1" component="p" style={{whiteSpace: 'pre-line'}}>{text}</Typography></Grid>
    </Grid>
  )
}

const StudentCard = ({ student }) => {
  const dispatch = useDispatch();
  const score = useSelector(state => state.studentScore)
  const [modalOpen, setModalOpen] = useState(false);
  const [supervisorScore, setSupervisorScore] = useState(0)

  useEffect(() => {
    dispatch(getScore(student.studentID));
  }, [dispatch])

  useEffect(() => {
  }, [score])
  
  // Supervisor View Logbook
  const handleOpenLogbook = () => {
    window.open(`/${STUDENTS_PAGE}/${student.studentID}/logbook`);
  };

  // Supervisor Modal
  const handleOpenModal = () => {
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const handleSupervisorChange = (e) => {
    setSupervisorScore(e.target.value)
  }

  const handleSupervisorSubmit = (e) => {
    e.preventDefault();
    dispatch(updateScore(student.studentID, {supervisor: supervisorScore}))
    handleCloseModal();
  }
  
  return (
    <>
      <Card style={{padding: '10px'}}>
        <CardContent style={{textAlign: 'left'}}>
          <Typography align="center" style={{marginBottom: '30px', fontSize: '28px'}}>{student.fullName}</Typography>
          <StudentInformation title="Topic" text={student.internship.topic} />
          <StudentInformation title="Objective" text={student.internship.objective} />
          <StudentInformation title="Outcome" text={student.internship.outcome} />
          <StudentInformation title="Host" text={student.internship.host} />
          <StudentInformation title="Location" text={student.internship.location} />
          <StudentInformation title="Score" text={score[0]?.supervisor} />
        </CardContent>
        <CardActions style={{justifyContent: 'flex-end'}}>
          <Button size="medium" onClick={handleOpenLogbook}>Open Logbook</Button>
          <Button size="medium" onClick={handleOpenModal}>Evaluation</Button>
        </CardActions>
      </Card>
      <SupervisorEvaluationModal handleSupervisorChange={handleSupervisorChange} handleSupervisorSubmit={handleSupervisorSubmit} handleCloseModal={handleCloseModal} modalOpen={modalOpen} studentID={student.studentID} />
    </>
  )
};

export default StudentCard;
