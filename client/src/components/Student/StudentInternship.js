import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import StudentsDataGrid from './StudentDataGrid/StudentsDataGrid';

import { getStudentList, getSupervisorStudentList } from '../../actions/student'
import StudentList from './StudentList/StudentList';

const StudentInternship = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if (user?.result?.role === 'supervisor') {
      const supervisorEmail = {email: user.result.email}
      dispatch(getSupervisorStudentList(supervisorEmail));
    } else {
      dispatch(getStudentList('Approved'));
    }
  }, [dispatch])

  return (
    <StudentList />
  );
}

export default StudentInternship

