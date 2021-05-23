import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { getScoreList } from '../../actions/score'
import ScoreDataGrid from './evaluation/ScoreDataGrid';

const StudentScore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getScoreList())
  }, [dispatch])

  return (
    <div>
      <ScoreDataGrid/>
    </div>
  );
}

export default StudentScore

