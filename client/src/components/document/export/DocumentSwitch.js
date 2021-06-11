import React, { useEffect } from 'react'
import { FormControl, FormLabel, FormGroup, FormControlLabel, Switch } from "@material-ui/core";

import { annex2, annex3_EN, annex4_EN, annex5_EN, annex6_EN } from '../../../setting/constants/document'
import useStyles from './styles'

const DocumentSwitch = ({ documentMode, handleChange }) => {
  const classes = useStyles();
  useEffect(() => {

  }, [documentMode])
  return (
    <div className={classes.SideSticky}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Document Switch</FormLabel>
        <FormGroup>
          <FormControlLabel
            className={classes.SwitchLabel}
            control={<Switch checked={documentMode.annex2} onChange={handleChange} color="primary" name="annex2" />}
            label={annex2}
          />
          <FormControlLabel
            className={classes.SwitchLabel}
            control={<Switch checked={documentMode.annex3} onChange={handleChange} color="primary" name="annex3" />}
            label={annex3_EN}
          />
          <FormControlLabel
            className={classes.SwitchLabel}
            control={<Switch checked={documentMode.annex4} onChange={handleChange} color="primary" name="annex4" />}
            label={annex4_EN}
          />
          <FormControlLabel
            className={classes.SwitchLabel}
            control={<Switch checked={documentMode.annex5} onChange={handleChange} color="primary" name="annex5" />}
            label={annex5_EN}
          />
          <FormControlLabel
            className={classes.SwitchLabel}
            control={<Switch checked={documentMode.annex6} onChange={handleChange} color="primary" name="annex6" />}
            label={annex6_EN}
          />
        </FormGroup>
      </FormControl>
    </div>
  )
}

export default DocumentSwitch
