import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import StudentsDataGrid from './studentDataGrid/StudentsDataGrid';

import { getStudentList } from '../../actions/student'

const StudentInternship = () => {
  const dispatch = useDispatch();
  const hide = ['phoneNo', 'DOB', 'academicYear', 'department', 'supervisor_internal','supervisor_fullName','supervisor_email','supervisor_position','supervisor_department','supervisor_phoneNo','supervisor_DOB','supervisor_address', 'supervisor_PITCode', 'supervisor_personalID_No', 'supervisor_personalID_givenDate', 'supervisor_personalID_givenPlace', 'supervisor_bankAccount_No', 'supervisor_bankAccount_bankName', 'supervisor_bankAccount_branch', 'internship_topicStatus', 'internship_updatedAt', 'comment']

  useEffect(() => {
    dispatch(getStudentList());

  }, [dispatch])

  return (
    <div>
      {/* Internship Information */}
      <StudentsDataGrid hide={hide} role='council'/>
    </div>
  );
}

export default StudentInternship

