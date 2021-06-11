import React from 'react'
import { Typography, Button, Modal, TextField, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    width: '30vw',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  modalContent: {
    padding: theme.spacing(5)
  }, 
  modalTitle: {
    marginBottom: theme.spacing(3)
  },
}))

const SupervisorEvaluationModal = ({handleSupervisorSubmit, modalOpen, handleCloseModal, handleSupervisorChange, studentID}) => {
  const classes = useStyles();
  return (
    <Modal
      open={modalOpen}
      onClose={handleCloseModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <form className={classes.modalContainer} onSubmit={handleSupervisorSubmit}>
        <Paper className={classes.modalContent}>
          <Typography className={classes.modalTitle} align='center' variant='h5'>Evaluate {studentID}</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
              name="supervisor"
              InputLabelProps={{ shrink: true }}
              label="Write student's score here"
              type="number"
              onChange={handleSupervisorChange}
              fullWidth
              multiline
              variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' fullWidth>Submit</Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Modal>
  )
}

export default SupervisorEvaluationModal

