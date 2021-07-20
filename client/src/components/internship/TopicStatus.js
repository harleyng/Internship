import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { yellow, red, green } from '../../setting/constants/colors'

const useStyles = makeStyles((theme) => ({
  general: {
    padding: '0 10px',
    border: '1px solid',
    borderRadius: '20px',
  },
  pending: {
    color: yellow,
    borderColor: yellow,
  },
  approved: {
    color: green,
    borderColor: green,
  }, 
  refused: {
    color: red,
    borderColor: red,
  }
}))

const TopicStatus = ({ status, value }) => {
  const classes = useStyles();

  return (
    <Typography className={`${classes.general} ${classes.[`${status}`]}`}>
      {value}
    </Typography> 
  )
}

export default TopicStatus
