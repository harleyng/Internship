import React from 'react' 
import { Grid, Typography, CircularProgress, Divider, Paper, Button, Box } from '@material-ui/core'

import USTHLogo from '../../assets/img/usth-logo.png'
import useStyles from './styles'
import { annex2 } from '../../setting/constants/document'

const Annex2 = ({ profile, download, documentMode }) => {
  const classes = useStyles();
  return (
    !profile.supervisor && !profile.internship ? <CircularProgress /> : (
      <>
        {documentMode?.annex2 && (
          <div className={classes.documentContainer}>
            <Grid container justify='space-between' className={classes.documentNavbar}>
              <Grid item xs={10}><Typography variant='h5'>{annex2} (Annex 2)</Typography></Grid>
              <Grid item xs={2} align='right'><Button onClick={() => download('Annex2', 600)}>Download</Button></Grid>
            </Grid>
            <div className={classes.documentWrapper} overflow='scroll' id="Annex2">
              <Paper className={classes.document}>
                <Grid container spacing={2} justify='center' alignItems='center'> 
                  <Grid item><img src={USTHLogo} style={{width: '100%'}}/></Grid>
                  <Grid item>
                    <Typography variant='h7' display="block">UNIVERSITY OF SCIENCE AND TECHNOLOGY OF HANOI</Typography>
                    <Typography variant='h7'>TRƯỜNG ĐẠI HỌC KHOA HỌC VÀ CÔNG NGHỆ HÀ NỘI</Typography>
                  </Grid>
                </Grid>
                <Box className={classes.documentTitle}>
                  <Typography variant='h5' align='center'>{annex2}</Typography>
                </Box>
                <Grid container spacing={1}>
                  <Grid item><Typography variant='p'>Attention to:</Typography></Grid>
                  <Grid item xs={10}>
                  <Typography variant='p'><b> Rector Board – University of Science and Technology of Hanoi 
                    Director of Department of Information and Communicaion Technology
                  </b></Typography>
                  </Grid>
                </Grid>

                <Typography variant='p' display="block" paragraph>
                  Student's full name: {profile.fullName}. 
                  Date of birth: {new Date(profile.DOB).toLocaleDateString('en-GB')}. 
                  Student's code: {profile.studentID}.
                  Department: {profile.department}.
                </Typography>

                <Typography variant='p' display="block" paragraph>
                  I have been accepted by {profile.supervisor.fullName} to implement the internship at {profile.internship.host} from {new Date(profile.internship.startTime).toLocaleDateString('en-GB')} to {new Date(profile.internship.endTime).toLocaleDateString('en-GB')}. 
                  My topic is: {profile.internship.topic}
                </Typography>

                <Typography variant='p' display="block" paragraph>
                  I would kindly request the University’s approval for my internship and I hereby undertake to fulfill all the rights and obligations as in the Internship regulations of USTH and the regulations at the internship place. 
                </Typography>

                <Typography variant='p' display="block" paragraph>
                  I hereby declare that the above statements are true and I will be legally responsible for my misstatements.
                </Typography>

                <Typography variant='p' display="block"><i>Ha Noi, {new Date().toLocaleDateString('en-GB')}</i></Typography>
                <Typography variant='p' display="block" className={classes.studentSignature}><b>Student's signature</b></Typography>
                <Divider />

                <Grid container justify='space-between'>
                  <Grid item xs={4}>
                    <Typography variant='p' display="block" paragraph><b>Department's comment:</b></Typography>
                    <ul style={{listStyle: 'none', padding: 0}}>
                      <li>&#9633; <span>Approved:</span></li>
                      <li style={{margin: '10px 0'}}>&#9633; <span>Need to consider:</span></li>
                      <li>&#9633; <span>Other comments:</span></li>
                    </ul>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant='p' display="block"><b>Signature:</b></Typography>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </div>
        )}
      </>
    )
  )
}

export default Annex2
