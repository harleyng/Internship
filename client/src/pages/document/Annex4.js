import React, { useEffect } from 'react' 
import { useSelector } from "react-redux";
import { Grid, Typography, CircularProgress, Divider, Paper, Button, Box } from '@material-ui/core'

import useStyles from './styles'
import { annex4_EN, annex4_VN, 
         document_header_1_EN, document_header_1_VN, 
         document_header_2_EN, document_header_2_VN 
        } from '../../setting/constants/document'

const Annex4 = ({ profile, download, documentMode }) => {
  const classes = useStyles();
  const user = useSelector(state => state.studentUser);
  const dateToday = new Date().getDate();
  const monthToday = new Date().getMonth() + 1;
  const yearToday = new Date().getFullYear();
  const today = new Date().toLocaleDateString('en-GB');

  useEffect(() => {
  }, [profile, user])
  return (
    !profile.supervisor && !profile.internship ? <CircularProgress /> : (
      <>
        {documentMode?.annex4 && (
          <div className={classes.documentContainer}>
            <Grid container justify='space-between' className={classes.documentNavbar}>
              <Grid item xs={10}><Typography variant='h5'>{annex4_EN} (Annex 4)</Typography></Grid>
              <Grid item xs={2} align='right'><Button onClick={() => download('Annex4', 5000)}>Download</Button></Grid>
            </Grid>
            <Box className={classes.documentWrapper} overflow='scroll' id="Annex4">
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
                  <Typography variant='h5' align='center'>{annex4_VN}</Typography>
                  <Typography variant='h5' align='center'><i>{annex4_EN}</i></Typography>
                </Box>
                
                {/* Can cu Quyet dinh */}
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>
                    <Typography variant='p' display="block" paragraph>C??n c??? B??? lu???t D??n s??? s??? 91/2015/QH13 ng??y 24 th??ng 11 n??m 2015 c???a Qu???c h???i kh??a XIII; <br/>
                      <i>Pursuant to the Civil Code Law no. 91/2015/QH13 dated 24th November 2015 by 13th National Assembly;</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>C??n c??? ????n ????? ngh??? th???c t???p c???a sinh vi??n: {profile.fullName} <br/>
                      <i>Pursuant to the Application of student: {profile.fullName} </i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>C??n c??? ????? xu???t c???a Khoa {profile.department} <br/>
                      <i>Pursuant to the proposal of academic department of {profile.department}</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>C??n c??? v??o nhu c???u v?? n??ng l???c c???a c??c b??n,<br/>
                      <i>Pursuant to the requirement and capability of parties,</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>H??m nay, ng??y {dateToday} th??ng {monthToday} n??m {yearToday}, t???i <br/>
                      <i>Today is {today} at</i>
                    </Typography>
                  </li>
                </ul>
                
                {/* Attendant */}
                {/* Side A */}
                <Typography variant='p' display="block"><b>B??N A: TR?????NG ?????I H???C KHOA H???C V?? C??NG NGH??? H?? N???I, sau ????y g???i l?? Tr?????ng USTH</b></Typography>
                <Typography variant='p'><i>Party A: University of Science and Technology of Hanoi ??? referred as the USTH</i></Typography>
                <table className={`${classes.annex4AttendantTable}`}>
                  <colgroup>
                      <col width='20%' />
                      <col width='2%'/>
                      <col width='78%'  />
                  </colgroup>
                  <tr>
                    <td>?????a ch??? <br/> <i>Address</i></td>
                    <td>:</td>
                    <td>18 Ho??ng Qu???c Vi???t, C???u Gi???y, H?? N???i, Vi???t Nam</td>
                  </tr>
                  <tr>
                    <td>?????i di???n <br/> <i>Represented by </i></td>
                    <td>:</td>
                    <td>TS <i>(Dr).</i> Nguy???n H???i ????ng </td>
                  </tr>
                  <tr>
                    <td>Ch???c v??? <br/> <i>Title </i></td>
                    <td>:</td>
                    <td>Ph?? Hi???u tr?????ng <br/> <i>Vice Rector</i></td>
                  </tr> 
                </table>
                {/* Side B */}
                <Typography variant='p' display="block"><b>B??N B: {profile.internship.host}</b></Typography>
                <Typography variant='p'><i>Party B: {profile.internship.host}</i></Typography>
                <table className={`${classes.annex4AttendantTable}`}>
                  <colgroup>
                      <col width='20%' />
                      <col width='2%'/>
                      <col width='78%'  />
                  </colgroup>
                  <tr>
                    <td>?????a ch??? <br/> <i>Address</i></td>
                    <td>:</td>
                    <td>{profile.internship.location}</td>
                  </tr>
                  <tr>
                    <td>?????i di???n <br/> <i>Represented by </i></td>
                    <td>:</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Ch???c v??? <br/> <i>Title </i></td>
                    <td>:</td>
                    <td></td>
                  </tr> 
                </table>
    
                {/* Side C */}
                <Typography variant='p' display="block"><b>B??N C: TH???C T???P SINH </b></Typography>
                <Typography variant='p'><i>Party C: The Intern</i></Typography>
                <table className={`${classes.annex4AttendantTable}`}>
                  <colgroup>
                      <col width='13%' />
                      <col width='2%'/>
                      <col width='32%'  />
                      <col width='13%' />
                      <col width='2%'/>
                      <col width='32%'  />
                  </colgroup>
                  <tr>
                    <td>H??? v?? t??n <br/> <i>Full name</i></td>
                    <td>:</td>
                    <td>{profile.fullName}</td>
                    <td>M?? SV<br/> <i>Student ID</i></td>
                    <td>:</td>
                    <td>{profile.studentID}</td>
                  </tr>
                  <tr>
                    <td>Ng??y sinh <br/> <i>Date of birth </i></td>
                    <td>:</td>
                    <td>{new Date(profile.DOB).toLocaleDateString('en-GB')}</td>
                    <td>N??m h???c <br/> <i>The academic year </i></td>
                    <td>:</td>
                    <td>{profile.academicYear}</td>
                  </tr>
                  <tr>
                    <td>Khoa <br/> <i>Department </i></td>
                    <td>:</td>
                    <td>{profile.department}</td>
                    <td>Ng??nh/Cnty??n ng??nh  <br/> <i>Specialty </i></td>
                    <td>:</td>
                    <td>{profile.department}</td>
                  </tr>
                  <tr>
                    <td>S??? ??i???n tho???i<br/> <i>Phone No.</i></td>
                    <td>:</td>
                    <td>{profile.phoneNo}</td>
                    <td>Email</td>
                    <td>:</td>
                    <td>{user.email}</td>
                  </tr>
                </table>
              </Paper>
              
              <Divider data-html2canvas-ignore="true" />
    
              <Paper className={classes.document} >
              <Typography variant='p' paragraph>C??c b??n th???ng nh???t c??c ??i???u kho???n c???a Th???a thu???n th???c t???p nh?? sau: <br/>
                <i>Parties hereby agree terms of Internship Agreement as following: </i>
              </Typography>
              {/* Dieu 1 */}
              <Typography variant='p'><b>??i???u 1. Th???i gian v?? ?????a ??i???m th???c t???p <br/>
                <i>Article 1. Period and Place of internship</i></b>
              </Typography>
              <ul style={{listStyle:'none', padding: 0, marginTop: 0}}>
                <li>
                  <Typography variant='p' paragraph>1. Th???i gian: T??? ng??y: {new Date(profile.internship.startTime).toLocaleDateString('en-GB')} ?????n ng??y {new Date(profile.internship.startTime).toLocaleDateString('en-GB')}<br/>
                    <i>1. Duration: From: {new Date(profile.internship.startTime).toLocaleDateString('en-GB')} to {new Date(profile.internship.startTime).toLocaleDateString('en-GB')}</i>
                  </Typography>
                </li>
                <li>
                  <Typography variant='p' paragraph>2. ?????a ??i???m th???c t???p: {profile.internship.location}<br/>
                    <i>2. Place of internship: {profile.internship.location} </i>
                  </Typography>
                </li>
              </ul>
    
              {/* Dieu 2 */}
              <Typography variant='p' display='block'><b>??i???u 2. Ng?????i h?????ng d???n th???c t???p<br/>
                <i>Article 2. Internship Supervisors</i></b>
              </Typography>
              <Typography variant='p'>2.1.  Ng?????i h?????ng d???n c???a ????n v??? ti???p nh???n<br/>
                <i>2.1. External Supervisor of the Host Institution</i>
              </Typography> 
              <table className={`${classes.annex4AttendantTable}`}>
                  <colgroup>
                      <col width='13%' />
                      <col width='2%'/>
                      <col width='32%'  />
                      <col width='13%' />
                      <col width='2%'/>
                      <col width='32%'  />
                  </colgroup>
                  <tr>
                    <td>H??? t??n <br/> <i>Full name</i></td>
                    <td>:</td>
                    <td>{profile.supervisor.fullName}</td>
                    <td>Ch???c v???<br/> <i>Position</i></td>
                    <td>:</td>
                    <td>{profile.supervisor.position}</td>
                  </tr>
                  <tr>
                    <td>Ph??ng ban<br/> <i>Deparment</i></td>
                    <td>:</td>
                    <td>{profile.supervisor.department}</td>
                  </tr>
                  <tr>
                    <td>S??? ??i???n tho???i<br/> <i>Phone No.</i></td>
                    <td>:</td>
                    <td>{profile.supervisor.phoneNo}</td>
                    <td>Email</td>
                    <td>:</td>
                    <td>{profile.supervisor.email}</td>
                  </tr>
                </table>
              <Typography variant='p' display='block' style={{marginTop: '16px'}}>2.2.  Ng?????i h?????ng d???n c???a Tr?????ng<br/>
                <i> Internal Supervisor of the USTH</i>
              </Typography> 
              <table className={`${classes.annex4AttendantTable}`}>
                  <colgroup>
                      <col width='13%' />
                      <col width='2%'/>
                      <col width='32%'  />
                      <col width='13%' />
                      <col width='2%'/>
                      <col width='32%'  />
                  </colgroup>
                  <tr>
                    <td>H??? t??n <br/> <i>Full name</i></td>
                    <td>:</td>
                    <td></td>
                    <td>Ch???c v???<br/> <i>Position</i></td>
                    <td>:</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Ph??ng ban<br/> <i>Deparment</i></td>
                    <td>:</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>S??? ??i???n tho???i<br/> <i>Phone No.</i></td>
                    <td>:</td>
                    <td></td>
                    <td>Email</td>
                    <td>:</td>
                    <td></td>
                  </tr>
                </table>  
              
              {/* Dieu 3 */}
              <Typography variant='p' display='block' style={{marginTop: '16px'}}><b>??i???u 3. N???i dung th???c t???p<br/>
                <i>Article 3. Internship contents</i></b>
              </Typography>
              <ul style={{listStyle:'none', padding: 0, marginTop: 0}}>
                <li>
                  <Typography variant='p' paragraph>Th???c t???p l?? h???c ph???n b???t bu???c trong ch????ng tr??nh ????o t???o ?????i v???i t???t c??? c??c sinh vi??n theo h???c c??c ch????ng tr??nh ????o t???o t???i Tr?????ng. <br/>
                    <i>This internship is one of a compulsory course module in the training program upon all USTH students.</i>
                  </Typography>
                </li>
                <li>
                  <Typography variant='p' paragraph>T??n ????? t??i th???c t???p: {profile.internship.topic}<br/>
                    <i>Internship Title: {profile.internship.topic}</i>
                  </Typography>
                </li>
                <li>
                  <Typography variant='p' paragraph>S??? l?????ng t??n ch???: <br/>
                    <i>Number of credits:</i>
                  </Typography>
                </li>
                <li>
                  <Typography variant='p' paragraph>N???i dung th???c t???p ???????c m?? t??? theo m???u ????? c????ng th???c t???p (Ph??? l???c 1) b???i Th???c t???p sinh v?? ph???i c?? ch??? k?? x??c nh???n c???a Gi???ng vi??n h?????ng d???n.<br/>
                    <i>Content of internship is prepared by The Intern following template of internship outline (annex 1) with signature of the internal supervisor.</i>
                  </Typography>
                </li>
                <li>
                  <table style={{width: '100%'}}>
                    <colgroup>
                        <col width='60%' />
                        <col width='20%'/>
                        <col width='20%'  />
                    </colgroup>
                    <tr>
                      <td>
                        <Typography variant='p' paragraph>Th???c t???p sinh c?? ???????c tr??? l????ng/ph??? c???p:<br/>
                          <i>The Intern is paid salary/allowance</i>
                        </Typography>
                      </td>
                      <td>&#9633; C?? <br/> &#9633; Yes</td>
                      <td>&#9633; Kh??ng <br/> &#9633; No</td>
                    </tr>
                  </table>
                </li>
                <li>
                  <Typography variant='p' paragraph>N???u ???????c, s??? ti???n n??y s??? ???????c t??nh: 2 tri???u ?????ng / th??ng<br/>
                    <i>If yes, the Payment will be calculated: 2 million dong/month</i>
                  </Typography>
                </li>
                <li>
                <table style={{width: '100%'}}>
                    <colgroup>
                        <col width='60%' />
                        <col width='20%'/>
                        <col width='20%'  />
                    </colgroup>
                    <tr>
                      <td>
                        <Typography variant='p' paragraph>B???o m???t k???t qu??? th???c t???p:<br/>
                          <i>Requirement on keeping confidential internship report</i>
                        </Typography>
                      </td>
                      <td>&#9633; C?? <br/> &#9633; Yes</td>
                      <td>&#9633; Kh??ng <br/> &#9633; No</td>
                    </tr>
                  </table>
                </li>
                <li>
                  <Typography variant='p' paragraph>N???u c??, ho??n thi???n c??c th??ng tin theo m???u Cam k???t b???o m???t (Ph??? l???c 2).<br/>
                    <i>If yes, please fulfill Confidential Commitment Form (Annex 2).</i>
                  </Typography>
                </li>
              </ul>
              </Paper>
    
              <Divider data-html2canvas-ignore="true" />
              
              <Paper className={classes.document}>
                <ul style={{listStyle:'none', padding: 0, marginTop: 0}}>
                  <li>
                    <Typography variant='p' paragraph>M???i Th???c t???p sinh s??? ???????c h?????ng d???n b???i m???t ho???c nhi???u ng?????i h?????ng d???n c???a ????n v??? ti???p nh???n theo quy ?????nh t???i ??i???u 2. Tr?????ng h???p c?? hai ng?????i h?????ng d???n, ????n v??? ti???p nh???n c?? th??? ph??n ?????nh th??nh Ng?????i h?????ng d???n ch??nh v?? Ng?????i h?????ng d???n ph???; ho???c Ng?????i h?????ng d???n 1 v?? Ng?????i h?????ng d???n 2; v?? c?? b???ng ph??n c??ng c??ng vi???c c??? th???.<br/>
                      <i>The internship will be supervised by one or several supervisors appointed by the Host Institution as the Article 2. In case of two, it should be defined as senior supervisor and minor supervisor or 1st supervisor and 2nd supervisor with particular work description.</i>
                    </Typography>
                  </li>
                </ul>
    
    
                {/* Dieu 4*/}
                <Typography variant='p' display='block' style={{marginTop: '16px'}}><b>??i???u 4. ????nh gi?? th???c t???p<br/>
                  <i>Article 4. Internship Evaluation</i></b>
                </Typography>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>
                    <Typography variant='p' paragraph>1. Ng?????i h?????ng d???n ch???u tr??ch nhi???m nh???n x??t, ????nh gi?? qu?? tr??nh th???c t???p c???a Th???c t???p sinh t???i ????n v??? ti???p nh???n.<br/>
                      <i>1. External Supervisor has responsibilities in assessing and evaluating internship implementation for the Intern at the Host Institution.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>2. Ng?????i h?????ng d???n c???a ????n v??? ti???p nh???n nh???n x??t, ????nh gi?? qu?? tr??nh th???c t???p c???a Th???c t???p sinh theo m???u c???a Tr?????ng v??? vi???c ????nh gi?? th???c t???p d??nh cho Ng?????i h?????ng d???n (Ph??? l???c 3).<br/>
                      <i>2. External Supervisor will process assessment and evaluation for the Intern following Internship Evaluation Form applied for External Supervisor (Annex 3).</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>3. Th???i gian ho??n th??nh v?? g???i k???t qu??? nh???n x??t, ????nh gi?? qu?? tr??nh th???c t???p: trong v??ng 1 tu???n k??? t??? ng??y cu???i c??ng c???a ?????t th???c t???p.<br/>
                      <i>3. Deadline for evaluation and submission evaluation result: within 01 week since the last day of internship duration.</i>
                    </Typography>
                  </li>
                </ul>
    
                {/* Dieu 5*/}
                <Typography variant='p' display='block' style={{marginTop: '16px'}} paragraph><b>??i???u 5. Tr??ch nhi???m c???a c??c b??n <br/>
                  <i>Article 5. Responsibilities</i></b>
                </Typography>
                <Typography variant='p'><b>5.1. Th???c t???p sinh<br/>
                  <i>5.1. The Intern</i></b>
                </Typography>
                <ul style={{listStyle: 'none', padding: 0, marginTop: 0}}>
                  <li>
                    <Typography variant='p' paragraph>1. Ch???p h??nh ????ng n???i quy, quy ?????nh c???a ????n v??? ti???p nh???n. <br/>
                      <i>1. Abiding by regulations of the Host institution.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>2. N??? l???c h???c h???i n??ng cao n??ng l???c, c??c k??? n??ng li??n quan ?????n nhi???m v??? ???????c giao. <br/>
                      <i>2. Trying the best for improving the competencies and skills concerning the assigned activities.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>3. N???p k???t qu??? ????nh gi?? th???c t???p v?? b??o c??o th???c t???p v??? Khoa trong v??ng 02 tu???n k??? t??? ng??y cu???i c??ng c???a ?????t th???c t???p <br/>
                      <i>3. Submitting Internship Evaluation Form which is signed by External Supervisor and Internship Report to Academic Department after 2 weeks of the last day of internship duration.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>4. C?? ?? th???c v?? ch???u tr??ch nhi???m v??? vi???c b???o qu???n t??i s???n, c?? s??? v???t ch???t t???i ????n v??? ti???p nh???n th???c t???p.<br/>
                      <i>4. Being aware of preserving assets, material facilities at the Host institution.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>5. Th??ng tin v???i Gi???ng vi??n h?????ng d???n c???a Tr?????ng nh???ng kh?? kh??n, v?????ng m???c trong qu?? tr??nh th???c t???p ????? ???????c h??? tr??? k???p th???i.<br/>
                      <i>5. Keeping informing Internal Supervisor difficulties, obstacles during internship for timely support.</i>
                    </Typography>
                  </li>
                </ul>
    
                <Typography variant='p'><b>5.2. ????n v??? ti???p nh???n<br/>
                  <i>5.2. The Host Institution</i></b>
                </Typography>
                <ul style={{listStyle: 'none', padding: 0, marginTop: 0}}>
                  <li>
                    <Typography variant='p' paragraph>1. ????n v??? ti???p nh???n c?? tr??ch nhi???m ch??? ?????nh v?? ph??n c??ng nhi???m v??? Ng?????i h?????ng d???n trong qu?? tr??nh Th???c t???p sinh th???c t???p t???i ????n v??? ti???p nh???n. <br/>
                      <i>1. To be responsible for appointing and assigning External Supervisors during the internship.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>2. ????n v??? ti???p nh???n ph???i ?????m b???o Th???c t???p sinh ???????c h?????ng quy???n l???i b???o hi???m v?? c??c ??i???u ki???n kh??c (n???u c??) ?????i v???i Th???c t???p sinh.<br/>
                      <i>2. The Host Institution is in charge of ensuring insurance and other benefits (if any) for the Intern.</i>
                    </Typography>
                  </li>
                </ul>
              </Paper>
    
              <div className='html2pdf__page-break' />
              <Divider data-html2canvas-ignore="true" />
    
              <Paper className={classes.document}>
                <ul style={{listStyle: 'none', padding: 0, marginTop: 0}}>
                  <li>
                    <Typography variant='p' paragraph>3. Thanh to??n ?????y c??c kho???n th?? lao (n???u c??) cho sinh vi??n <br/>
                      <i>3. Making payment fully for the Intern (if any).</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>4. Tr??ch nhi???m c???a Ng?????i h?????ng d???n th???c t???p:<br/>
                      <i>4. Responsibilities of External Supervisor</i>
                    </Typography>
                  </li>
                </ul>
                <ul style={{listStyle: 'none', marginTop: 0}}>
                  <li>
                    <Typography variant='p' paragraph>4.1. C?? tr??ch nhi???m gi??m s??t, b??? sung ???????c c??c ki???n th???c, kinh nghi???m th???c ti???n cho Th???c t???p sinh trong qu?? tr??nh th???c t???p v?? h??? tr??? Th???c t???p sinh ?????t ???????c m???c ti??u th???c t???p ???????c x??c ?????nh trong ????? c????ng th???c t???p.<br/>
                      <i>4.1. Being responsible for supervising, providing practical experiences to the Intern and help the Intern reach the objectives described in Internship Outline.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>4.2. ????nh gi?? k???t qu??? th???c t???p c???a Th???c t???p sinh theo c??c quy ?????nh n??u tr??n trong b???n Th???a thu???n th???c t???p n??y.<br/>
                      <i>4.2. Supplying evaluation internship result of The Intern following the related regulations within this Agreement.</i>
                    </Typography>
                  </li> 
                </ul>
    
                <Typography variant='p'><b>5.3. Tr?????ng<br/>
                  <i>5.3. The USTH</i></b>
                </Typography>
                  <ul style={{listStyle: 'none', padding: 0, marginTop: 0}}>
                    <li>
                      <Typography variant='p' paragraph>1. Ch???u tr??ch nhi???m ph??n c??ng Gi???ng vi??n h?????ng d???n.<br/>
                        <i>1. To take responsibility in assigning Internal Supervisor.</i>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant='p' paragraph>2. Chi tr??? th?? lao cho Gi???ng vi??n h?????ng d???n, Ng?????i h?????ng d???n th???c t???p theo quy ?????nh c???a Tr?????ng<br/>
                        <i>2. To pay compensation for the Internal Supervisor, External Supervisor complying with the regulation of the USTH.</i>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant='p' paragraph>3. Ph???i h???p v???i ????n v??? ti???p nh???n gi???i quy???t k???p th???i c??c v???n ????? ph??t sinh, khi???u n???i gi???a c??c b??n li??n quan. <br/>
                        <i>3. To coordinate with the Host Institution to handle arising issues and complaints of concerned parties.</i>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant='p' paragraph>4. Tr??ch nhi???m c???a Gi???ng vi??n h?????ng d???n c???a Tr?????ng:<br/>
                        <i>4.  Responsibilities of Internal Supervisor</i>
                      </Typography>
                    </li>
                  </ul>
                  <ul style={{listStyle: 'none', marginTop: 0}}>
                    <li>
                      <Typography variant='p' paragraph>4.1. Ph???i h???p v???i Ng?????i h?????ng d???n th???c t???p c???a ????n v??? ti???p nh???n v?? h??? tr??? Th???c t???p sinh trong qu?? tr??nh th???c t???p. <br/>
                        <i>4.1. To coordinate with the External Supervisor and support the Intern during the internship.</i>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant='p' paragraph>4.2. X??? l?? nh???ng Th???c t???p sinh c?? h??nh vi kh??ng trung th???c, vi ph???m quy ?????nh, k??? lu???t v?? c??c v???n ????? kh??c (n???u c??) trong qu?? tr??nh th???c t???p.<br/>
                        <i>4.2. To handle The Intern without being honest in the performance; violating The Host Institution???s regulations; and other arising issues (if any) during internship.</i>
                      </Typography>
                    </li> 
                  </ul>
    
                  {/* Dieu 6*/}
                  <Typography variant='p' display='block' style={{marginTop: '16px'}} paragraph><b>??i???u 6. S???a ?????i v?? ch???m d???t th???a thu???n <br/>
                    <i>Article 6. Modification and Termination </i></b>
                  </Typography>
                  <Typography variant='p'><b>6.1. S???a ?????i th???a thu???n th???c t???p <br/>
                    <i>6.1. Modification</i></b>
                  </Typography>
                  <ul style={{listStyle: 'none', padding: 0, marginTop: 0}}>
                    <li>
                      <Typography variant='p' paragraph>Nh???ng tr?????ng h???p ph??t sinh ch??a ???????c quy ?????nh trong Th???a thu???n n??y s??? ???????c c??c b??n th???ng nh???t s???a ?????i, b??? sung b???ng v??n b???n (Ph??? l???c 4). C??c Bi??n b???n s???a ?????i th???a thu???n th???c t???p ???????c coi l?? ph??? l???c kh??ng th??? t??ch r???i c???a Th???a thu???n n??y.<br/>
                        <i>Any arising matters which are not regulated within this agreement must be agreed for supplement, modification by mutual parties in writing (Annex 4). The modification agreements are considered as inseparable parts of this Agreement.</i>
                      </Typography>
                    </li>
                  </ul>
    
                  <Typography variant='p' display='block'><b>6.2. Ch???m d???t th???a thu???n th???c t???p <br/>
                    <i>6.2. Termination</i></b>
                  </Typography>
                  <Typography variant='p'>a. Th???a thu???n th???c t???p c?? th??? ???????c ch???m d???t trong b???i m???t trong ba b??n:<br/>
                    <i>In specific cases, the agreement can be terminated by one of three parties:</i>
                  </Typography>
                  <ul style={{listStyle: 'none', padding: 0, marginTop: 0}}>
                    <li>
                      <Typography variant='p' >- ????n v??? ti???p nh???n: N???u Th???c t???p sinh kh??ng ho??n th??nh nhi???m v??? ???????c giao, ????n v??? ti???p nh???n c?? th??? ch???m d???t th???a thu???n sau khi th???o lu???n v???i Gi???ng vi??n h?????ng d???n c???a Tr?????ng v?? th??ng b??o b???ng v??n b???n cho Tr?????ng.<br/>
                        <i>The Host Institution: if the Intern does not fulfill the obligations regulated within this Agreement, the Host Institution can terminate the agreement after discussion with the Internal Supervisor and providing written notice to the USTH.</i>
                      </Typography>
                    </li>
                  </ul>
              </Paper>
    
              <div className='html2pdf__page-break' />
              <Divider data-html2canvas-ignore="true" />
    
              <Paper className={classes.document}>
                <ul style={{listStyle: 'none', padding: 0, marginTop: 0}}>
                  <li>
                    <Typography variant='p' >- Tr?????ng: Khi ????n v??? ti???p nh???n kh??ng ?????m b???o tr??ch nhi???m quy ?????nh t???i Th???a thu???n n??y, Tr?????ng c?? th??? th??ng b??o ch???m d???t Th???a thu???n th???c t???p.<br/>
                      <i>The USTH: when the Host Institution does not fulfill the obligations described in this Agreement, the USTH can terminate the Internship Agreement by written notice after discussion with the Host Institution. </i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>- Th???c t???p sinh: Th???c t???p sinh c?? th??? ????? xu???t b???ng v??n b???n v???i Tr?????ng v??? vi???c ch???m d???t Th???a thu???n th???c t???p n???u ????n v??? th???c t???p kh??ng ?????m b???o m???c ti??u th???c t???p. <br/>
                      <i>The Intern can propose to terminate the internship agreement by sending a written request to the USTH if the objectives of the internship cannot be accomplished at the Host Institution. </i>
                    </Typography>
                  </li>
                </ul>
                <Typography variant='p'>b. Vi???c ch???m d???t s??? ???????c th???c hi???n b???ng vi???c k?? k???t Bi??n b???n ch???m d???t th???a thu???n th???c t???p (chi ti???t t???i Ph??? l???c 5).<br/>
                  <i>The termination will be agreed by an Internship Termination in written (detailed as Annex 5)</i>
                </Typography>
    
                {/* Dieu 7*/}
                <Typography variant='p' display='block' style={{marginTop: '16px'}}><b>??i???u 7. ??i???u kho???n chung<br/>
                  <i>Article 7. Miscellaneous</i></b>
                </Typography>
                <ul style={{listStyle: 'none', padding: 0, marginTop: 0}}>
                  <li>
                    <Typography variant='p' paragraph>C??c b??n cam k???t th???c hi???n ????ng c??c ??i???u kho???n quy ?????nh t???i Th???a thu???n n??y.<br/>
                      <i>Whole terms and regulations within this agreement are committed to implement fully and exactly by all parties.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>Th???a thu???n n??y c?? hi???u l???c k??? t??? ng??y k??.<br/>
                      <i>This agreement comes into effect from the date of signing.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>Th???a thu???n n??y ???????c l???p th??nh 05 b???n, c?? gi?? tr??? ph??p l?? nh?? nhau, Tr?????ng gi??? 03 b???n, Th???c t???p sinh gi??? 01 b???n, ????n v??? ti???p nh???n gi??? b???n.<br/>
                      <i>This Agreement is made into 5 copies with the same legitimacy, in which the USTH will keep 03 copies, the Intern will keep 01 copy and the host institution will keep 01 copies.</i>
                    </Typography>
                  </li>
                </ul>
    
                <table className={`${classes.annex4signatureTable}`}>
                  <tr>
                    <td colspan="2">?????I DI???N B??N B <br/> Party B</td>
                    <td>?????I DI???N B??N C <br/> Party C</td>
                    <td colspan="2">?????I DI???N B??N A <br/> Party A</td>
                  </tr>
                  <tr>
                    <td>?????i di???n c??ng ty <br/> Host organisation</td>
                    <td>Ng?????i h?????ng d???n  <br/> External Supervisor</td>
                    <td>Th???c t???p sinh <br/> The intern</td>
                    <td>GVHD<br/>Internal Supervisor</td>
                    <td>Tr?????ng ??HKHCNHN<br/>The USTH</td>
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

export default Annex4
