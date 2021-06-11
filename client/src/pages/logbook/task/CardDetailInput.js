import React from 'react'
import { TextareaAutosize } from '@material-ui/core'
import useStyles from './styles'

const CardDetailInput = ({ name, value, onChange, placeholder, disabled }) => {
  const classes = useStyles();

  return (
    <TextareaAutosize 
      className={classes.textArea}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      fullWidth
      rowsMin={5}
    /> 
  )
}

export default CardDetailInput
