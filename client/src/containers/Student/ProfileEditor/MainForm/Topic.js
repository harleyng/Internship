import React from 'react'
import { Paper, Typography  } from '@material-ui/core'
import useStyles from './styles'

import { third } from '../../../../constants/profileSection'
import Input from './Input'

const Topic = ({ handleChange }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.ProfileSectionContainer}>
      <Typography className={classes.ProfileSectionTitle} variant="h6">{third}</Typography>
        <Input name="topic" label="Topic" handleChange={handleChange} width={12} type="text" />
    </Paper>
  )
}

export default Topic
