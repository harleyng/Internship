import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Container, FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import useStyles from './styles'
import Input from './Input'
import { signin, signup } from '../../actions/auth'

const initialState = { email: '', password: '', confirmPassword: '', role: '' }

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState(initialState)

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, history))
    } else {
      dispatch(signin(formData, history))
    }
  };

  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  }; 

  return (
    <Container className={classes.AuthContainer} component="main" maxWidth="sx">
      <Paper className={classes.AuthContentContainer} elevation={3}>
        <Typography className={classes.AuthTitle} variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container justify="flex-end">
            <Grid item>
              <Button className='noColorButton' onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign In' : 'Dont have an account? Sign Up' }
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && 
            <>
              <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> 
              <Grid item xs={12}>
                <FormControl component="fieldset" className={classes.RoleContainer}>
                  <FormLabel component="legend">Role</FormLabel>
                  <RadioGroup
                    aria-label="Role"
                    name="role"
                    className={classes.RoleRadioGroup}
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="student" control={<Radio />} label="Student" />
                    <FormControlLabel value="staff" control={<Radio />} label="Staff" />
                    <FormControlLabel value="lecturer" control={<Radio />} label="Lecturer" />
                    <FormControlLabel value="council" control={<Radio />} label="Council" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </>
            }
          </Grid>
          <Button className={classes.AuthSubmitButton} fullWidth type="submit" variant="contained" color="primary">
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
