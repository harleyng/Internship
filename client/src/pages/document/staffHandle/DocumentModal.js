import React from 'react'
import { Typography, Button, Modal, TextField, Paper, Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FileBase from 'react-file-base64'

import { annex2, annex3_EN, annex4_EN, annex5_EN, annex6_EN } from '../../../setting/constants/document'

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    width: '30vw',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(calc(-50% + 120px), -25%)'
  },
  modalContent: {
    padding: theme.spacing(5)
  }, 
  modalTitle: {
    marginBottom: theme.spacing(3)
  },
}))

const DocumentModal = ({ modalOpen, handleCloseModal, handleChange, handleSubmit, actionType, documentData}) => {
  const classes = useStyles();
  console.log(documentData)
  return (
  <Modal
    open={modalOpen}
    onClose={handleCloseModal}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
    <form className={classes.modalContainer} onSubmit={handleSubmit}>
      <Paper className={classes.modalContent}>
        <Typography className={classes.modalTitle} align='center' variant='h5'>{actionType === 'Create' ? 'Creating' : 'Editing'} a Document</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl variant="outlined" className={classes.formControl} InputLabelProps={{ shrink: true }} fullWidth>
              <InputLabel>Name</InputLabel>
              <Select
                name="name"
                value={documentData?.document?.name} 
                onChange={handleChange}
                label="Name"
              >
                <MenuItem value={annex2}>{annex2} (Annex2)</MenuItem>
                <MenuItem value={annex3_EN}>{annex3_EN} (Annex3)</MenuItem>
                <MenuItem value={annex4_EN}>{annex4_EN} (Annex4)</MenuItem>
                <MenuItem value={annex5_EN}>{annex5_EN} (Annex5)</MenuItem>
                <MenuItem value={annex6_EN}>{annex6_EN} (Annex6)</MenuItem>
                <MenuItem value=""><em>None</em></MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
            name="status"
            InputLabelProps={{ shrink: true }}
            label="Status"
            value={documentData?.document?.status}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
             <FileBase 
              type="file"
              multiple={false}
              onDone={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' fullWidth>Submit</Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  </Modal>
  )
}

export default DocumentModal
