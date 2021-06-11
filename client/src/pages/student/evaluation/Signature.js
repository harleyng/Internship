import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import useStyles from './styles'

const Signature = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={7} />
      <Grid item xs={4} className={classes.signature}>
        <Typography className={classes.bold}>Date:</Typography>
        <Typography className={classes.bold} variant='h6'>SIGNATURE</Typography>
      </Grid>
    </Grid>
  )
}

export default Signature
