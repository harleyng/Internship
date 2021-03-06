import React, { useState, useEffect } from 'react' 
import { Grid, Typography, CircularProgress, Divider, Paper, Button, Box } from '@material-ui/core'
import moment from 'moment'

import useStyles from './styles'
import { annex3_EN, annex3_VN, 
         university_EN, university_VN, 
         academy_EN, academy_VN, 
         document_header_1_EN, document_header_1_VN, 
         document_header_2_EN, document_header_2_VN 
        } from '../../setting/constants/document'

const Annex3 = ({ profile, download, documentMode }) => {
  const classes = useStyles();
  const [duration, setDuration] = useState(0)
  const dateToday = new Date().getDate();
  const monthToday = new Date().getMonth() + 1;
  const yearToday = new Date().getFullYear();
  const today = new Date().toLocaleDateString('en-GB');

  useEffect(() => {
    if (profile.internship) {
      const startTime = moment(new Date(profile.internship.startTime).toLocaleDateString('en-DB'), 'M/D/YYYY');
      const endTime = moment(new Date(profile.internship.endTime).toLocaleDateString('en-DB'), 'M/D/YYYY');
      setDuration(endTime.diff(startTime, 'months'));
    }
  }, [profile])
  return (
    !profile.supervisor && !profile.internship ? <CircularProgress /> : (
      <>
        {documentMode?.annex3 && (
          <div className={classes.documentContainer}>
            <Grid container justify='space-between' className={classes.documentNavbar}>
              <Grid item xs={10}><Typography variant='h5'>{annex3_EN} (Annex 3)</Typography></Grid>
              <Grid item xs={2} align='right'><Button onClick={() => download('Annex3', 3100)}>Download</Button></Grid>
            </Grid>
            <Box className={classes.documentWrapper} overflow='scroll' id="Annex3">
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
                  <Typography variant='h5' align='center'>{annex3_VN}</Typography>
                  <Typography variant='h5' align='center'><i>{annex3_EN}</i></Typography>
                </Box>
                
                {/* Can cu Quyet dinh */}
                <ul>
                  <li>
                    <Typography variant='p' display="block" paragraph>C??n c??? Quy???t ?????nh s??? 2067/Q??-TTg ng??y 9 th??ng 12 n??m 2009 c???a Th??? T?????ng Ch??nh ph??? v??? vi???c th??nh l???p Tr?????ng ?????i h???c Khoa h???c v?? C??ng ngh??? H?? N???i; (Pursuant to Decision No. 2067/QD-TTg dated December 9th, 2009 by Prime Minister on establishing University of Science and Technology of Hanoi);</Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>C??n c??? Quy???t ?????nh s??? 2557/Q??-TTg ng??y 30 th??ng 12 n??m 2016 c???a Th??? t?????ng Ch??nh ph??? v??? vi???c ban h??nh Quy ch??? t??? ch???c v?? ho???t ?????ng c???a Tr?????ng ?????i h???c Khoa h???c v?? C??ng ngh??? H?? N???i; (Pursuant to Decision No. 2557/Q??-TTg dated December 30th, 2016 by Prime Minister on regulations of organization and operation of University of Science and Technology of Hanoi);</Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>C??n c??? Quy???t ?????nh s??? 077/Q??-??HKHCN ng??y 14/02/2020 c???a Hi???u tr?????ng Tr?????ng ?????i h???c Khoa h???c v?? C??ng ngh??? H?? N???i v??? vi???c Ban h??nh Quy ch??? chi ti??u n???i b??? c???a Tr?????ng ?????i h???c Khoa h???c v?? C??ng ngh??? H?? N???i (Pursuant to Decision No. 077/Q??- ??HKHCN dated February 14, 2020 of USTH Rector on issuing Regulations on Internal expenditures of University of Science and Technology of Hanoi);</Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>C??n c??? Quy???t ?????nh c??ng nh???n ????? t??i v?? c??n b??? h?????ng d???n th???c t???p s??? <Box component="span" m={1}/> ng??y <Box component="span" m={4}/> c???a Hi???u tr?????ng Tr?????ng ?????i h???c Khoa h???c v?? C??ng ngh??? H?? N???i  (Pursuant to Decision No. <Box component="span" m={1}/> dated <Box component="span" m={4}/> of USTH Rector on accrediting internship topics and supervisors)</Typography>
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
                    <td>Ng??y th??ng n??m sinh <br/>(Date of birth):</td>
                    <td colspan='2'>{new Date(profile.supervisor.DOB).toLocaleDateString('en-GB')}</td>
                  </tr>
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
                <Typography variant='p' paragraph>th???a thu???n k?? k???t H???p ?????ng n??y (sau ????y g???i t???t l?? ???H???p ?????ng???) v???i c??c n???i dung v?? ??i???u kho???n nh?? sau (agree to conclude this Contract (here in after the ???Contract???) with the following terms and conditions):</Typography>
              </Paper>
              
              <Divider data-html2canvas-ignore="true" />
    
              <Paper className={classes.document} >
              {/* Dieu 1 */}
              <Typography variant='p'><b>??I???U 1: N????I DUNG C??NG VI???C (ARTICLE. 1: CONTRACT TERM)</b></Typography>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li>
                  <Typography variant='p' paragraph>1.1. &nbsp;&nbsp; B??n B h?????ng d???n th???c t???p cho sinh vi??n/h???c vi??n c???a b??n A theo n???i dung sau:</Typography> 
                  <table className={`${classes.table} ${classes.contractTable}`}>
                    <tr>
                      <th>STT/ <br/> No.</th>
                      <th>T??n sinh vi??n/h???c vi??n <br/> Name of student</th>
                      <th>M?? sinh vi??n/h???c vi??n <br/> Student ID</th>
                      <th>Chuy??n ng??nh/ <br/> Specialty</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>{profile.fullName}</td>
                      <td>{profile.studentID}</td>
                      <td>{profile.department}</td>
                    </tr>
                  </table>
                </li>
                <li><Typography variant='p' paragraph>1.2. &nbsp;&nbsp; Th???i gian h?????ng d???n (Tentative time):  t??? (from) {new Date(profile.internship.startTime).toLocaleDateString('en-DB')} ?????n (to) {new Date(profile.internship.endTime).toLocaleDateString('en-DB')}  <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Th???i h???n h???p ?????ng (Contract term): {duration} th??ng</Typography> 
                </li>
                <li><Typography variant='p' paragraph>1.3. &nbsp;&nbsp; B??n B h?????ng d???n th???c t???p cho sinh vi??n/h???c vi??n c???a b??n A theo n???i dung sau:</Typography> </li>
              </ul>
    
              {/* Dieu 2 */}
              <Typography variant='p'><b>??I???U 2:  TR??CH NHI???M C???A B??N B (ARTICLE. 2: PARTY B???S OBLIGATIONS)</b></Typography>
              <ul>
                <li><Typography variant='p' paragraph>C?? tr??ch nhi???m gi??m s??t, b??? sung c??c ki???n th???c, kinh nghi???m th???c ti???n cho th???c t???p sinh trong qu?? tr??nh th???c t???p (Being responsible for supervising, providing practical experiences to the student).</Typography> </li>
                <li><Typography variant='p' paragraph>Gi??p th???c t???p sinh ho??n thi???n ????? c????ng, h?????ng d???n th???c t???p sinh th???c hi???n t??i li???u ????ng quy ?????nh v?? b???o ?????m ????? c????ng (Help students complete the document outline, guide students to implement the documents in accordance with the regulations and ensure the outline).</Typography></li>
                <li><Typography variant='p' paragraph>????nh gi?? k???t qu??? th???c t???p c???a th???c t???p sinh theo c??c quy ?????nh v?? form m???u c???a Tr?????ng. (Supplying evaluation internship result of students following the related regulations of USTH).</Typography> </li>
                <li><Typography variant='p' paragraph>Chi tr??? thu??? thu nh???p c?? nh??n, c??c kho???n thu??? v?? ph?? kh??c ph??t sinh t??? th?? lao c???a c??ng vi???c n??y (Paying the Personal Income Tax and other taxes, fees, if any).</Typography> </li>
              </ul>
              
              {/* Dieu 3 */}
              <Typography variant='p'><b>??I????U 3: TRA??CH NHI????M CU??A B??N A (ARTICLE. 3: PARTY A???S OBLIGATIONS)</b></Typography>
              <ul>
                <li><Typography variant='p' paragraph>Chi tr??? th?? lao cho b??n B theo quy ?????nh c???a Tr?????ng (To pay compensation for Party B complying with the regulation of the USTH)</Typography> </li>
                <li><Typography variant='p' paragraph>Ph???i h???p v???i b??n B gi???i quy???t k???p th???i c??c v???n ????? ph??t sinh, khi???u n???i gi???a c??c b??n li??n quan (To coordinate with Party B to handle arising issues and complaints of concerned parties).</Typography></li>
              </ul>
              
              {/* Dieu 4*/}
              <Typography variant='p'><b>??I???U 4: GI?? TR??? H???P ?????NG V?? THANH TO??N (ARTICLE.4: CONTRACT VALUE & PAYMENT)</b></Typography>
              <ul>
                <li><Typography variant='p' paragraph>Th?? lao h?????ng d???n kh??a lu???n t???t nghi???p h??? c??? nh??n (bao g???m thu???): <b>2.100.000 ?????ng</b> (b???ng ch???: Hai tri???u m???t tr??m ngh??n ?????ng)/kh??a lu???n (Allowance for guiding the graduation thesis of the Bachelor (including tax): <b>2.100.000 dong</b> (in words: Two million and one hundred thousand dong / thesis) </Typography> </li>
                <li><Typography variant='p' paragraph>Thanh to??n: B??n A thanh to??n to??n b??? ti???n th?? lao c??c lo???i cho b??n B b???ng chuy???n kho???n v??o t??i kho???n c???a b??n B th??ng qua t??i kho???n trung gian: 049 270 310 103 c???a Tr?????ng ?????i h???c Khoa h???c v?? C??ng ngh??? H?? N???i t???i NH TMCP Ngo???i Th????ng Vi???t Nam, CN Th??ng Long ho???c chuy???n kho???n tr???c ti???p v??o t??i kho???n c???a b??n B. (Payment: Party A pays all the fee to Party B by transferring money to Party B???s account through an intermediary account: 049 270 310 103 of University of Science and Technology of Hanoi at the Joint Stock Commercial Bank for Foreign Trade of Vietnam, Thang Long Branch or directly transfer to account of Party B).</Typography></li>
              </ul>
              </Paper>
            
              <div className='html2pdf__page-break' />
              <Divider data-html2canvas-ignore="true" />
    
              <Paper className={classes.document}>
              {/* Dieu 5 */}
                <Typography variant='p'><b>??I???U 5. ??I???U KHO???N CHUNG (ARTICLE 5. GENERAL PROVISIONS)</b></Typography>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li><Typography variant='p' paragraph>5.1. &nbsp;&nbsp; H???p ?????ng n??y ch???m d???t sau khi h???t th???i gian th???a thu???n n??u trong h???p ?????ng ho???c khi m???t  trong hai b??n 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; kh??ng th???c hi???n ?????y ????? tr??ch nhi???m c???a m??nh. (This contract will be liquidated upon the term of the contract 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; or one of two parties??? inabilities to perform their responsibility).</Typography> </li>
                  <li><Typography variant='p' paragraph>5.2. &nbsp;&nbsp; M???t b??n ????n ph????ng ch???m d???t h???p ?????ng b???ng vi???c th??ng b??o b???ng v??n b???n cho b??n kia tr?????c ??t nh???t ba 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (03) ng??y. (One Party unilaterally terminates the contract by a 03 day prior written notice to the other party).</Typography> </li>
                  <li><Typography variant='p' paragraph>5.3. &nbsp;&nbsp; B??n B s??? ch???u m???i chi ph?? ph??t sinh do vi???c kh??ng ti???p t???c c??ng vi???c c???a m??nh n???u mu???n ch???m d???t h???p ?????ng
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  tr?????c th???i h???n. (The Party B shall pay all arising cost due to not continuing his work). </Typography> </li>
                  <li><Typography variant='p' paragraph>5.4. &nbsp;&nbsp; H???p ?????ng n??y c?? th??? ???????c gia h???n ho???c s???a ?????i d???a tr??n s??? nh???t tr?? c???a c??? hai b??n, th??? hi???n b???ng v??n b???n 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c?? ch??? k?? c???a hai b??n. (This Contract can be extended or amended upon mutual agreement of the Parties, in 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; written form signed by both Parties).</Typography> </li>
                  <li><Typography variant='p' paragraph>5.5. &nbsp;&nbsp; V??n b???n gia h???n, s???a ?????i l?? m???t ph???n kh??ng t??ch r???i c???a h???p ?????ng n??y. (The extension, amendment 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; document shall be an integral part of this Contract). </Typography> </li>          
                  <li><Typography variant='p' paragraph>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; H???p ?????ng c?? hi???u l???c k??? t??? ng??y k?? ghi t???i trang ?????u h???p ?????ng n??y. (This Contract takes effect from the date first written above).</Typography></li>
                  <li><Typography variant='p' paragraph>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; H???p ?????ng n??y ???????c l??m th??nh 04 b???n c?? gi?? tr??? nh?? nhau. B??n A gi??? 03 b???n; B??n B gi??? 01 b???n. (This Contract is made into 4 copies of equal value. Party A keeps 3 copies and Party B keeps 1 copy).</Typography></li>
                  <li><Typography variant='p' paragraph>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; H???p ?????ng n??y l??m t???i Tr?????ng ?????i h???c Khoa h???c v?? C??ng ngh??? H?? N???i ng??y {dateToday} th??ng {monthToday} n??m {yearToday} (Executed in University of Science and Technology of Hanoi on {today}) </Typography></li>
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

export default Annex3
