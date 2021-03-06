import React, { useEffect } from 'react' 
import { Grid, Typography, CircularProgress, Paper, Button, Box } from '@material-ui/core'

import useStyles from './styles'
import { annex5_EN, annex5_VN, 
         document_header_1_EN, document_header_1_VN, 
         document_header_2_EN, document_header_2_VN 
        } from '../../setting/constants/document'

const Annex5 = ({ profile, download, documentMode }) => {
  const classes = useStyles();
  const today = new Date().toLocaleDateString('en-GB');

  useEffect(() => {

  }, [profile])
  return (
    !profile.supervisor && !profile.internship ? <CircularProgress /> : (
      <>
        {documentMode?.annex5 && (
          <div className={classes.documentContainer}>
            <Grid container justify='space-between' className={classes.documentNavbar}>
              <Grid item xs={10}><Typography variant='h5'>{annex5_EN} (Annex 5)</Typography></Grid>
              <Grid item xs={2} align='right'><Button onClick={() => download('Annex5', 1000)}>Download</Button></Grid>
            </Grid>
            <Box className={classes.documentWrapper} overflow='scroll' id="Annex5">
              <Paper className={classes.document} >
                {/* Header */}
                <div className={classes.annex4Header}>
                  <div className={classes.uppercase}><b>{document_header_1_VN}</b></div>
                  <div className={classes.uppercase}><i>{document_header_1_EN}</i></div>
                  <div><b>{document_header_2_VN}</b></div>
                  <div><i>{document_header_2_EN}</i></div>
                  <div>------------------------------o0o------------------------------</div>
                </div>
                
                {/* Title */}
                <Box className={classes.documentTitle} style={{margin: '20px 0'}}>
                  <Typography variant='h5' align='center'>{annex5_VN}</Typography>
                  <Typography variant='h5' align='center'><i>{annex5_EN}</i></Typography>
                </Box>
                
                {/* Parties */}
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>
                    <Typography variant='p' display="block" paragraph><b>Cam k???t</b> n??y ???????c l???p v?? c?? hi???u l???c t??? ng??y {today}, b???i c??c b??n:<br/>
                      <i>This Commitment is made and takes effect from dated {today}, by following parties:</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block"><b>{profile.internship.host}</b>, doanh nghi???p ???????c ?????i di???n b???i ??ng/B?? <Box component='span' m={8} />, ch???c v???: <Box component='span' m={8} />, c?? tr??? s??? ch??nh t???i {profile.internship.location} (Sau ????y g???i t???t l?? <b>???????n v??? ti???p nh???n???</b>) <br/>
                      <i>{profile.internship.host}, represented by Mr/Ms <Box component='span' m={8} />, Title: <Box component='span' m={8} />, located at {profile.internship.location}. (Hereafter referred as ???the Host Institution???)</i>
                    </Typography>
                  </li>
                  <li><Typography variant='p' display="block"><b>V??/<i>AND</i></b></Typography> </li>
                  <li>
                    <Typography variant='p' display="block" paragraph><b>TR?????NG ?????I H???C KHOA H???C V?? C??NG NGH??? H?? N???I</b>, tr?????ng ?????i h???c c??ng l???p ???????c ?????i di???n b???i ??ng/B?? <Box component='span' m={8} />, ch???c v???: <Box component='span' m={8} />; c?? tr??? s??? ch??nh t???i T??a nh?? A21, s??? 18 Ho??ng Qu???c Vi???t, C???u Gi???y, H?? N???i (Sau ????y g???i t???t l?? <b>???Tr?????ng"</b>)<br/>
                      <i>UNIVERSITY OF SCIENCE AND TECHNOLOGY OF HANOI, a public university, represented by Mr/Ms <Box component='span' m={8} />, title: <Box component='span' m={8} />.; headquarters located at Building A21, No.18 Hoang Quoc Viet, Cau Giay, Ha Noi.(Hereafter referred as ???the USTH???)</i>
                    </Typography>
                  </li>
                </ul>
                
                {/* Legal Base */}
                <Typography variant='p' display="block"><b>C??N C??? PH??P L??<br/><i>LEGAL BASES</i></b></Typography>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>
                    <Typography variant='p' display="block" paragraph>Th???a thu???n th???c t???p k?? k???t gi???a Tr?????ng ?????i h???c Khoa h???c v?? C??ng ngh??? H?? N???i, ????n v??? ti???p nh???n v?? Th???c t???p sinh {profile.fullName} v??o ng??y {today};<br/>
                      <i>Internship Agreement signed mutually by the USTH, the Host Institution and the Intern {profile.fullName} on {today}.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" >Theo y??u c???u c???a ????n v??? ti???p nh???n, c??c B??n cam k???t th???c hi???n c??c ??i???u kho???n nh?? sau:<br/>
                      <i>At the requirement of the Host Institution on information confidentiality, two parties agree to implement the following terms:</i>
                    </Typography>
                  </li>
                  <li><Typography variant='p' display="block"><b>??i???u 1. </b> ????n v??? ti???p nh???n cho ph??p Th???c t???p sinh c?? th??? s??? d???ng c??c th??ng tin b???o m???t m?? Th???c t???p sinh ???????c ti???p c???n trong qu?? tr??nh th???c t???p cho c??c m???c ti??u h???c t???p v?? b???o v??? lu???n v??n.<br/>
                    <i>Article 1. The Host Institution allows the Intern using confidential information which is accessed during the internship for objectives of learning, thesis defense presentation.</i></Typography> 
                  </li>
                  <li><Typography variant='p' display="block"><b>??i???u 2. </b> Tr?????ng cam k???t s??? ch??? s??? d???ng nh???ng th??ng tin b???o m???t n??u tr??n cho m???c ????ch ????nh gi?? k???t qu??? th???c t???p c???a th???c t???p sinh, s??? kh??ng cung c???p hay ti???t l??? b???t c??? th??ng tin b???o m???t n??o cho m???t b??n th??? ba n??o kh??c m?? kh??ng c?? s??? ?????ng ?? b???ng v??n b???n c???a ????n v??? ti???p nh???n. <br/>
                    <i>Article 2. The USTH assures that the above confidential information is used to evaluate the Internship Report only and will not be shared with any parties without permission of the Host Institution in writing.</i></Typography> 
                  </li>
                  <li><Typography variant='p' display="block"><b>??i???u 3. </b> Bi??n b???n cam k???t n??y ???????c l???p th??nh 02 (hai) b???n song ng??? ti???ng Anh v?? ti???ng Vi???t c?? gi?? tr??? ph??p l?? nh?? nhau, m???i b??n gi??? 01 (m???t) b???n g???c v?? c?? hi???u l???c k??? t??? ng??y k??<br/>
                    <i>Article 3. This Commitment is made into 02 copies (two) in English and Vietnamese with the same legitimacy, each party keeps 01 original copy. This Commitment takes effect from signing date</i></Typography> 
                  </li> 
                </ul>
                <table className={classes.annex5signatureTable}>
                  <colgroup>
                    <col width='30%' />
                    <col width='30%' />
                  </colgroup>
                  <tr>
                    <td>????N V??? TI???P NH???N <br/> THE HOST INSTITUTION</td>
                    <td>TR?????NG ?????I H???C KHOA H???C V?? C??NG NGH??? H?? N???I<br/> THE USTH</td>
                  </tr>
                  <tr>
                    <td>__________________________</td>
                    <td>__________________________</td>
                  </tr>
                </table>
              </Paper>
            </Box>
          </div>
        )}
      </>
    )
    
  )
}

export default Annex5
