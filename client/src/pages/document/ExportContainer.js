import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getProfile } from '../../actions/student';
import ExportDocuments from '../../components/document/export/ExportDocuments'

const ExportContainer = (props) => {
  const dispatch = useDispatch();
  const studentID = props.match.params.studentID;

  useEffect(() => {
    dispatch(getProfile({studentID: studentID}));
  }, [dispatch])
  return (
    <div>
      <ExportDocuments />
    </div>
  )
}

export default ExportContainer
