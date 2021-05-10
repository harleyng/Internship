import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'

import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({ name, value, handleChange, label, width, type, required, disabled  }) => {
  return (
    <Grid item sm={12} md={width}>
      <TextField 
        disabled={disabled}
        name={name}
        value={value}
        InputLabelProps={{ shrink: true }}
        onChange={handleChange} 
        variant="outlined"
        fullWidth
        label={label}
        type={type}
        required={required}
        InputProps={name === 'password' ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                {type === 'password' ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        } : null} 
      />
    </Grid>
  )
}

export default Input
