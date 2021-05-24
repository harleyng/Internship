import React, { useEffect } from 'react'
import { Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux'

import DefenseForm from '../../../containers/student/evaluation/DefenseForm';
import ReportForm from '../../../containers/student/evaluation/ReportForm';
import { getProfile } from '../../../actions/student';

const Council = (props) => {
  const dispatch = useDispatch();
  const studentID = props.match.params.studentID;

  useEffect(() => {
    dispatch(getProfile({studentID: studentID}));
  }, [dispatch])

  return (
    <Grid container>
      <Grid item sx={12} lg={6}>
        <DefenseForm />
      </Grid>
      <Grid item sx={12} lg={6}>
        <ReportForm />
      </Grid>
    </Grid>
  )
}

export default Council
