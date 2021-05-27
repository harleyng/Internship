import React, { useEffect } from 'react' 
import { Grid, Typography, CircularProgress, Paper, Button, Box } from '@material-ui/core'

import useStyles from './styles'
import { annex5_EN, annex5_VN, 
         document_header_1_EN, document_header_1_VN, 
         document_header_2_EN, document_header_2_VN 
        } from '../../constants/document'

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
                    <Typography variant='p' display="block" paragraph><b>Cam kết</b> này được lập và có hiệu lực từ ngày {today}, bởi các bên:<br/>
                      <i>This Commitment is made and takes effect from dated {today}, by following parties:</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block"><b>{profile.internship.host}</b>, doanh nghiệp được đại diện bởi Ông/Bà <Box component='span' m={8} />, chức vụ: <Box component='span' m={8} />, có trụ sở chính tại {profile.internship.location} (Sau đây gọi tắt là <b>“Đơn vị tiếp nhận”</b>) <br/>
                      <i>{profile.internship.host}, represented by Mr/Ms <Box component='span' m={8} />, Title: <Box component='span' m={8} />, located at {profile.internship.location}. (Hereafter referred as “the Host Institution”)</i>
                    </Typography>
                  </li>
                  <li><Typography variant='p' display="block"><b>VÀ/<i>AND</i></b></Typography> </li>
                  <li>
                    <Typography variant='p' display="block" paragraph><b>TRƯỜNG ĐẠI HỌC KHOA HỌC VÀ CÔNG NGHỆ HÀ NỘI</b>, trường đại học công lập được đại diện bởi Ông/Bà <Box component='span' m={8} />, chức vụ: <Box component='span' m={8} />; có trụ sở chính tại Tòa nhà A21, số 18 Hoàng Quốc Việt, Cầu Giấy, Hà Nội (Sau đây gọi tắt là <b>“Trường"</b>)<br/>
                      <i>UNIVERSITY OF SCIENCE AND TECHNOLOGY OF HANOI, a public university, represented by Mr/Ms <Box component='span' m={8} />, title: <Box component='span' m={8} />.; headquarters located at Building A21, No.18 Hoang Quoc Viet, Cau Giay, Ha Noi.(Hereafter referred as “the USTH”)</i>
                    </Typography>
                  </li>
                </ul>
                
                {/* Legal Base */}
                <Typography variant='p' display="block"><b>CĂN CỨ PHÁP LÝ<br/><i>LEGAL BASES</i></b></Typography>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>
                    <Typography variant='p' display="block" paragraph>Thỏa thuận thực tập ký kết giữa Trường Đại học Khoa học và Công nghệ Hà Nội, Đơn vị tiếp nhận và Thực tập sinh {profile.fullName} vào ngày {today};<br/>
                      <i>Internship Agreement signed mutually by the USTH, the Host Institution and the Intern {profile.fullName} on {today}.</i>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='p' display="block" >Theo yêu cầu của Đơn vị tiếp nhận, các Bên cam kết thực hiện các điều khoản như sau:<br/>
                      <i>At the requirement of the Host Institution on information confidentiality, two parties agree to implement the following terms:</i>
                    </Typography>
                  </li>
                  <li><Typography variant='p' display="block"><b>Điều 1. </b> Đơn vị tiếp nhận cho phép Thực tập sinh có thể sử dụng các thông tin bảo mật mà Thực tập sinh được tiếp cận trong quá trình thực tập cho các mục tiêu học tập và bảo vệ luận văn.<br/>
                    <i>Article 1. The Host Institution allows the Intern using confidential information which is accessed during the internship for objectives of learning, thesis defense presentation.</i></Typography> 
                  </li>
                  <li><Typography variant='p' display="block"><b>Điều 2. </b> Trường cam kết sẽ chỉ sử dụng những thông tin bảo mật nêu trên cho mục đích đánh giá kết quả thực tập của thực tập sinh, sẽ không cung cấp hay tiết lộ bất cứ thông tin bảo mật nào cho một bên thứ ba nào khác mà không có sự đồng ý bằng văn bản của Đơn vị tiếp nhận. <br/>
                    <i>Article 2. The USTH assures that the above confidential information is used to evaluate the Internship Report only and will not be shared with any parties without permission of the Host Institution in writing.</i></Typography> 
                  </li>
                  <li><Typography variant='p' display="block"><b>Điều 3. </b> Biên bản cam kết này được lập thành 02 (hai) bản song ngữ tiếng Anh và tiếng Việt có giá trị pháp lý như nhau, mỗi bên giữ 01 (một) bản gốc và có hiệu lực kể từ ngày ký<br/>
                    <i>Article 3. This Commitment is made into 02 copies (two) in English and Vietnamese with the same legitimacy, each party keeps 01 original copy. This Commitment takes effect from signing date</i></Typography> 
                  </li> 
                </ul>
                <table className={classes.annex5signatureTable}>
                  <colgroup>
                    <col width='30%' />
                    <col width='30%' />
                  </colgroup>
                  <tr>
                    <td>ĐƠN VỊ TIẾP NHẬN <br/> THE HOST INSTITUTION</td>
                    <td>TRƯỜNG ĐẠI HỌC KHOA HỌC VÀ CÔNG NGHỆ HÀ NỘI<br/> THE USTH</td>
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
