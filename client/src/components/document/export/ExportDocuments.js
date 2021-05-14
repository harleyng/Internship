import React, { useState, useEffect } from 'react'
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux'
import html2pdf from 'html2pdf.js'

import { getStudentUser } from '../../../actions/student';
import useStyles from './styles'
import DocumentSwitch from './DocumentSwitch'
import Annex2 from '../../../containers/document/Annex2';
import Annex3 from '../../../containers/document/Annex3';
import Annex4 from '../../../containers/document/Annex4';
import Annex5 from '../../../containers/document/Annex5';
import Annex6 from '../../../containers/document/Annex6';

const ExportDocuments = (props) => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.studentProfile)
  const [documentMode, setDocumentMode] = useState(() => {
    if (profile.supervisor?.internal === true) {
      return ({
        annex2: true,
        annex3: false,
        annex4: false,
        annex5: false,
        annex6: false })
    } else return ({
        annex2: true,
        annex3: true,
        annex4: true,
        annex5: true,
        annex6: true })
  })

  useEffect(() => {
    if (profile.userID) {
      dispatch(getStudentUser(profile.userID));
    }
  }, [profile])
  
  const download = (id, ht) => {
    const source = document.getElementById(id);
    console.log(source)
    html2pdf(source, {
      filename: `${profile.studentID}-${id}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        useCORS: true,
        letterRendering: true,
        scale: 2,
        height: ht,
      },
      jsPDF: { unit: 'pt', format: "letter", orientation: "portrait"}
    });
  }
  
  const handleChange = (e) => {
    setDocumentMode({ ...documentMode, [e.target.name]: e.target.checked })
  }
  return (
    <Grid container justify='space-around'>
      <Grid item xs={12} sm={4} md={5}>
        <DocumentSwitch documentMode={documentMode} handleChange={handleChange} />
      </Grid>
      <Grid item xs={12} sm={8} md={7}>
        <Annex2 profile={profile} download={download} documentMode={documentMode}/>
        <Annex3 profile={profile} download={download} documentMode={documentMode}/>
        <Annex4 profile={profile} download={download} documentMode={documentMode}/>
        <Annex5 profile={profile} download={download} documentMode={documentMode}/>
        <Annex6 profile={profile} download={download} documentMode={documentMode}/>
      </Grid>
    </Grid>
  )
}

export default ExportDocuments
