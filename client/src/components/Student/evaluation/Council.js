import React from 'react'
import { FormControl, OutlinedInput, InputAdornment, Paper, Typography } from "@material-ui/core";

const Council = (props) => {
  const studentID = props.match.params.studentID;
  return (
    <Paper>
      <Typography>Evaluate your student on the scale of 20</Typography>
      <FormControl variant="outlined">
        <OutlinedInput
          // value={values.weight}
          // onChange={handleChange('weight')}
          type="number"
          endAdornment={<InputAdornment position="end">/20</InputAdornment>}
          labelWidth={0}
        />
      </FormControl>
    </Paper>
  )
}

export default Council
