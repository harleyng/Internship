import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import notFoundImage from '../assets/img/not-found-image.png'

const NotFound = () => {
  return (
    <Grid container style={{backgroundColor: '#f5f5f5', minHeight: '100vh'}}>
      <Grid item xs={6} style={{textAlign: 'center', margin: 'auto'}}><img src={notFoundImage} style={{width: '60%'}}/></Grid>
      <Grid item xs={6} style={{height: '100%', margin: 'auto'}}>
        <Typography variant='h2' paragraph style={{marginBottom: '40px'}}>Awww...Don't Cry.</Typography>
        <Typography variant='h6'>It's just a 404 Error!</Typography>
        <Typography variant='h6'>Please go back to the previous page</Typography>
      </Grid>
    </Grid>
  )
}

export default NotFound
