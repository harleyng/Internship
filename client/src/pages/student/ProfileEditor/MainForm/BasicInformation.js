import React from 'react'
import { Paper, Grid, Typography, FormControl, MenuItem, InputLabel, Select } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './styles'
import LuxonUtils from '@date-io/luxon';

import { first } from '../../../../setting/constants/profileSection'
import Input from './Input'

const BasicInformation = ({ handleChange, handleDateChange, handleClick, formData }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.ProfileSectionContainer} onClick={(e) => handleClick(e, 1)}>
      <Typography className={classes.ProfileSectionTitle} variant="h6">{first}</Typography>
      <Grid container spacing={3} justify='space-around'>
        {/* Line Break */}
        <Input name="fullName" value={formData?.fullName} label="Full Name" handleChange={handleChange} width={5} type="text" />

        <Input name="phoneNo" value={formData?.phoneNo} label="Phone Number" handleChange={handleChange} width={3} type="text" />
        
        <Grid item sm={12} md={4}>
          <MuiPickersUtilsProvider utils={LuxonUtils} >
            <KeyboardDatePicker className={classes.formControl}
              
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              label="Date of Birth"
              value={formData?.DOB}
              onChange={(date) => handleDateChange(date, "DOB")} 
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      
        {/* Line Break */}

        <Input name="studentID" value={formData?.studentID} label="Student ID" handleChange={handleChange} width={2} type="text" required />

        <Input name="academicYear"  value={formData?.academicYear} label="Academic Year" handleChange={handleChange} width={3} type="text" />

        <Grid item sm={12} md={7}>
          <FormControl variant="outlined" className={classes.formControl} style={{textAlign: 'left'}}>
            <InputLabel>Deparment</InputLabel>
            <Select
              name="department"
              value={formData?.department} 
              onChange={handleChange}
              label="Deparment"
              
            >
              <MenuItem value="Pharmacological, Medical and Agronomical Biotechnology">Pharmacological, Medical and Agronomical Biotechnology</MenuItem>
              <MenuItem value="Information Technology and Communication">Information Technology and Communication</MenuItem>
              <MenuItem value="Medical Science and Technology">Medical Science and Technology</MenuItem>
              <MenuItem value="Cyber security">Cyber security</MenuItem>
              <MenuItem value="Aeronautical Maintenance and Engineering Operations">Aeronautical Maintenance and Engineering Operations</MenuItem>
              <MenuItem value="Food Science and Technology">Food Science and Technology</MenuItem>
              <MenuItem value=""><em>None</em></MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default BasicInformation
