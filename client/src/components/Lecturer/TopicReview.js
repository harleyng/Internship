import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import StudentsDataGrid from '../student/StudentDataGrid/StudentsDataGrid';

import { getStudentList } from '../../actions/student'

const TopicReview = () => {
  const dispatch = useDispatch();
  const hide = ['studentID', 'fullName', 'phoneNo', 'DOB', 'academicYear', 'department', 'supervisor_internal', 'supervisor_fullName', 'supervisor_email', 'supervisor_position', 'supervisor_deparment', 'supervisor_phoneNo', 'supervisor_address', 'supervisor_DOB', 'supervisor_PITCode', 'supervisor_personalID_No', 'supervisor_personalID_givenDate', 'supervisor_personalID_givenPlace', 'supervisor_bankAccount_bankName', 'supervisor_bankAccount_No', 'supervisor_bankAccount_branch']
  useEffect(() => {
    dispatch(getStudentList());
  }, [dispatch])

  return (
    <div>
      <StudentsDataGrid hide={hide} role='lecturer' />
    </div>
  );
}

export default TopicReview

