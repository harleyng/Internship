import React from 'react'
import { Paper, Typography, TextareaAutosize, Box, RadioGroup, FormControlLabel, Radio, TextField, InputAdornment, Button, Icon } from '@material-ui/core'

import useStyles from './styles'
import EvaluationFormHeader from './EvaluationFormHeader'
import Signature from './Signature'
import { report_evaluation } from '../../../setting/constants/document'

const ReportForm = ({profile, handleEvaluation, sendEvaluationForm, reportData, total}) => {
  const classes = useStyles();
  console.log(reportData?.review)
  return (
    <Box>
      <Paper className={classes.formContainer}>
        <EvaluationFormHeader documentName={report_evaluation} studentName={profile?.fullName} internshipTopic={profile?.internship?.topic} handleEvaluation={handleEvaluation} juryData={reportData} />
        <Box>
          <Typography className={classes.heading} display='inline'>ratings</Typography>
          <Typography variant='p' display='block'>Choose the rating which best describes the report content written by the intern.</Typography>
          <Typography variant='p' display='block'>Your opinion will be a major factor in the student’s evaluation for purposes of grading.</Typography>
          <RadioGroup name="ratings" value={reportData?.ratings} onChange={handleEvaluation}>
            <FormControlLabel value={1} control={<Radio />} label="Insufficient" />
            <FormControlLabel value={2} control={<Radio />} label="Sufficient" />
            <FormControlLabel value={3} control={<Radio />} label="Fair" />
            <FormControlLabel value={4} control={<Radio />} label="Good" />
            <FormControlLabel value={5} control={<Radio />} label="Excellent" />
          </RadioGroup>
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
              <td><TextField name='review_background' value={reportData?.review?.background} type="number" InputProps={{endAdornment: <InputAdornment position="end">/ 1</InputAdornment>}} onChange={(e) => handleEvaluation(e)}/></td>
            </tr>
            <tr>
              <td className={classes.listDash}><Box ml={2} display='list-item'>Includes one or more research questions/objectives.</Box></td>
              <td><TextField name='review_objective' value={reportData?.review?.objective} type="number" InputProps={{endAdornment: <InputAdornment position="end">/ 1</InputAdornment>}} onChange={(e) => handleEvaluation(e)} /></td>
            </tr>
            <tr>
              <td className={classes.listDash}><Box ml={2} display='list-item'>Describes the experimental and methodological approach.</Box></td>
              <td><TextField name='review_approach' value={reportData?.review?.approach} type="number" InputProps={{endAdornment: <InputAdornment position="end">/ 1</InputAdornment>}} onChange={(e) => handleEvaluation(e)} /></td>
            </tr>
            <tr>
              <td className={classes.listDash}><Box ml={2} display='list-item'>Clearly and objectively describes the results</Box></td>
              <td><TextField name='review_results' value={reportData?.review?.results} type="number" InputProps={{endAdornment: <InputAdornment position="end">/ 2</InputAdornment>}} onChange={(e) => handleEvaluation(e)} /></td>
            </tr>
            <tr>
              <td className={classes.bold}>2. The report compiles with academic standards concerning style and layout</td>
              <td></td>
            </tr>
            <tr>
              <td className={classes.listDash}><Box ml={2} display='list-item'>Is grammatically well-written</Box></td>
              <td><TextField name='review_grammar' value={reportData?.review?.grammar} type="number" InputProps={{endAdornment: <InputAdornment position="end">/ 3</InputAdornment>}} onChange={(e) => handleEvaluation(e)} /></td>
            </tr>
            <tr>
              <td className={classes.listDash}><Box ml={2} display='list-item'>Includes tables and figures to summarize important information.</Box></td>
              <td><TextField name='review_visualization' value={reportData?.review?.visualization} type="number" InputProps={{endAdornment: <InputAdornment position="end">/ 2</InputAdornment>}} onChange={(e) => handleEvaluation(e)} /></td>
            </tr>
            <tr>
              <td className={classes.bold}>3. The report reflects a systematic approach</td>
              <td><TextField name='review_systematic' value={reportData?.review?.systematic} type="number" InputProps={{endAdornment: <InputAdornment position="end">/ 5</InputAdornment>}} onChange={(e) => handleEvaluation(e)} /></td>
            </tr>
            <tr>
              <td className={classes.bold}>4. The report demonstrates a capacity to reflect on strengths and weaknesses of the study, and the interpretation of the results</td>
              <td><TextField name='review_interpretation' value={reportData?.review?.interpretation} type="number" InputProps={{endAdornment: <InputAdornment position="end">/ 5</InputAdornment>}} onChange={(e) => handleEvaluation(e)} /></td>
            </tr>
          </table>
        </div>
        <Typography className={classes.heading} display='inline'>overall performance</Typography><Typography display='inline'> &nbsp;&nbsp; {total}/20</Typography>
        <Typography>(Grade on scale of 1 to 20, including half grades)</Typography>
        <Signature />
        <div>
          <Typography className={classes.heading} display='inline'>comments</Typography>
          <Typography variant='p' display='block'>(Please indicate any additional comments or suggestions you have for the student)</Typography>
          <TextareaAutosize rowsMin={10} className={classes.commentArea} name='comments' value={reportData?.comments} onChange={handleEvaluation} />
        </div>
      </Paper>
      <Box align='right' mt={3} mr={1}>
        <Button onClick={sendEvaluationForm} endIcon={<Icon>send</Icon>} >Send Form</Button>
      </Box>
    </Box>
  )
}

export default ReportForm