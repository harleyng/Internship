import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { getScoreList, getSupervisorScoreList } from '../../actions/score'
import ScoreDataGrid from './evaluation/ScoreDataGrid';

const StudentScore = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if (user?.result?.role === 'supervisor') {
      const supervisorEmail = {email: user.result.email}
      dispatch(getSupervisorScoreList(supervisorEmail));
    } else {
      dispatch(getScoreList());
    }
  }, [dispatch])

  return (
    <div>
      <ScoreDataGrid/>
    </div>
  );
}

export default StudentScore

