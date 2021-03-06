import React, { useEffect } from 'react' 
import { Grid, Typography, CircularProgress, Divider, Paper, Button, Box } from '@material-ui/core'

import useStyles from './styles'
import { annex6_EN, annex6_VN, 
         university_EN, university_VN, 
         academy_EN, academy_VN, 
         document_header_1_EN, document_header_1_VN, 
         document_header_2_EN, document_header_2_VN 
        } from '../../setting/constants/document'

const Annex6 = ({ profile, download, documentMode }) => {
  const classes = useStyles();
  const dateToday = new Date().getDate();
  const monthToday = new Date().getMonth() + 1;
  const yearToday = new Date().getFullYear();
  const today = new Date().toLocaleDateString('en-GB');

  useEffect(() => {

  }, [profile])
  return (
    !profile.supervisor && !profile.internship ? <CircularProgress /> : (
      <>
        {documentMode?.annex6 && (
          <div className={classes.documentContainer}>
            <Grid container justify='space-between' className={classes.documentNavbar}>
              <Grid item xs={10}><Typography variant='h5'>{annex6_EN} (Annex 6)</Typography></Grid>
              <Grid item xs={2} align='right'><Button onClick={() => download('Annex6', 2100)}>Download</Button></Grid>
            </Grid>
            <Box className={classes.documentWrapper} overflow='scroll' id="Annex6">
              <Paper className={classes.document} >
                {/* Header */}
                <table className={`${classes.table} ${classes.annex3Header}`}>
                  <tr>
                    <td className={classes.uppercase}>{academy_VN}<br/><b>{university_VN}</b></td>
                    <td><b><span className={classes.uppercase}>{document_header_1_VN}</span><br/>{document_header_2_VN}</b></td>
                  </tr>
                  <tr>
                    <td className={classes.uppercase}>{academy_EN}<br/><b>{university_EN}</b></td>
                    <td><b><span className={classes.uppercase}>{document_header_1_EN}</span><br/>{document_header_2_EN}</b></td>
                  </tr>
                  <tr>
                    <td>S??? (Ref No.): &nbsp;&nbsp; /21/H??HD-ICT</td>
                    <td></td>
                  </tr>
                </table>
                
                {/* Title */}
                <Box className={classes.documentTitle}>
                  <Typography align='center'>{annex6_VN}</Typography>
                  <Typography align='center'><i>{annex6_EN}</i></Typography>
                </Box>
                
                {/* Can cu Quyet dinh */}
                <ul>
                  <li>
                    <Typography variant='p' display="block" paragraph>C??n c??? H???p ?????ng H?????ng d???n th???c t???p s???  <Box component="span" m={1}/> k?? ng??y <Box component="span" m={4}/> v?? th???a thu???n gi???a Tr?????ng ?????i h???c Khoa h???c v?? C??ng ngh??? H?? N???i v?? ng?????i lao ?????ng (Pursuant to the Internship Supervisor Contract No. <Box component="span" m={1}/> dated <Box component="span" m={4}/> and considering the mutual agreement between the University of Science and Technology of Hanoi and the Employee);</Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>C??n c??? B??o c??o ho??n th??nh c??ng vi???c v?? t??i li???u (Pursuant to the working report and the related documents).</Typography>
                  </li>
                </ul>
                
                {/* Attendant */}
                <Typography variant='p' display="block" paragraph>H??m nay, ng??y {dateToday} th??ng {monthToday} n??m {yearToday}, ch??ng t??i g???m (On {today}, we are):</Typography>
                {/* Side A */}
                <Typography variant='p'><b>B??N A (PARTY A): TR?????NG ?????I H???C KHOA H???C V?? C??NG NGH??? H?? N???I (UNIVERSITY OF SCIENCE AND TECHNOLOGY OF HANOI)</b></Typography>
                <table className={`${classes.table} ${classes.attendantTable}`}>
                  <colgroup>
                      <col width='25%' />
                      <col width='75%'  />
                  </colgroup>
                  <tr>
                    <td>?????i di???n (Represented by):</td>
                    <td>??ng (Mr.) Nguy???n H???i ????ng ??? Ph?? Hi???u tr?????ng (Vice Rector) 
                        (theo Quy???t ?????nh ???y quy???n s??? 98/Q??-??HKHCN ng??y 09/02/2021/ 
                        As in the Power of Attorney No.98/UQ-??HKHCN dated February 09, 2021)
                    </td>
                  </tr>
                  <tr>
                    <td>??i???n tho???i (Tel)/Fax:</td>
                    <td>(84 -24) 37916960</td>
                  </tr>
                  <tr>
                    <td>?????a ch??? (Address):</td>
                    <td>18 Ho??ng Qu???c Vi???t, C???u Gi???y, H?? N???i, Vi???t Nam</td>
                  </tr>
                  <tr>
                    <td>T??i kho???n (Account): </td>
                    <td>9523.1.1104699 va?? 3714.0.1104699 t???i Kho b???c Nh?? n?????c C???u Gi???y</td>
                  </tr>
                </table>
                {/* Side B */}
                <Typography variant='p'><b>B??N B (PARTY B): ??ng/B?? (Mr./Mrs) {profile.supervisor.fullName}</b></Typography>
                <table className={`${classes.table} ${classes.attendantTable}`}>
                  <colgroup>
                      <col width='25%' />
                      <col width='35%'/>
                      <col/>
                  </colgroup>
                  <tr>
                    <td>S??? CMTND/ H??? chi???u <br/>(ID/ Passport No.): </td>
                    <td style={{borderRight: 'none'}}>{profile.supervisor.personalID?.No} </td>
                    <td style={{borderLeft: 'none'}}>c???p ng??y (dated): {profile.supervisor.personalID?.givenDate} <br/> t???i (in): {profile.supervisor.personalID?.givenPlace}</td>
                  </tr>
                  <tr>
                    <td>?????a ch??? (Address):</td>
                    <td colspan='2'>{profile.supervisor.address}</td>
                  </tr>
                  <tr>
                    <td>S??? ??i???n tho???i (Tel):</td>
                    <td style={{borderRight: 'none'}}>{profile.supervisor.phoneNo}</td>
                    <td style={{borderLeft: 'none'}}>Email: {profile.supervisor.email}</td>
                  </tr>
                  <tr>
                    <td>T??i kho???n (Account No):</td>
                    <td colspan='2'>{profile.supervisor.bankAccount?.No}</td>
                  </tr>
                  <tr>
                    <td>T???i (at):</td>
                    <td style={{borderRight: 'none'}}>{profile.supervisor.bankAccount?.bankName}</td>
                    <td style={{borderLeft: 'none'}}> branch (Chi nh??nh): {profile.supervisor.bankAccount?.branch}</td>
                  </tr>
                  <tr>
                    <td>MST TNCN (PIT code):</td>
                    <td colspan='2'>{profile.supervisor.PITCode}</td>
                  </tr>
                </table>
                <Typography variant='p' paragraph>Hai b??n c??ng xem x??t, ????nh gi?? k???t qu??? th???c hi???n c??ng vi???c v?? th???ng nh???t k?? k???t Bi??n b???n nghi???m thu v?? thanh l?? H???p ?????ng h?????ng d???n th???c t???p s??? <Box component="span" m={1}/> (sau ????y g???i t???t l?? ???H???p ?????ng???) v???i c??c n???i dung v?? ??i???u kho???n nh?? sau (The two parties have considered, evaluated the working result and signed this Minutes of Liquidation for the Thesis/ Internship Supervisor Contract No. <Box component="span" m={1}/> (Hereinafter referred to as the ???Contract???) with the following terms and conditions):</Typography>
              </Paper>
              
              <div className='html2pdf__page-break' />
              <Divider data-html2canvas-ignore="true" />
    
              <Paper className={classes.document} >
                {/* Dieu 1 */}
                <Typography variant='p'><b>??i???u 1. (Article 1.): Nghi???m thu c??ng vi???c (Acceptance of the work) </b></Typography>
                <Typography variant='p' display='block' paragraph>B??n A x??c nh???n B??n B ???? ho??n th??nh vi???c h?????ng d???n th???c t???p cho th???c t???p sinh c???a Tr?????ng ??HKHCNHN v?? th???c hi???n ?????y ????? c??c ngh??a v??? li??n quan theo quy ?????nh t???i H???p ?????ng h?????ng d???n th???c t???p s??? <Box component="span" m={1}/>.(Party A confirms that Party B has finished the task of supervising internship/thesis for USTH???s students and other related obligations as stated in the Thesis/ Internship Supervisor Contract No. <Box component="span" m={1}/> )</Typography>
    
                {/* Dieu 2 */}
                <Typography variant='p'><b>??i???u 2. (Article 2.):  Gi?? tr??? nghi???m thu v?? Thanh to??n (Contract value and Payment) </b></Typography>
                <ul>
                  <li><Typography variant='p' paragraph>T???ng ti???n th?? lao c??c lo???i c???a B??n B (bao g???m thu??? thu nh???p c?? nh??n) (Total remuneration of all types for Party B (including the Personal Income Tax (PIT)): <Box component="span" m={4}/> ??????ng (VND) (b???ng ch??? (in words): (<Box component="span" m={30}/>).</Typography> </li>
                  <li><Typography variant='p' paragraph>T???ng ti???n B??n A ph???i thanh to??n cho B??n B (bao g???m thu??? thu nh???p c?? nh??n) (Total amount which Party A needs to pay for Party B (including PIT)): <Box component="span" m={4}/> ??????ng (VND) (b???ng ch??? (in words): (<Box component="span" m={30}/>).</Typography></li>
                  <li><Typography variant='p' paragraph>T???ng ti???n B??n A ???? thanh to??n cho B??n B (Total amount paid by Party A to Party B): <Box component="span" m={4}/> ??????ng (VND) (b???ng ch??? (in words): ( <Box component="span" m={25}/>).</Typography></li>
                  <li><Typography variant='p' paragraph>T???ng ti???n B??n A c??n ph???i thanh to??n cho B??n B (The remaining payment which Party A needs to pay for Party B): <Box component="span" m={4}/> ??????ng (VND) (b???ng ch??? (in words): (<Box component="span" m={30}/>).</Typography></li>
                </ul>
                
                {/* Dieu 3 */}
                <Typography variant='p'><b>??i???u 3. (Article 3.): Tr??ch nhi???m c???a hai b??n (Responsibility of 2 parties)</b></Typography>
                <ul>
                  <li><Typography variant='p' paragraph>B??n B c?? tr??ch nhi???m b??o c??o v?? ????nh gi?? k???t qu??? l??m vi???c c???a th???c t???p sinh cho B??n A sau khi k?? Bi??n b???n Nghi???m thu v?? thanh l?? n??y. (Party B has the responsibility for reporting and evaluating work result of students to the Party A after signing this Minutes of Service Contract Liquidation).</Typography> </li>
                  <li><Typography variant='p' paragraph>B??n A c?? tr??ch nhi???m thanh to??n ?????y ????? cho B??n B sau khi 2 b??n k?? thanh l?? h???p ?????ng (Party A shall pay in full to Party B after signing this contract liquidation).</Typography></li>
                </ul>
                
                {/* Dieu 4*/}
                <Typography variant='p'><b>??i???u 4. (Article 4.): Thanh l?? h???p ?????ng (Termination of the contract)</b></Typography>
                <ul>
                  <li><Typography variant='p' paragraph>H???p ?????ng s??? <Box component="span" m={1}/> ng??y <Box component="span" m={4}/> ???????c thanh l?? sau khi B??n A ho??n t???t vi???c thanh to??n cho B??n B. (The Contract No. <Box component="span" m={1}/> dated on <Box component="span" m={4}/> has been terminated after Party A has finished all the payment for Party B). </Typography> </li>
                  <li><Typography variant='p' paragraph>Bi??n b???n Nghi???m thu v?? thanh l?? n??y c?? hi???u l???c t??? ng??y {today}; ???????c l???p th??nh 04 b???n, c?? gi?? tr??? ph??p l?? nh?? nhau; B??n B gi??? 01 b???n v?? B??n A gi??? 03 b???n. (This Minute of Service Contract Liquidation becomes effective from {today}; and is made into 04 copies of equal legal value; the Party B keeps 01 copy and the Party A keeps 03 copies).</Typography></li>
                </ul>
                <table className={`${classes.table} ${classes.signatureTable}`}>
                  <tr>
                    <td rowspan="2">B??N B (PARTY B)</td>
                    <td style={{borderBottom: 'none'}}>B??N A (PARTY A)</td>
                  </tr>
                  <tr>
                    <td style={{borderTop: 'none', height: '30px'}}>Nguy???n H???i ????ng</td>
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

export default Annex6
