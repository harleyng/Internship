import React, { useEffect } from 'react'
import { Box, Paper, TextareaAutosize, TextField, Typography, FormControlLabel, RadioGroup, Radio } from '@material-ui/core'
import { useSelector } from 'react-redux'

import useStyles from './styles'
import EvaluationFormHeader from './EvaluationFormHeader'
import { defense_evaluation } from '../../../constants/document'
import { overall_1, overall_0, overall_NEG1 } from '../../../constants/evaluation'
import Signature from './Signature'

const value = 1;
const total = 20;
const DefenseForm = () => {
  const classes = useStyles();
  const profile = useSelector(state => state.studentProfile)
  const handleChange = () => {

  }
  useEffect(() => {
    console.log(profile)
  }, [profile])

  return (
    <Paper className={classes.formContainer}>
      <EvaluationFormHeader documentName={defense_evaluation} studentName={profile?.fullName} internshipTopic={profile?.internship?.topic} />
      <div>
        <table className={classes.rowColorTable}>
          <colgroup>
            <col width='90%' />
            <col width='10%' />
          </colgroup>
          <tr>
            <td><Typography className={classes.heading} display='inline'>evaluation criteria</Typography></td>
            <td><Typography className={classes.bold}>MARK *</Typography></td>
          </tr>
          <tr>
            <td>
              <Box className={classes.bold}>1. Introduction</Box>
              (Background information, problem statements, aims/objectives)  
            </td>
            <td><TextField name='introduction' className={classes.textField}/></td>
          </tr>
          <tr>
            <td>
              <Box className={classes.bold}>2. Literature Review</Box>
              (Relevant literatures, reasonable review parameter, recent development, organization of issues, etc)  
            </td>
            <td><TextField name='literatureReview' className={classes.textField} /></td>
          </tr>
          <tr>
            <td>
              <Box className={classes.bold}>3. Research Methodology</Box>
              (Description of method, experimental design, etc.)
            </td>
            <td><TextField name='researchMethodology' className={classes.textField} /></td>
          </tr>
          <tr>
            <td>
              <Box className={classes.bold}>4. Feasibility of Study and Preliminary Results </Box>
              (In terms of scope, time, resources & practicality; presentation – statistical analysis, graphs, tables, etc.)
            </td>
            <td><TextField name='feasibilityStudy' className={classes.textField} /></td>
          </tr>
          <tr>
            <td>
              <Box className={classes.bold}>5. Overall Performance</Box>
              (Presentation skills, shows confidence during Q&A session, etc.) 
            </td>
            <td><TextField name='overallPerformance' className={classes.textField} /></td>
          </tr>
        </table>
        <Typography align='right' variant='caption' display='block'>* Grade on sacle of 1 to 4, including half grades</Typography>
        <Typography className={classes.heading} display='inline'>overall performance</Typography><Typography display='inline'> &nbsp;&nbsp; {total}/20</Typography>
      </div>
      <div>
        <Typography className={classes.heading} display='inline'>overall decistion</Typography>
        <Box>
          <RadioGroup name="reportRating" value={value} onChange={handleChange} className={classes.radioGroup}>
            <FormControlLabel value={1} control={<Radio />} label={overall_1} />
            <FormControlLabel value={0} control={<Radio />} label={overall_0} />
            <FormControlLabel value={-1} control={<Radio />} label={overall_NEG1} />
          </RadioGroup>
        </Box>
        <Typography variant='caption'><b>Note: *</b> Written comments must be provided if either one of these two categories</Typography>
      </div>
      <Signature />
      <div>
        <Typography className={classes.heading} display='inline'>comments</Typography>
        <Typography variant='p' display='block'>(Please indicate any additional comments or suggestions you have for the student)</Typography>
        <TextareaAutosize rowsMin={10} className={classes.commentArea}/>
      </div>
    </Paper>
  )
}

export default DefenseForm
