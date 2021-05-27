import React from 'react'
import { Box, Button } from '@material-ui/core'

import useStyles from './styles'

const ActionButtons = ({ handleOpenModal }) => {
  const classes = useStyles();

  return (
    <Box align='right'>
      <Button className={classes.planButton} onClick={() => handleOpenModal("Add")}>Add Period</Button>
      <Button className={classes.planButton} onClick={() => handleOpenModal("Update")}>Update Period</Button>
      <Button className={classes.planButton} >Delete Period</Button>
    </Box>
  )
}

export default ActionButtons
