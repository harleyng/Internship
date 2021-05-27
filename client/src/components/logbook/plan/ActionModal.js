import React from 'react'
import { Modal, Typography, Paper, Grid, TextField, Button, TextareaAutosize } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon'

import useStyles from './styles'

const ActionModal = ({ action, modalOpen, handleCloseModal, handleModalChange, handleDateChange, handleModalSubmit, periodData }) => {
  const classes = useStyles();

  return (
    <Modal
      open={modalOpen}
      onClose={handleCloseModal}
    >
      <form className={classes.modalContainer} onSubmit={handleModalSubmit}>
        <Paper className={classes.modalContent}>
          <Typography className={classes.modalTitle} align='center' variant='h5'>{action} period</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
              name="title"
              value={periodData?.title}
              InputLabelProps={{ shrink: true }}
              label="Title"
              onChange={handleModalChange}
              fullWidth
              multiline
              variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={LuxonUtils} >
                <KeyboardDatePicker className={classes.DatePicker}
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  label="Start Time"
                  value={periodData?.startTime}
                  onChange={(date) => handleDateChange(date, "startTime")} 
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={LuxonUtils} >
                <KeyboardDatePicker className={classes.DatePicker}
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  label="End Time"
                  value={periodData?.endTime}
                  onChange={(date) => handleDateChange(date, "endTime")} 
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <Typography>Overview</Typography>
              <TextareaAutosize 
                name="overview" 
                value={periodData?.overview}
                rowsMin={5} 
                className={classes.textArea} 
                onChange={handleModalChange} 
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

export default ActionModal
