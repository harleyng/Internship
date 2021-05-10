import React from 'react'
import { Paper, Grid, Typography, TextField } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './styles'
import LuxonUtils from '@date-io/luxon';

import Input from './Input'
import { fourth } from '../../../../constants/profileSection'

const Internship = ({ handleChange, handleDateChange, handleClick, formData }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.ProfileSectionContainer} onClick={(e) => handleClick(e, 4)}>
      <Typography className={classes.ProfileSectionTitle} variant="h6">{fourth}</Typography>
      <Grid container spacing={3} justify='space-around'>
        {/* Line Break */}
        <Input name="internship_location" value={formData?.internship?.location} label="Location" handleChange={handleChange} width={6} type="text" />

        <Input name="internship_host" value={formData?.internship?.host} label="Host" handleChange={handleChange} width={6} type="text" />
        
        {/* Line Break */}
        <Grid item sm={12} md={6}>
          <MuiPickersUtilsProvider utils={LuxonUtils} >
            <KeyboardDatePicker className={classes.formControl}
              
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              label="Start Time"
              value={formData?.internship?.startTime}
              onChange={(date) => handleDateChange(date, "internship_startTime")} 
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
              value={formData?.internship?.endTime}
              onChange={(date) => handleDateChange(date, "internship_endTime")} 
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid> 
      </Grid>
    </Paper>
  )
}

export default Internship
