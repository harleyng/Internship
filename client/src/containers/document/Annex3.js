import React, { useState, useEffect } from 'react' 
import { Grid, Typography, CircularProgress, Divider, Paper, Button, Box } from '@material-ui/core'
import moment from 'moment'

import useStyles from './styles'
import { annex3_EN, annex3_VN, 
         university_EN, university_VN, 
         academy_EN, academy_VN, 
         document_header_1_EN, document_header_1_VN, 
         document_header_2_EN, document_header_2_VN 
        } from '../../constants/document'

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
                    <td>Số (Ref No.): &nbsp;&nbsp; /21/HĐHD-ICT</td>
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
                    <Typography variant='p' display="block" paragraph>Căn cứ Quyết định số 2067/QĐ-TTg ngày 9 tháng 12 năm 2009 của Thủ Tướng Chính phủ về việc thành lập Trường Đại học Khoa học và Công nghệ Hà Nội; (Pursuant to Decision No. 2067/QD-TTg dated December 9th, 2009 by Prime Minister on establishing University of Science and Technology of Hanoi);</Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>Căn cứ Quyết định số 2557/QĐ-TTg ngày 30 tháng 12 năm 2016 của Thủ tướng Chính phủ về việc ban hành Quy chế tổ chức và hoạt động của Trường Đại học Khoa học và Công nghệ Hà Nội; (Pursuant to Decision No. 2557/QĐ-TTg dated December 30th, 2016 by Prime Minister on regulations of organization and operation of University of Science and Technology of Hanoi);</Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>Căn cứ Quyết định số 077/QĐ-ĐHKHCN ngày 14/02/2020 của Hiệu trưởng Trường Đại học Khoa học và Công nghệ Hà Nội về việc Ban hành Quy chế chi tiêu nội bộ của Trường Đại học Khoa học và Công nghệ Hà Nội (Pursuant to Decision No. 077/QĐ- ĐHKHCN dated February 14, 2020 of USTH Rector on issuing Regulations on Internal expenditures of University of Science and Technology of Hanoi);</Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>Căn cứ Quyết định công nhận đề tài và cán bộ hướng dẫn thực tập số <Box component="span" m={1}/> ngày <Box component="span" m={4}/> của Hiệu trưởng Trường Đại học Khoa học và Công nghệ Hà Nội  (Pursuant to Decision No. <Box component="span" m={1}/> dated <Box component="span" m={4}/> of USTH Rector on accrediting internship topics and supervisors)</Typography>
                  </li>
                </ul>
                
                {/* Attendant */}
                <Typography variant='p' display="block" paragraph>Hôm nay, ngày {dateToday} tháng {monthToday} năm {yearToday}, chúng tôi gồm (On {today}, we are):</Typography>
                {/* Side A */}
                <Typography variant='p'><b>BÊN A (PARTY A): TRƯỜNG ĐẠI HỌC KHOA HỌC VÀ CÔNG NGHỆ HÀ NỘI (UNIVERSITY OF SCIENCE AND TECHNOLOGY OF HANOI)</b></Typography>
                <table className={`${classes.table} ${classes.attendantTable}`}>
                  <colgroup>
                      <col width='25%' />
                      <col width='75%'  />
                  </colgroup>
                  <tr>
                    <td>Đại diện (Represented by):</td>
                    <td>Ông (Mr.) Nguyễn Hải Đăng – Phó Hiệu trưởng (Vice Rector) 
                        (theo Quyết định ủy quyền số 98/QĐ-ĐHKHCN ngày 09/02/2021/ 
                        As in the Power of Attorney No.98/UQ-ĐHKHCN dated February 09, 2021)
                    </td>
                  </tr>
                  <tr>
                    <td>Điện thoại (Tel)/Fax:</td>
                    <td>(84 -24) 37916960</td>
                  </tr>
                  <tr>
                    <td>Địa chỉ (Address):</td>
                    <td>18 Hoàng Quốc Việt, Cầu Giấy, Hà Nội, Việt Nam</td>
                  </tr>
                  <tr>
                    <td>Tài khoản (Account): </td>
                    <td>9523.1.1104699 và 3714.0.1104699 tại Kho bạc Nhà nước Cầu Giấy</td>
                  </tr>
                </table>
                {/* Side B */}
                <Typography variant='p'><b>BÊN B (PARTY B): Ông/Bà (Mr./Mrs) {profile.supervisor.fullName}</b></Typography>
                <table className={`${classes.table} ${classes.attendantTable}`}>
                  <colgroup>
                      <col width='25%' />
                      <col width='35%'/>
                      <col/>
                  </colgroup>
                  <tr>
                    <td>Ngày tháng năm sinh <br/>(Date of birth):</td>
                    <td colspan='2'>{new Date(profile.supervisor.DOB).toLocaleDateString('en-GB')}</td>
                  </tr>
                  <tr>
                    <td>Số CMTND/ Hộ chiếu <br/>(ID/ Passport No.): </td>
                    <td style={{borderRight: 'none'}}>{profile.supervisor.personalID?.No} </td>
                    <td style={{borderLeft: 'none'}}>cấp ngày (dated): {profile.supervisor.personalID?.givenDate} <br/> tại (in): {profile.supervisor.personalID?.givenPlace}</td>
                  </tr>
                  <tr>
                    <td>Địa chỉ (Address):</td>
                    <td colspan='2'>{profile.supervisor.address}</td>
                  </tr>
                  <tr>
                    <td>Số điện thoại (Tel):</td>
                    <td style={{borderRight: 'none'}}>{profile.supervisor.phoneNo}</td>
                    <td style={{borderLeft: 'none'}}>Email: {profile.supervisor.email}</td>
                  </tr>
                  <tr>
                    <td>Tài khoản (Account No):</td>
                    <td colspan='2'>{profile.supervisor.bankAccount?.No}</td>
                  </tr>
                  <tr>
                    <td>Tại (at):</td>
                    <td style={{borderRight: 'none'}}>{profile.supervisor.bankAccount?.bankName}</td>
                    <td style={{borderLeft: 'none'}}> branch (Chi nhánh): {profile.supervisor.bankAccount?.branch}</td>
                  </tr>
                  <tr>
                    <td>MST TNCN (PIT code):</td>
                    <td colspan='2'>{profile.supervisor.PITCode}</td>
                  </tr>
                </table>
                <Typography variant='p' paragraph>thỏa thuận ký kết Hợp đồng này (sau đây gọi tắt là “Hợp đồng”) với các nội dung và điều khoản như sau (agree to conclude this Contract (here in after the “Contract”) with the following terms and conditions):</Typography>
              </Paper>
              
              <Divider data-html2canvas-ignore="true" />
    
              <Paper className={classes.document} >
              {/* Dieu 1 */}
              <Typography variant='p'><b>ĐIỀU 1: NỘI DUNG CÔNG VIỆC (ARTICLE. 1: CONTRACT TERM)</b></Typography>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li>
                  <Typography variant='p' paragraph>1.1. &nbsp;&nbsp; Bên B hướng dẫn thực tập cho sinh viên/học viên của bên A theo nội dung sau:</Typography> 
                  <table className={`${classes.table} ${classes.contractTable}`}>
                    <tr>
                      <th>STT/ <br/> No.</th>
                      <th>Tên sinh viên/học viên <br/> Name of student</th>
                      <th>Mã sinh viên/học viên <br/> Student ID</th>
                      <th>Chuyên ngành/ <br/> Specialty</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>{profile.fullName}</td>
                      <td>{profile.studentID}</td>
                      <td>{profile.department}</td>
                    </tr>
                  </table>
                </li>
                <li><Typography variant='p' paragraph>1.2. &nbsp;&nbsp; Thời gian hướng dẫn (Tentative time):  từ (from) {new Date(profile.internship.startTime).toLocaleDateString('en-DB')} đến (to) {new Date(profile.internship.endTime).toLocaleDateString('en-DB')}  <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Thời hạn hợp đồng (Contract term): {duration} tháng</Typography> 
                </li>
                <li><Typography variant='p' paragraph>1.3. &nbsp;&nbsp; Bên B hướng dẫn thực tập cho sinh viên/học viên của bên A theo nội dung sau:</Typography> </li>
              </ul>
    
              {/* Dieu 2 */}
              <Typography variant='p'><b>ĐIỀU 2:  TRÁCH NHIỆM CỦA BÊN B (ARTICLE. 2: PARTY B‘S OBLIGATIONS)</b></Typography>
              <ul>
                <li><Typography variant='p' paragraph>Có trách nhiệm giám sát, bổ sung các kiến thức, kinh nghiệm thực tiễn cho thực tập sinh trong quá trình thực tập (Being responsible for supervising, providing practical experiences to the student).</Typography> </li>
                <li><Typography variant='p' paragraph>Giúp thực tập sinh hoàn thiện đề cương, hướng dẫn thực tập sinh thực hiện tài liệu đúng quy định và bảo đảm đề cương (Help students complete the document outline, guide students to implement the documents in accordance with the regulations and ensure the outline).</Typography></li>
                <li><Typography variant='p' paragraph>Đánh giá kết quả thực tập của thực tập sinh theo các quy định và form mẫu của Trường. (Supplying evaluation internship result of students following the related regulations of USTH).</Typography> </li>
                <li><Typography variant='p' paragraph>Chi trả thuế thu nhập cá nhân, các khoản thuế và phí khác phát sinh từ thù lao của công việc này (Paying the Personal Income Tax and other taxes, fees, if any).</Typography> </li>
              </ul>
              
              {/* Dieu 3 */}
              <Typography variant='p'><b>ĐIỀU 3: TRÁCH NHIỆM CỦA BÊN A (ARTICLE. 3: PARTY A’S OBLIGATIONS)</b></Typography>
              <ul>
                <li><Typography variant='p' paragraph>Chi trả thù lao cho bên B theo quy định của Trường (To pay compensation for Party B complying with the regulation of the USTH)</Typography> </li>
                <li><Typography variant='p' paragraph>Phối hợp với bên B giải quyết kịp thời các vấn đề phát sinh, khiếu nại giữa các bên liên quan (To coordinate with Party B to handle arising issues and complaints of concerned parties).</Typography></li>
              </ul>
              
              {/* Dieu 4*/}
              <Typography variant='p'><b>ĐIỀU 4: GIÁ TRỊ HỢP ĐỒNG VÀ THANH TOÁN (ARTICLE.4: CONTRACT VALUE & PAYMENT)</b></Typography>
              <ul>
                <li><Typography variant='p' paragraph>Thù lao hướng dẫn khóa luận tốt nghiệp hệ cử nhân (bao gồm thuế): <b>2.100.000 đồng</b> (bằng chữ: Hai triệu một trăm nghìn đồng)/khóa luận (Allowance for guiding the graduation thesis of the Bachelor (including tax): <b>2.100.000 dong</b> (in words: Two million and one hundred thousand dong / thesis) </Typography> </li>
                <li><Typography variant='p' paragraph>Thanh toán: Bên A thanh toán toàn bộ tiền thù lao các loại cho bên B bằng chuyển khoản vào tài khoản của bên B thông qua tài khoản trung gian: 049 270 310 103 của Trường Đại học Khoa học và Công nghệ Hà Nội tại NH TMCP Ngoại Thương Việt Nam, CN Thăng Long hoặc chuyển khoản trực tiếp vào tài khoản của bên B. (Payment: Party A pays all the fee to Party B by transferring money to Party B’s account through an intermediary account: 049 270 310 103 of University of Science and Technology of Hanoi at the Joint Stock Commercial Bank for Foreign Trade of Vietnam, Thang Long Branch or directly transfer to account of Party B).</Typography></li>
              </ul>
              </Paper>
            
              <div className='html2pdf__page-break' />
              <Divider data-html2canvas-ignore="true" />
    
              <Paper className={classes.document}>
              {/* Dieu 5 */}
                <Typography variant='p'><b>ĐIỀU 5. ĐIỀU KHOẢN CHUNG (ARTICLE 5. GENERAL PROVISIONS)</b></Typography>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li><Typography variant='p' paragraph>5.1. &nbsp;&nbsp; Hợp đồng này chấm dứt sau khi hết thời gian thỏa thuận nêu trong hợp đồng hoặc khi một  trong hai bên 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; không thực hiện đầy đủ trách nhiệm của mình. (This contract will be liquidated upon the term of the contract 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; or one of two parties’ inabilities to perform their responsibility).</Typography> </li>
                  <li><Typography variant='p' paragraph>5.2. &nbsp;&nbsp; Một bên đơn phương chấm dứt hợp đồng bằng việc thông báo bằng văn bản cho bên kia trước ít nhất ba 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (03) ngày. (One Party unilaterally terminates the contract by a 03 day prior written notice to the other party).</Typography> </li>
                  <li><Typography variant='p' paragraph>5.3. &nbsp;&nbsp; Bên B sẽ chịu mọi chi phí phát sinh do việc không tiếp tục công việc của mình nếu muốn chấm dứt hợp đồng
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  trước thời hạn. (The Party B shall pay all arising cost due to not continuing his work). </Typography> </li>
                  <li><Typography variant='p' paragraph>5.4. &nbsp;&nbsp; Hợp đồng này có thể được gia hạn hoặc sửa đổi dựa trên sự nhất trí của cả hai bên, thể hiện bằng văn bản 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; có chữ ký của hai bên. (This Contract can be extended or amended upon mutual agreement of the Parties, in 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; written form signed by both Parties).</Typography> </li>
                  <li><Typography variant='p' paragraph>5.5. &nbsp;&nbsp; Văn bản gia hạn, sửa đổi là một phần không tách rời của hợp đồng này. (The extension, amendment 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; document shall be an integral part of this Contract). </Typography> </li>          
                  <li><Typography variant='p' paragraph>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hợp đồng có hiệu lực kể từ ngày ký ghi tại trang đầu hợp đồng này. (This Contract takes effect from the date first written above).</Typography></li>
                  <li><Typography variant='p' paragraph>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hợp đồng này được làm thành 04 bản có giá trị như nhau. Bên A giữ 03 bản; Bên B giữ 01 bản. (This Contract is made into 4 copies of equal value. Party A keeps 3 copies and Party B keeps 1 copy).</Typography></li>
                  <li><Typography variant='p' paragraph>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hợp đồng này làm tại Trường Đại học Khoa học và Công nghệ Hà Nội ngày {dateToday} tháng {monthToday} năm {yearToday} (Executed in University of Science and Technology of Hanoi on {today}) </Typography></li>
                </ul> 
                <table className={`${classes.table} ${classes.signatureTable}`}>
                  <tr>
                    <td rowspan="2">BÊN B (PARTY B)</td>
                    <td style={{borderBottom: 'none'}}>BÊN A (PARTY A)</td>
                  </tr>
                  <tr>
                    <td style={{borderTop: 'none', height: '30px'}}>Nguyễn Hải Đăng</td>
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
