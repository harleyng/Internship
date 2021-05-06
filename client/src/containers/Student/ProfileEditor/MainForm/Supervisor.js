import React from 'react'
import { Paper, Grid, Typography, FormControl, Checkbox, FormControlLabel } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './styles'
import LuxonUtils from '@date-io/luxon';

import { primary } from '../../../../constants/colors'
import { second } from '../../../../constants/profileSection'
import Input from './Input'

const Supervisor = ({ handleChange, handleDateChange, handleClick, formData }) => {
  const classes = useStyles();
  const externalSupervisor = !formData?.supervisor?.internal;
  return (
    <Paper className={classes.ProfileSectionContainer} onClick={(e) => handleClick(e, 2)}>
      <Typography className={classes.ProfileSectionTitle} variant="h6">{second}</Typography>
      <Grid container spacing={3} justify='space-around'>
        {/* Line Break */}
        <Grid item sm={12}>
          <FormControl component="fieldset">
              <FormControlLabel
                className={classes.CheckBoxLabel}
                value={externalSupervisor}
                control={<Checkbox color={primary} onChange={handleChange} name="supervisor_internal" />}
                label="My supervisor is not working at USTH"
                labelPlacement="start"
              />
          </FormControl> 
        </Grid>

        {/* Line Break */}
        <Input name="supervisor_fullName" value={formData?.supervisor?.fullName} label="Full Name" handleChange={handleChange} width={6} type="text" />

        <Input name="supervisor_email" value={formData?.supervisor?.email} label="Email" handleChange={handleChange} width={6} type="text" />
        
        {/* Line Break */}
        <Input name="supervisor_position" value={formData?.supervisor?.position} label="Position" handleChange={handleChange} width={4} type="text" />

        <Input name="supervisor_department" value={formData?.supervisor?.department} label="Department" handleChange={handleChange} width={4} type="text" />

        <Input name="supervisor_phoneNo" value={formData?.supervisor?.phoneNo} label="Phone Number" handleChange={handleChange} width={4} type="text" />

        {externalSupervisor && (
          <>
            {/* Line Break */}
            <Input name="supervisor_address" value={formData?.supervisor?.address} label="Address" handleChange={handleChange} width={12} type="text" />

            {/* Line Break */}
            <Grid item sx={12} sm={6}>
              <MuiPickersUtilsProvider utils={LuxonUtils} >
                <KeyboardDatePicker className={classes.formControl}
                  
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  label="Date of Birth"
                  value={formData?.supervisor?.DOB}
                  onChange={(date) => handleDateChange(date, "supervisor_DOB")} 
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Input name="supervisor_PITCode" value={formData?.supervisor?.PITCode} label="PIT Code" handleChange={handleChange} width={6} type="text" />

            {/* Line Break */}
            <Grid item sm={12} className={classes.ProfileSectionSubtitle}>
              <Typography variant="subtitle1">ID/Passport</Typography>
            </Grid>
            <Input name="supervisor_personalID_No" value={formData?.supervisor?.personalID?.No} label="Number" handleChange={handleChange} width={4} type="text" />

            <Input name="supervisor_personalID_givenDate" value={formData?.supervisor?.personalID?.givenDate} label="Given Date" handleChange={handleChange} width={4} type="text" />

            <Input name="supervisor_personalID_givenPlace" value={formData?.supervisor?.personalID?.givenPlace} label="Given Place" handleChange={handleChange} width={4} type="text" />

            {/* Line Break */}
            <Grid item sm={12} className={classes.ProfileSectionSubtitle}>
              <Typography variant="subtitle1">Bank Account</Typography>
            </Grid>
            <Input name="supervisor_bankAccount_bankName" value={formData?.supervisor?.bankAccount?.bankName} label="Bank Name" handleChange={handleChange} width={12} type="text" />

            <Input name="supervisor_bankAccount_No" value={formData?.supervisor?.bankAccount?.No} label="Number" handleChange={handleChange} width={6} type="text" />

            <Input name="supervisor_bankAccount_branch" value={formData?.supervisor?.bankAccount?.branch} label="Branch" handleChange={handleChange} width={6} type="text" />
          </>
        )}
      </Grid>
    </Paper>
  )
}

export default Supervisor
