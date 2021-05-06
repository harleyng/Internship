import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import StudentsDataGrid from './Student/StudentsDataGrid';

import { getStudentList } from '../actions/student'

const TopicReview = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getStudentList());
  }, [dispatch])

  return (
    <div>
      <StudentsDataGrid />
    </div>
  );
}

export default TopicReview

