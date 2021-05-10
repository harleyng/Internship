import React from 'react'
import { Paper, Typography, Grid, TextField  } from '@material-ui/core'
import useStyles from './styles'

import { third } from '../../../../constants/profileSection'
import Input from './Input'

const Topic = ({ handleChange, handleClick, formData }) => {
  const classes = useStyles();

  const renderTopicStatus = () => {
    // console.log(formData?.internship?.topicStatus)
    if (formData?.internship?.topicStatus === 'Pending') {
      return (
        <Typography className={`${classes.pendingStatus} ${classes.status}`}>
          {formData?.internship?.topicStatus}
        </Typography> 
      )
    }
    if (formData?.internship?.topicStatus === 'Approved') {
      return (
        <Typography className={`${classes.approvedStatus} ${classes.status}`}>
          {formData?.internship?.topicStatus}
        </Typography> 
      )
    }
    if (formData?.internship?.topicStatus === 'Refused') {
      return (
        <Typography className={`${classes.refusedStatus} ${classes.status}`}>
          {formData?.internship?.topicStatus}
        </Typography> 
      )
    }
  }
  return (
    <Paper className={classes.ProfileSectionContainer} onClick={(e) => handleClick(e, 3)}>
      <Typography className={classes.ProfileSectionTitle} variant="h6">{third}</Typography>
      <Grid container spacing={3} justify='space-around'>
        <Input name="internship_topic" value={formData?.internship?.topic} label="Topic" handleChange={handleChange} width={10} type="text" />
        <Grid item sm={2} style={{margin: 'auto'}}>
          {renderTopicStatus()}
        </Grid>
        {/* Line Break */}
        <Grid item sm={12}>
          <TextField
            className={classes.textArea}
            name="internship_description"
            value={formData?.internship?.description}
            InputLabelProps={{ shrink: true }}
            label="Description"
            multiline
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
        {/* Line Break */}
        <Grid item sm={12}>
          <TextField
            className={classes.textArea}
            name="internship_objective"
            value={formData?.internship?.objective}
            InputLabelProps={{ shrink: true }}
            label="Objective"
            multiline
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        {/* Line Break */}
        <Grid item sm={12}>
          <TextField
            className={classes.textArea}
            name="internship_outcome"
            value={formData?.internship?.outcome}
            InputLabelProps={{ shrink: true }}
            label="Outcome"
            multiline
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Paper>
  ) 
}

export default Topic
