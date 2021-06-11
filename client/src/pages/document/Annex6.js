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
                    <td>Số (Ref No.): &nbsp;&nbsp; /21/HĐHD-ICT</td>
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
                    <Typography variant='p' display="block" paragraph>Căn cứ Hợp đồng Hướng dẫn thực tập số  <Box component="span" m={1}/> ký ngày <Box component="span" m={4}/> và thỏa thuận giữa Trường Đại học Khoa học và Công nghệ Hà Nội và người lao động (Pursuant to the Internship Supervisor Contract No. <Box component="span" m={1}/> dated <Box component="span" m={4}/> and considering the mutual agreement between the University of Science and Technology of Hanoi and the Employee);</Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>Căn cứ Báo cáo hoàn thành công việc và tài liệu (Pursuant to the working report and the related documents).</Typography>
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
                <Typography variant='p' paragraph>Hai bên cùng xem xét, đánh giá kết quả thực hiện công việc và thống nhất ký kết Biên bản nghiệm thu và thanh lý Hợp đồng hướng dẫn thực tập số <Box component="span" m={1}/> (sau đây gọi tắt là “Hợp đồng”) với các nội dung và điều khoản như sau (The two parties have considered, evaluated the working result and signed this Minutes of Liquidation for the Thesis/ Internship Supervisor Contract No. <Box component="span" m={1}/> (Hereinafter referred to as the “Contract”) with the following terms and conditions):</Typography>
              </Paper>
              
              <div className='html2pdf__page-break' />
              <Divider data-html2canvas-ignore="true" />
    
              <Paper className={classes.document} >
                {/* Dieu 1 */}
                <Typography variant='p'><b>Điều 1. (Article 1.): Nghiệm thu công việc (Acceptance of the work) </b></Typography>
                <Typography variant='p' display='block' paragraph>Bên A xác nhận Bên B đã hoàn thành việc hướng dẫn thực tập cho thực tập sinh của Trường ĐHKHCNHN và thực hiện đầy đủ các nghĩa vụ liên quan theo quy định tại Hợp đồng hướng dẫn thực tập số <Box component="span" m={1}/>.(Party A confirms that Party B has finished the task of supervising internship/thesis for USTH’s students and other related obligations as stated in the Thesis/ Internship Supervisor Contract No. <Box component="span" m={1}/> )</Typography>
    
                {/* Dieu 2 */}
                <Typography variant='p'><b>Điều 2. (Article 2.):  Giá trị nghiệm thu và Thanh toán (Contract value and Payment) </b></Typography>
                <ul>
                  <li><Typography variant='p' paragraph>Tổng tiền thù lao các loại của Bên B (bao gồm thuế thu nhập cá nhân) (Total remuneration of all types for Party B (including the Personal Income Tax (PIT)): <Box component="span" m={4}/> đồng (VND) (bằng chữ (in words): (<Box component="span" m={30}/>).</Typography> </li>
                  <li><Typography variant='p' paragraph>Tổng tiền Bên A phải thanh toán cho Bên B (bao gồm thuế thu nhập cá nhân) (Total amount which Party A needs to pay for Party B (including PIT)): <Box component="span" m={4}/> đồng (VND) (bằng chữ (in words): (<Box component="span" m={30}/>).</Typography></li>
                  <li><Typography variant='p' paragraph>Tổng tiền Bên A đã thanh toán cho Bên B (Total amount paid by Party A to Party B): <Box component="span" m={4}/> đồng (VND) (bằng chữ (in words): ( <Box component="span" m={25}/>).</Typography></li>
                  <li><Typography variant='p' paragraph>Tổng tiền Bên A còn phải thanh toán cho Bên B (The remaining payment which Party A needs to pay for Party B): <Box component="span" m={4}/> đồng (VND) (bằng chữ (in words): (<Box component="span" m={30}/>).</Typography></li>
                </ul>
                
                {/* Dieu 3 */}
                <Typography variant='p'><b>Điều 3. (Article 3.): Trách nhiệm của hai bên (Responsibility of 2 parties)</b></Typography>
                <ul>
                  <li><Typography variant='p' paragraph>Bên B có trách nhiệm báo cáo và đánh giá kết quả làm việc của thực tập sinh cho Bên A sau khi ký Biên bản Nghiệm thu và thanh lý này. (Party B has the responsibility for reporting and evaluating work result of students to the Party A after signing this Minutes of Service Contract Liquidation).</Typography> </li>
                  <li><Typography variant='p' paragraph>Bên A có trách nhiệm thanh toán đầy đủ cho Bên B sau khi 2 bên ký thanh lý hợp đồng (Party A shall pay in full to Party B after signing this contract liquidation).</Typography></li>
                </ul>
                
                {/* Dieu 4*/}
                <Typography variant='p'><b>Điều 4. (Article 4.): Thanh lý hợp đồng (Termination of the contract)</b></Typography>
                <ul>
                  <li><Typography variant='p' paragraph>Hợp đồng số <Box component="span" m={1}/> ngày <Box component="span" m={4}/> được thanh lý sau khi Bên A hoàn tất việc thanh toán cho Bên B. (The Contract No. <Box component="span" m={1}/> dated on <Box component="span" m={4}/> has been terminated after Party A has finished all the payment for Party B). </Typography> </li>
                  <li><Typography variant='p' paragraph>Biên bản Nghiệm thu và thanh lý này có hiệu lực từ ngày {today}; được lập thành 04 bản, có giá trị pháp lý như nhau; Bên B giữ 01 bản và Bên A giữ 03 bản. (This Minute of Service Contract Liquidation becomes effective from {today}; and is made into 04 copies of equal legal value; the Party B keeps 01 copy and the Party A keeps 03 copies).</Typography></li>
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

export default Annex6
