import React from 'react'
import { Paper, Grid, Typography, FormControl, MenuItem, InputLabel, Select, Checkbox, FormControlLabel } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './styles'
import LuxonUtils from '@date-io/luxon';

import { primary } from '../../../../constants/colors'
import { second } from '../../../../constants/profileSection'
import Input from './Input'

const Supervisor = ({ handleChange, handleDateChange, externalSupervisor, supervisorDOB }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.ProfileSectionContainer}>
      <Typography className={classes.ProfileSectionTitle} variant="h6">{second}</Typography>
      <Grid container spacing={3} justify='space-around'>
        {/* Line Break */}
        <Grid item sm={12}>
          <FormControl component="fieldset">
              <FormControlLabel
                className={classes.CheckBoxLabel}
                value={false}
                control={<Checkbox color={primary} onChange={handleChange} name="internal"/>}
                label="My supervisor is not working at USTH"
                labelPlacement="start"
              />
          </FormControl>
        </Grid>

        {/* Line Break */}
        <Input name="supervisorName" label="Full Name" handleChange={handleChange} width={6} type="text" />

        <Input name="supervisorEmail" label="Email" handleChange={handleChange} width={6} type="text" />
        
        {/* Line Break */}
        <Input name="supervisorPosition" label="Position" handleChange={handleChange} width={4} type="text" />

        <Input name="supervisorDepartment" label="Department" handleChange={handleChange} width={4} type="text" />

        <Input name="supervisorPhone" label="Phone Number" handleChange={handleChange} width={4} type="text" />

        {externalSupervisor && (
          <>
            {/* Line Break */}
            <Input name="supervisorAddress" label="Address" handleChange={handleChange} width={12} type="text" />

            {/* Line Break */}
            <Grid item sx={12} sm={6}>
              <MuiPickersUtilsProvider utils={LuxonUtils} >
                <KeyboardDatePicker className={classes.formControl}
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  label="Date of Birth"
                  value={supervisorDOB}
                  onChange={(date) => handleDateChange(date, "supervisorDOB")} 
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Input name="supervisorPIT" label="PIT Code" handleChange={handleChange} width={6} type="text" />

            {/* Line Break */}
            <Grid item sm={12} className={classes.ProfileSectionSubtitle}>
              <Typography variant="subtitle1">ID/Passport</Typography>
            </Grid>
            <Input name="supervisorIDNo" label="Number" handleChange={handleChange} width={4} type="text" />

            <Input name="supervisorIDDate" label="Given Date" handleChange={handleChange} width={4} type="text" />

            <Input name="supervisorIDPlace" label="Given Place" handleChange={handleChange} width={4} type="text" />

            {/* Line Break */}
            <Grid item sm={12} className={classes.ProfileSectionSubtitle}>
              <Typography variant="subtitle1">Bank Account</Typography>
            </Grid>
            <Input name="supervisorIDDate" label="Bank Name" handleChange={handleChange} width={12} type="text" />

            <Input name="supervisorIDNo" label="Number" handleChange={handleChange} width={6} type="text" />

            <Input name="supervisorIDPlace" label="Branch" handleChange={handleChange} width={6} type="text" />

          </>
        )}
      </Grid>
    </Paper>
  )
}

export default Supervisor
