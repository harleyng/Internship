import React from 'react'
import { Box, Button } from '@material-ui/core'
import FileBase from 'react-file-base64'

import useStyles from './styles'

const CardDetailActionButtons = ({ handleCardChange, handleSubmitCardChange, handleDeleteCard, student, both }) => {
  const classes = useStyles();

  return (
    <Box display='flex' flexDirection='column' alignItems='center' height='100%'>
      <Button className={`${classes.actionButton} ${classes.imageInput}`}><FileBase type="file" multiple={false} onDone={handleCardChange} disabled={!student}/>Attach</Button>
      <Button className={classes.actionButton} onClick={handleSubmitCardChange} disabled={!both}>Update</Button>
      <Button className={classes.actionButton} onClick={handleDeleteCard} disabled={!student}>Delete</Button>
    </Box>
  )
}

export default CardDetailActionButtons
