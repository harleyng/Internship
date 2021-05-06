import React from 'react'
import { Paper, Typography  } from '@material-ui/core'
import useStyles from './styles'

import { third } from '../../../../constants/profileSection'
import Input from './Input'

const Topic = ({ handleChange, handleClick, formData }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.ProfileSectionContainer} onClick={(e) => handleClick(e, 3)}>
      <Typography className={classes.ProfileSectionTitle} variant="h6">{third}</Typography>
        <Input name="internship_topic" value={formData?.internship?.topic} label="Topic" handleChange={handleChange} width={12} type="text" />
    </Paper>
  )
}

export default Topic
