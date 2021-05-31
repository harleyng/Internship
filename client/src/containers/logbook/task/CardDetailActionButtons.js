import React from 'react'
import { Box, Button } from '@material-ui/core'
import FileBase from 'react-file-base64'

import useStyles from './styles'

const CardDetailActionButtons = ({ handleCardChange, handleSubmitCardChange, handleDeleteCard, disabled }) => {
  const classes = useStyles();

  return (
    <Box display='flex' flexDirection='column' alignItems='center' height='100%'>
      <Button className={`${classes.actionButton} ${classes.imageInput}`}><FileBase type="file" multiple={false} onDone={handleCardChange} disabled={disabled}/>Attach</Button>
      <Button className={classes.actionButton} onClick={handleSubmitCardChange} disabled={disabled}>Update</Button>
      <Button className={classes.actionButton} onClick={handleDeleteCard} disabled={disabled}>Delete</Button>
    </Box>
  )
}

export default CardDetailActionButtons
