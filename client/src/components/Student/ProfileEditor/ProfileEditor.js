import React from 'react'
import { Container, Grid } from '@material-ui/core'

import MainForm from './MainForm'
import SideNavigator from './SideNavigator'

const ProfileEditor = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={3} >
        <SideNavigator />
      </Grid>
      <Grid item xs={12} sm={9} md={8} lg={6}>
        <MainForm />
      </Grid>
    </Grid>
  )
}

export default ProfileEditor
