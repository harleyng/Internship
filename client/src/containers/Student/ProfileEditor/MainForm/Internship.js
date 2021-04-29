import React from 'react'
import { Paper, Grid, Typography, TextField } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './styles'
import LuxonUtils from '@date-io/luxon';

import Input from './Input'
import { fourth } from '../../../../constants/profileSection'

const Internship = ({ handleChange, handleDateChange, startTime, endTime }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.ProfileSectionContainer}>
      <Typography className={classes.ProfileSectionTitle} variant="h6">{fourth}</Typography>
      <Grid container spacing={3} justify='space-around'>
        {/* Line Break */}
        <Input name="internshipLocation" label="Location" handleChange={handleChange} width={6} type="text" />

        <Input name="internshipHost" label="Host" handleChange={handleChange} width={6} type="text" />
        
        {/* Line Break */}
        <Grid item sm={12} md={6}>
          <MuiPickersUtilsProvider utils={LuxonUtils} >
            <KeyboardDatePicker className={classes.formControl}
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              label="Start Time"
              value={startTime}
              onChange={(date) => handleDateChange(date, "startTime")} 
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid> 
              
        <Grid item sm={12} md={6}>
          <MuiPickersUtilsProvider utils={LuxonUtils} >
            <KeyboardDatePicker className={classes.formControl}
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              label="End Time"
              value={endTime}
              onChange={(date) => handleDateChange(date, "endTime")} 
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid> 

        {/* Line Break */}
        <Grid item sm={12}>
          <TextField
            className={classes.textArea}
            label="Objective"
            multiline
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        {/* Line Break */}
        <Grid item sm={12}>
          <TextField
            className={classes.textArea}
            label="Outcome"
            multiline
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Internship
