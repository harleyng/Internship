import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { yellow, red, green } from '../../../constants/colors'

const useStyles = makeStyles((theme) => ({
  status: {
    padding: '5px 15px',
    border: '2px solid',
    borderRadius: '20px',
  },
  pendingStatus: {
    color: yellow,
    borderColor: yellow,
  },
  approvedStatus: {
    color: green,
    borderColor: green,
  }, 
  refusedStatus: {
    color: red,
    borderColor: red,
  }
}))

const TopicStatus = ({ className, value }) => {
  const classes = useStyles();
  return (
    <Typography className={`${classes.status} ${className}`}>
      {value}
    </Typography> 
  )
}

export default TopicStatus
