import React, { useState, useEffect } from 'react' 
import { useSelector } from "react-redux";
import { Grid, Typography, CircularProgress, Divider, Paper, Button, Box } from '@material-ui/core'
import moment from 'moment'

import useStyles from './styles'
import { annex4_EN, annex4_VN, 
         university_EN, university_VN, 
         academy_EN, academy_VN, 
         document_header_1_EN, document_header_1_VN, 
         document_header_2_EN, document_header_2_VN 
        } from '../../constants/document'

const Annex4 = ({ profile, download, documentMode }) => {
  const classes = useStyles();
  const [duration, setDuration] = useState(0);
  const user = useSelector(state => state.studentUser);
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
                    <Typography variant='p' display="block" paragraph>Căn cứ Bộ luật Dân sự số 91/2015/QH13 ngày 24 tháng 11 năm 2015 của Quốc hội khóa XIII; <br/>
                      <i>Pursuant to the Civil Code Law no. 91/2015/QH13 dated 24th November 2015 by 13th National Assembly;</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>Căn cứ Đơn đề nghị thực tập của sinh viên: {profile.fullName} <br/>
                      <i>Pursuant to the Application of student: {profile.fullName} </i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>Căn cứ Đề xuất của Khoa {profile.department} <br/>
                      <i>Pursuant to the proposal of academic department of {profile.department}</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>Căn cứ vào nhu cầu và năng lực của các bên,<br/>
                      <i>Pursuant to the requirement and capability of parties,</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" paragraph>Hôm nay, ngày {dateToday} tháng {monthToday} năm {yearToday}, tại <br/>
                      <i>Today is {today} at</i>
                    </Typography>
                  </li>
                </ul>
                
                {/* Attendant */}
                {/* Side A */}
                <Typography variant='p' display="block"><b>BÊN A: TRƯỜNG ĐẠI HỌC KHOA HỌC VÀ CÔNG NGHỆ HÀ NỘI, sau đây gọi là Trường USTH</b></Typography>
                <Typography variant='p'><i>Party A: University of Science and Technology of Hanoi – referred as the USTH</i></Typography>
                <table className={`${classes.annex4AttendantTable}`}>
                  <colgroup>
                      <col width='20%' />
                      <col width='2%'/>
                      <col width='78%'  />
                  </colgroup>
                  <tr>
                    <td>Địa chỉ <br/> <i>Address</i></td>
                    <td>:</td>
                    <td>18 Hoàng Quốc Việt, Cầu Giấy, Hà Nội, Việt Nam</td>
                  </tr>
                  <tr>
                    <td>Đại diện <br/> <i>Represented by </i></td>
                    <td>:</td>
                    <td>TS <i>(Dr).</i> Nguyễn Hải Đăng </td>
                  </tr>
                  <tr>
                    <td>Chức vụ <br/> <i>Title </i></td>
                    <td>:</td>
                    <td>Phó Hiệu trưởng <br/> <i>Vice Rector</i></td>
                  </tr> 
                </table>
                {/* Side B */}
                <Typography variant='p' display="block"><b>BÊN B: {profile.internship.host}</b></Typography>
                <Typography variant='p'><i>Party B: {profile.internship.host}</i></Typography>
                <table className={`${classes.annex4AttendantTable}`}>
                  <colgroup>
                      <col width='20%' />
                      <col width='2%'/>
                      <col width='78%'  />
                  </colgroup>
                  <tr>
                    <td>Địa chỉ <br/> <i>Address</i></td>
                    <td>:</td>
                    <td>{profile.internship.location}</td>
                  </tr>
                  <tr>
                    <td>Đại diện <br/> <i>Represented by </i></td>
                    <td>:</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Chức vụ <br/> <i>Title </i></td>
                    <td>:</td>
                    <td></td>
                  </tr> 
                </table>
    
                {/* Side C */}
                <Typography variant='p' display="block"><b>BÊN C: THỰC TẬP SINH </b></Typography>
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
                    <td>Họ và tên <br/> <i>Full name</i></td>
                    <td>:</td>
                    <td>{profile.fullName}</td>
                    <td>Mã SV<br/> <i>Student ID</i></td>
                    <td>:</td>
                    <td>{profile.studentID}</td>
                  </tr>
                  <tr>
                    <td>Ngày sinh <br/> <i>Date of birth </i></td>
                    <td>:</td>
                    <td>{new Date(profile.DOB).toLocaleDateString('en-GB')}</td>
                    <td>Năm học <br/> <i>The academic year </i></td>
                    <td>:</td>
                    <td>{profile.academicYear}</td>
                  </tr>
                  <tr>
                    <td>Khoa <br/> <i>Department </i></td>
                    <td>:</td>
                    <td>{profile.department}</td>
                    <td>Ngành/Cntyên ngành  <br/> <i>Specialty </i></td>
                    <td>:</td>
                    <td>{profile.department}</td>
                  </tr>
                  <tr>
                    <td>Số điện thoại<br/> <i>Phone No.</i></td>
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
              <Typography variant='p' paragraph>Các bên thống nhất các điều khoản của Thỏa thuận thực tập như sau: <br/>
                <i>Parties hereby agree terms of Internship Agreement as following: </i>
              </Typography>
              {/* Dieu 1 */}
              <Typography variant='p'><b>Điều 1. Thời gian và địa điểm thực tập <br/>
                <i>Article 1. Period and Place of internship</i></b>
              </Typography>
              <ul style={{listStyle:'none', padding: 0, marginTop: 0}}>
                <li>
                  <Typography variant='p' paragraph>1. Thời gian: Từ ngày: {new Date(profile.internship.startTime).toLocaleDateString('en-GB')} đến ngày {new Date(profile.internship.startTime).toLocaleDateString('en-GB')}<br/>
                    <i>1. Duration: From: {new Date(profile.internship.startTime).toLocaleDateString('en-GB')} to {new Date(profile.internship.startTime).toLocaleDateString('en-GB')}</i>
                  </Typography>
                </li>
                <li>
                  <Typography variant='p' paragraph>2. Địa điểm thực tập: {profile.internship.location}<br/>
                    <i>2. Place of internship: {profile.internship.location} </i>
                  </Typography>
                </li>
              </ul>
    
              {/* Dieu 2 */}
              <Typography variant='p' display='block'><b>Điều 2. Người hướng dẫn thực tập<br/>
                <i>Article 2. Internship Supervisors</i></b>
              </Typography>
              <Typography variant='p'>2.1.  Người hướng dẫn của Đơn vị tiếp nhận<br/>
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
                    <td>Họ tên <br/> <i>Full name</i></td>
                    <td>:</td>
                    <td>{profile.supervisor.fullName}</td>
                    <td>Chức vụ<br/> <i>Position</i></td>
                    <td>:</td>
                    <td>{profile.supervisor.position}</td>
                  </tr>
                  <tr>
                    <td>Phòng ban<br/> <i>Deparment</i></td>
                    <td>:</td>
                    <td>{profile.supervisor.department}</td>
                  </tr>
                  <tr>
                    <td>Số điện thoại<br/> <i>Phone No.</i></td>
                    <td>:</td>
                    <td>{profile.supervisor.phoneNo}</td>
                    <td>Email</td>
                    <td>:</td>
                    <td>{profile.supervisor.email}</td>
                  </tr>
                </table>
              <Typography variant='p' display='block' style={{marginTop: '16px'}}>2.2.  Người hướng dẫn của Trường<br/>
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
                    <td>Họ tên <br/> <i>Full name</i></td>
                    <td>:</td>
                    <td></td>
                    <td>Chức vụ<br/> <i>Position</i></td>
                    <td>:</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Phòng ban<br/> <i>Deparment</i></td>
                    <td>:</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Số điện thoại<br/> <i>Phone No.</i></td>
                    <td>:</td>
                    <td></td>
                    <td>Email</td>
                    <td>:</td>
                    <td></td>
                  </tr>
                </table>  
              
              {/* Dieu 3 */}
              <Typography variant='p' display='block' style={{marginTop: '16px'}}><b>Điều 3. Nội dung thực tập<br/>
                <i>Article 3. Internship contents</i></b>
              </Typography>
              <ul style={{listStyle:'none', padding: 0, marginTop: 0}}>
                <li>
                  <Typography variant='p' paragraph>Thực tập là học phần bắt buộc trong chương trình đào tạo đối với tất cả các sinh viên theo học các chương trình đào tạo tại Trường. <br/>
                    <i>This internship is one of a compulsory course module in the training program upon all USTH students.</i>
                  </Typography>
                </li>
                <li>
                  <Typography variant='p' paragraph>Tên đề tài thực tập: {profile.internship.topic}<br/>
                    <i>Internship Title: {profile.internship.topic}</i>
                  </Typography>
                </li>
                <li>
                  <Typography variant='p' paragraph>Số lượng tín chỉ: <br/>
                    <i>Number of credits:</i>
                  </Typography>
                </li>
                <li>
                  <Typography variant='p' paragraph>Nội dung thực tập được mô tả theo mẫu Đề cương thực tập (Phụ lục 1) bởi Thực tập sinh và phải có chữ ký xác nhận của Giảng viên hướng dẫn.<br/>
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
                        <Typography variant='p' paragraph>Thực tập sinh có được trả lương/phụ cấp:<br/>
                          <i>The Intern is paid salary/allowance</i>
                        </Typography>
                      </td>
                      <td>&#9633; Có <br/> &#9633; Yes</td>
                      <td>&#9633; Không <br/> &#9633; No</td>
                    </tr>
                  </table>
                </li>
                <li>
                  <Typography variant='p' paragraph>Nếu được, số tiền này sẽ được tính: 2 triệu đồng / tháng<br/>
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
                        <Typography variant='p' paragraph>Bảo mật kết quả thực tập:<br/>
                          <i>Requirement on keeping confidential internship report</i>
                        </Typography>
                      </td>
                      <td>&#9633; Có <br/> &#9633; Yes</td>
                      <td>&#9633; Không <br/> &#9633; No</td>
                    </tr>
                  </table>
                </li>
                <li>
                  <Typography variant='p' paragraph>Nếu có, hoàn thiện các thông tin theo mẫu Cam kết bảo mật (Phụ lục 2).<br/>
                    <i>If yes, please fulfill Confidential Commitment Form (Annex 2).</i>
                  </Typography>
                </li>
              </ul>
              </Paper>
    
              <Divider data-html2canvas-ignore="true" />
              
              <Paper className={classes.document}>
                <ul style={{listStyle:'none', padding: 0, marginTop: 0}}>
                  <li>
                    <Typography variant='p' paragraph>Mỗi Thực tập sinh sẽ được hướng dẫn bởi một hoặc nhiều người hướng dẫn của Đơn vị tiếp nhận theo quy định tại Điều 2. Trường hợp có hai người hướng dẫn, Đơn vị tiếp nhận có thể phân định thành Người hướng dẫn chính và Người hướng dẫn phụ; hoặc Người hướng dẫn 1 và Người hướng dẫn 2; và có bảng phân công công việc cụ thể.<br/>
                      <i>The internship will be supervised by one or several supervisors appointed by the Host Institution as the Article 2. In case of two, it should be defined as senior supervisor and minor supervisor or 1st supervisor and 2nd supervisor with particular work description.</i>
                    </Typography>
                  </li>
                </ul>
    
    
                {/* Dieu 4*/}
                <Typography variant='p' display='block' style={{marginTop: '16px'}}><b>Điều 4. Đánh giá thực tập<br/>
                  <i>Article 4. Internship Evaluation</i></b>
                </Typography>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>
                    <Typography variant='p' paragraph>1. Người hướng dẫn chịu trách nhiệm nhận xét, đánh giá quá trình thực tập của Thực tập sinh tại Đơn vị tiếp nhận.<br/>
                      <i>1. External Supervisor has responsibilities in assessing and evaluating internship implementation for the Intern at the Host Institution.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>2. Người hướng dẫn của Đơn vị tiếp nhận nhận xét, đánh giá quá trình thực tập của Thực tập sinh theo mẫu của Trường về việc Đánh giá thực tập dành cho Người hướng dẫn (Phụ lục 3).<br/>
                      <i>2. External Supervisor will process assessment and evaluation for the Intern following Internship Evaluation Form applied for External Supervisor (Annex 3).</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>3. Thời gian hoàn thành và gửi kết quả nhận xét, đánh giá quá trình thực tập: trong vòng 1 tuần kể từ ngày cuối cùng của đợt thực tập.<br/>
                      <i>3. Deadline for evaluation and submission evaluation result: within 01 week since the last day of internship duration.</i>
                    </Typography>
                  </li>
                </ul>
    
                {/* Dieu 5*/}
                <Typography variant='p' display='block' style={{marginTop: '16px'}} paragraph><b>Điều 5. Trách nhiệm của các bên <br/>
                  <i>Article 5. Responsibilities</i></b>
                </Typography>
                <Typography variant='p'><b>5.1. Thực tập sinh<br/>
                  <i>5.1. The Intern</i></b>
                </Typography>
                <ul style={{listStyle: 'none', padding: 0, marginTop: 0}}>
                  <li>
                    <Typography variant='p' paragraph>1. Chấp hành đúng nội quy, quy định của Đơn vị tiếp nhận. <br/>
                      <i>1. Abiding by regulations of the Host institution.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>2. Nỗ lực học hỏi nâng cao năng lực, các kỹ năng liên quan đến nhiệm vụ được giao. <br/>
                      <i>2. Trying the best for improving the competencies and skills concerning the assigned activities.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>3. Nộp kết quả đánh giá thực tập và báo cáo thực tập về Khoa trong vòng 02 tuần kể từ ngày cuối cùng của đợt thực tập <br/>
                      <i>3. Submitting Internship Evaluation Form which is signed by External Supervisor and Internship Report to Academic Department after 2 weeks of the last day of internship duration.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>4. Có ý thức và chịu trách nhiệm về việc bảo quản tài sản, cơ sở vật chất tại Đơn vị tiếp nhận thực tập.<br/>
                      <i>4. Being aware of preserving assets, material facilities at the Host institution.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>5. Thông tin với Giảng viên hướng dẫn của Trường những khó khăn, vướng mắc trong quá trình thực tập để được hỗ trợ kịp thời.<br/>
                      <i>5. Keeping informing Internal Supervisor difficulties, obstacles during internship for timely support.</i>
                    </Typography>
                  </li>
                </ul>
    
                <Typography variant='p'><b>5.2. Đơn vị tiếp nhận<br/>
                  <i>5.2. The Host Institution</i></b>
                </Typography>
                <ul style={{listStyle: 'none', padding: 0, marginTop: 0}}>
                  <li>
                    <Typography variant='p' paragraph>1. Đơn vị tiếp nhận có trách nhiệm chỉ định và phân công nhiệm vụ Người hướng dẫn trong quá trình Thực tập sinh thực tập tại Đơn vị tiếp nhận. <br/>
                      <i>1. To be responsible for appointing and assigning External Supervisors during the internship.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>2. Đơn vị tiếp nhận phải đảm bảo Thực tập sinh được hưởng quyền lợi bảo hiểm và các điều kiện khác (nếu có) đối với Thực tập sinh.<br/>
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
                    <Typography variant='p' paragraph>3. Thanh toán đầy các khoản thù lao (nếu có) cho sinh viên <br/>
                      <i>3. Making payment fully for the Intern (if any).</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>4. Trách nhiệm của Người hướng dẫn thực tập:<br/>
                      <i>4. Responsibilities of External Supervisor</i>
                    </Typography>
                  </li>
                </ul>
                <ul style={{listStyle: 'none', marginTop: 0}}>
                  <li>
                    <Typography variant='p' paragraph>4.1. Có trách nhiệm giám sát, bổ sung được các kiến thức, kinh nghiệm thực tiễn cho Thực tập sinh trong quá trình thực tập và hỗ trợ Thực tập sinh đạt được mục tiêu thực tập được xác định trong Đề cương thực tập.<br/>
                      <i>4.1. Being responsible for supervising, providing practical experiences to the Intern and help the Intern reach the objectives described in Internship Outline.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>4.2. Đánh giá kết quả thực tập của Thực tập sinh theo các quy định nêu trên trong bản Thỏa thuận thực tập này.<br/>
                      <i>4.2. Supplying evaluation internship result of The Intern following the related regulations within this Agreement.</i>
                    </Typography>
                  </li> 
                </ul>
    
                <Typography variant='p'><b>5.3. Trường<br/>
                  <i>5.3. The USTH</i></b>
                </Typography>
                  <ul style={{listStyle: 'none', padding: 0, marginTop: 0}}>
                    <li>
                      <Typography variant='p' paragraph>1. Chịu trách nhiệm phân công Giảng viên hướng dẫn.<br/>
                        <i>1. To take responsibility in assigning Internal Supervisor.</i>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant='p' paragraph>2. Chi trả thù lao cho Giảng viên hướng dẫn, Người hướng dẫn thực tập theo quy định của Trường<br/>
                        <i>2. To pay compensation for the Internal Supervisor, External Supervisor complying with the regulation of the USTH.</i>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant='p' paragraph>3. Phối hợp với Đơn vị tiếp nhận giải quyết kịp thời các vấn đề phát sinh, khiếu nại giữa các bên liên quan. <br/>
                        <i>3. To coordinate with the Host Institution to handle arising issues and complaints of concerned parties.</i>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant='p' paragraph>4. Trách nhiệm của Giảng viên hướng dẫn của Trường:<br/>
                        <i>4.  Responsibilities of Internal Supervisor</i>
                      </Typography>
                    </li>
                  </ul>
                  <ul style={{listStyle: 'none', marginTop: 0}}>
                    <li>
                      <Typography variant='p' paragraph>4.1. Phối hợp với Người hướng dẫn thực tập của Đơn vị tiếp nhận và hỗ trợ Thực tập sinh trong quá trình thực tập. <br/>
                        <i>4.1. To coordinate with the External Supervisor and support the Intern during the internship.</i>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant='p' paragraph>4.2. Xử lý những Thực tập sinh có hành vi không trung thực, vi phạm quy định, kỷ luật và các vấn đề khác (nếu có) trong quá trình thực tập.<br/>
                        <i>4.2. To handle The Intern without being honest in the performance; violating The Host Institution’s regulations; and other arising issues (if any) during internship.</i>
                      </Typography>
                    </li> 
                  </ul>
    
                  {/* Dieu 6*/}
                  <Typography variant='p' display='block' style={{marginTop: '16px'}} paragraph><b>Điều 6. Sửa đổi và chấm dứt thỏa thuận <br/>
                    <i>Article 6. Modification and Termination </i></b>
                  </Typography>
                  <Typography variant='p'><b>6.1. Sửa đổi thỏa thuận thực tập <br/>
                    <i>6.1. Modification</i></b>
                  </Typography>
                  <ul style={{listStyle: 'none', padding: 0, marginTop: 0}}>
                    <li>
                      <Typography variant='p' paragraph>Những trường hợp phát sinh chưa được quy định trong Thỏa thuận này sẽ được các bên thống nhất sửa đổi, bổ sung bằng văn bản (Phụ lục 4). Các Biên bản sửa đổi thỏa thuận thực tập được coi là phụ lục không thể tách rời của Thỏa thuận này.<br/>
                        <i>Any arising matters which are not regulated within this agreement must be agreed for supplement, modification by mutual parties in writing (Annex 4). The modification agreements are considered as inseparable parts of this Agreement.</i>
                      </Typography>
                    </li>
                  </ul>
    
                  <Typography variant='p' display='block'><b>6.2. Chấm dứt thỏa thuận thực tập <br/>
                    <i>6.2. Termination</i></b>
                  </Typography>
                  <Typography variant='p'>a. Thỏa thuận thực tập có thể được chấm dứt trong bởi một trong ba bên:<br/>
                    <i>In specific cases, the agreement can be terminated by one of three parties:</i>
                  </Typography>
                  <ul style={{listStyle: 'none', padding: 0, marginTop: 0}}>
                    <li>
                      <Typography variant='p' >- Đơn vị tiếp nhận: Nếu Thực tập sinh không hoàn thành nhiệm vụ được giao, Đơn vị tiếp nhận có thể chấm dứt thỏa thuận sau khi thảo luận với Giảng viên hướng dẫn của Trường và thông báo bằng văn bản cho Trường.<br/>
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
                    <Typography variant='p' >- Trường: Khi Đơn vị tiếp nhận không đảm bảo trách nhiệm quy định tại Thỏa thuận này, Trường có thể thông báo chấm dứt Thỏa thuận thực tập.<br/>
                      <i>The USTH: when the Host Institution does not fulfill the obligations described in this Agreement, the USTH can terminate the Internship Agreement by written notice after discussion with the Host Institution. </i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>- Thực tập sinh: Thực tập sinh có thể đề xuất bằng văn bản với Trường về việc chấm dứt Thỏa thuận thực tập nếu Đơn vị thực tập không đảm bảo mục tiêu thực tập. <br/>
                      <i>The Intern can propose to terminate the internship agreement by sending a written request to the USTH if the objectives of the internship cannot be accomplished at the Host Institution. </i>
                    </Typography>
                  </li>
                </ul>
                <Typography variant='p'>b. Việc chấm dứt sẽ được thực hiện bằng việc ký kết Biên bản chấm dứt thỏa thuận thực tập (chi tiết tại Phụ lục 5).<br/>
                  <i>The termination will be agreed by an Internship Termination in written (detailed as Annex 5)</i>
                </Typography>
    
                {/* Dieu 7*/}
                <Typography variant='p' display='block' style={{marginTop: '16px'}}><b>Điều 7. Điều khoản chung<br/>
                  <i>Article 7. Miscellaneous</i></b>
                </Typography>
                <ul style={{listStyle: 'none', padding: 0, marginTop: 0}}>
                  <li>
                    <Typography variant='p' paragraph>Các bên cam kết thực hiện đúng các điều khoản quy định tại Thỏa thuận này.<br/>
                      <i>Whole terms and regulations within this agreement are committed to implement fully and exactly by all parties.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>Thỏa thuận này có hiệu lực kể từ ngày ký.<br/>
                      <i>This agreement comes into effect from the date of signing.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' paragraph>Thỏa thuận này được lập thành 05 bản, có giá trị pháp lý như nhau, Trường giữ 03 bản, Thực tập sinh giữ 01 bản, Đơn vị tiếp nhận giữ bản.<br/>
                      <i>This Agreement is made into 5 copies with the same legitimacy, in which the USTH will keep 03 copies, the Intern will keep 01 copy and the host institution will keep 01 copies.</i>
                    </Typography>
                  </li>
                </ul>
    
                <table className={`${classes.annex4signatureTable}`}>
                  <tr>
                    <td colspan="2">ĐẠI DIỆN BÊN B <br/> Party B</td>
                    <td>ĐẠI DIỆN BÊN C <br/> Party C</td>
                    <td colspan="2">ĐẠI DIỆN BÊN A <br/> Party A</td>
                  </tr>
                  <tr>
                    <td>Đại diện công ty <br/> Host organisation</td>
                    <td>Người hướng dẫn  <br/> External Supervisor</td>
                    <td>Thực tập sinh <br/> The intern</td>
                    <td>GVHD<br/>Internal Supervisor</td>
                    <td>Trường ĐHKHCNHN<br/>The USTH</td>
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
