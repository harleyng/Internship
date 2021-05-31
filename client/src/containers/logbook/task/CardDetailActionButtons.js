import React from 'react'
import { Box, Button } from '@material-ui/core'
import useStyles from './styles'

const CardDetailActionButtons = ({ handleSubmitCardChange, handleDeleteCard }) => {
  const classes = useStyles();

  return (
    <Box display='flex' flexDirection='column' justifyContent='space-between' alignItems='center' height='100%'>
      <Button className={classes.actionButton}>Attach</Button>
      <Button className={classes.actionButton} onClick={handleSubmitCardChange}>Update</Button>
      <Button className={classes.actionButton} onClick={handleDeleteCard}>Delete</Button>
    </Box>
  )
}

export default CardDetailActionButtons
