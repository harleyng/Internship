import React from 'react'
import { Grid, TextField, Typography, Box } from '@material-ui/core'

import useStyles from './styles'
import logo from '../../../assets/img/usth-logo.png'
import { university_EN } from '../../../constants/document'

const EvaluationFormHeader = ({ documentName, studentName, internshipTopic, handleEvaluation, juryData, department }) => {
  const classes = useStyles();
  const year = new Date().getFullYear()

  return (
    <div>
      <Grid container>
        <Grid xs={3}><img src={logo} /></Grid>
        <Grid xs={9} className={classes.bold}>
          <Box align='center' mb={3}>
            <Typography display='block' variant='h6' className={classes.bold}>{university_EN}</Typography>
            <Typography display='block' className={classes.bold}>{documentName}</Typography>
          </Box>
          <Grid container>
            <Grid xs={9}>Department: {department}</Grid>
            <Grid xs={3}>Year: {year}</Grid>
          </Grid>
        </Grid>
      </Grid>
      <table className={classes.overallInformation}>
        <colgroup>
          <col width='30%' />
          <col width='70%' />
        </colgroup>
        <tr>
          <td className={classes.italic}>Student's Name</td>
          <td>{studentName}</td>
        </tr>
        <tr>
          <td className={classes.italic}>Internship Topic</td>
          <td>{internshipTopic}</td>
        </tr>
        <tr>
          <td className={classes.italic}>Jury Member</td>
          <td><TextField className={classes.textField} name='juryMember' onChange={handleEvaluation} value={juryData?.juryMember}/></td>
        </tr>
        <tr>
          <td className={classes.italic}>Institution</td>
          <td><TextField className={classes.textField} name='institution' onChange={handleEvaluation} value={juryData?.institution} /></td>
        </tr><tr>
          <td className={classes.italic}>Contact (email & phone)</td>
          <td><TextField className={classes.textField} name='contact' onChange={handleEvaluation} value={juryData?.contact} /></td>
        </tr>
      </table>
    </div>
  )
}

export default EvaluationFormHeader
