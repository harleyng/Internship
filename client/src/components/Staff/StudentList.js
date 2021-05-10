import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import StudentsDataGrid from '../Student/studentDataGrid/StudentsDataGrid';

import { getStudentList } from '../../actions/student'

const StudentList = () => {
  const dispatch = useDispatch();
  const hide = ['internship_topicStatus', 'internship_updatedAt']

  useEffect(() => {
    dispatch(getStudentList());

  }, [dispatch])

  return (
    <div>
      {/* Basic Information */}
      <StudentsDataGrid hide={hide} role='staff' staffToolBar/>
    </div>
  );
}

export default StudentList

