import React, { useState } from 'react'
import { Box, Modal, Typography, Paper, Grid } from '@material-ui/core'
import { Close, Notes, AttachFile, Chat } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { updateTaskCard, deleteTaskCard } from '../../../actions/task'

import useStyles from '../../../components/logbook/task/styles'
import CardDetailInput from './CardDetailInput'
import CardDetailActionButtons from './CardDetailActionButtons'

const CardDetail = ({ showTaskDetail, handleCloseTaskDetail, cardData, taskID, listID }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))
  const [updatedCard, setUpdatedCard] = useState(cardData)
  console.log(updatedCard)

  const handleCardChange = (e) => {
    setUpdatedCard({...updatedCard, [e.target.name]: e.target.value})
  }

  const handleSubmitCardChange = (e) => {
    dispatch(updateTaskCard(taskID, listID, updatedCard))
  }

  const handleDeleteCard = () => {
    dispatch(deleteTaskCard(taskID, listID, updatedCard))
    handleCloseTaskDetail();
  }

  return (
    <Modal
      open={showTaskDetail}
      onClose={handleCloseTaskDetail}
    >
      <Box className={classes.modalContainer}>
        <Paper className={classes.modalContent}> 
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography variant='h5'><b>{cardData.title}</b></Typography>
            <Close onClick={handleCloseTaskDetail}/>
          </Box>
          <Grid container className={classes.modalMainContent}>
            <Grid item xs={10}>
              <Box mb={2}>
                <Notes className={classes.modalSectionIcon} />
                <Typography display='inline' variant='h6' >Description</Typography>
              </Box>
              <CardDetailInput 
                name="description"
                value={updatedCard?.description}
                onChange={handleCardChange}
                placeholder="Add detail description..."
                disabled={user?.result?.role === 'Supervisor'}
               />
               {
                 updatedCard?.attachment && (
                  <>
                    <Box mb={2}>
                      <AttachFile className={classes.modalSectionIcon} />
                      <Typography display='inline' variant='h6' >Attachment</Typography>
                    </Box>
                    {updatedCard.attachment}
                  </>
                 )
               }
               {
                 updatedCard?.comment && (
                  <>
                    <Box mb={2}>
                      <Chat className={classes.modalSectionIcon} />
                      <Typography display='inline' variant='h6'>Comment</Typography>
                    </Box>
                    {updatedCard.comment}
                  </>
                 )
               }
            </Grid>
            <Grid item xs={2}>
              <CardDetailActionButtons handleSubmitCardChange={handleSubmitCardChange} handleDeleteCard={handleDeleteCard} />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Modal>
  )
}

export default CardDetail
