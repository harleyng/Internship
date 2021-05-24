import React, { useEffect } from 'react'
import { Paper, Typography, TextareaAutosize, Box, FormControl, RadioGroup, FormControlLabel, Radio, TextField } from '@material-ui/core'
import { useSelector } from 'react-redux'

import useStyles from './styles'
import EvaluationFormHeader from './EvaluationFormHeader'
import Signature from './Signature'
import { report_evaluation } from '../../../constants/document'

const total = 20;
const value = 1;

const ReportForm = () => {
  const classes = useStyles();
  const profile = useSelector(state => state.studentProfile)

  useEffect(() => {
    console.log(profile)
  }, [profile])
  
  const handleChange = () => {

  }

  return (
    <Paper className={classes.formContainer}>
      <EvaluationFormHeader documentName={report_evaluation}  studentName={profile?.fullName} internshipTopic={profile?.internship?.topic} />
      <Box>
        <Typography className={classes.heading} display='inline'>ratings</Typography>
        <Typography variant='p' display='block'>Choose the rating which best describes the report content written by the intern.</Typography>
        <Typography variant='p' display='block'>Your opinion will be a major factor in the student’s evaluation for purposes of grading.</Typography>
        <FormControl component="fieldset">
          <RadioGroup name="reportRating" value={value} onChange={handleChange} style={{flexDirection:'row'}}>
            <FormControlLabel value={1} control={<Radio />} label="Insufficient" />
            <FormControlLabel value={2} control={<Radio />} label="Sufficient" />
            <FormControlLabel value={3} control={<Radio />} label="Fair" />
            <FormControlLabel value={4} control={<Radio />} label="Good" />
            <FormControlLabel value={5} control={<Radio />} label="Excellent" />
          </RadioGroup>
        </FormControl>
      </Box>
      <div>
        <table>
          <tr>
            <td><Typography className={classes.heading} display='inline'>review</Typography></td>
            <td></td>
          </tr>
          <tr>
            <td className={classes.bold}>1. The report compiles with academic standards concerning its contents</td>
            <td></td>
          </tr>
          <tr>
            <td className={classes.listDash}><Box ml={2} display='list-item'>Includes a background explaining the problem definition and an overview of prior knowledge.</Box></td>
            <td><TextField name='background' /></td>
          </tr>
          <tr>
            <td className={classes.listDash}><Box ml={2} display='list-item'>Includes one or more research questions/objectives.</Box></td>
            <td><TextField name='objective' /></td>
          </tr>
          <tr>
            <td className={classes.listDash}><Box ml={2} display='list-item'>Describes the experimental and methodological approach.</Box></td>
            <td><TextField name='approach' /></td>
          </tr>
          <tr>
            <td className={classes.listDash}><Box ml={2} display='list-item'>Clearly and objectively describes the results</Box></td>
            <td><TextField name='results' /></td>
          </tr>
          <tr>
            <td className={classes.bold}>2. The report compiles with academic standards concerning style and layout</td>
            <td></td>
          </tr>
          <tr>
            <td className={classes.listDash}><Box ml={2} display='list-item'>Is grammatically well-written</Box></td>
            <td><TextField name='grammar' /></td>
          </tr>
          <tr>
            <td className={classes.listDash}><Box ml={2} display='list-item'>Includes tables and figures to summarize important information.</Box></td>
            <td><TextField name='visualization' /></td>
          </tr>
          <tr>
            <td className={classes.bold}>3. The report reflects a systematic approach</td>
            <td><TextField name='systematic' /></td>
          </tr>
          <tr>
            <td className={classes.bold}>4. The report demonstrates a capacity to reflect on strengths and weaknesses of the study, and the interpretation of the results</td>
            <td><TextField name='interpretation' /></td>
          </tr>
        </table>
      </div>
      <Typography className={classes.heading} display='inline'>overall performance</Typography><Typography display='inline'> &nbsp;&nbsp; {total}/20</Typography>
      <Typography>(Grade on scale of 1 to 20, including half grades)</Typography>
      <Signature />
      <div>
        <Typography className={classes.heading} display='inline'>comments</Typography>
        <Typography variant='p' display='block'>(Please indicate any additional comments or suggestions you have for the student)</Typography>
        <TextareaAutosize rowsMin={10} className={classes.commentArea}/>
      </div>
    </Paper>
  )
}

export default ReportForm