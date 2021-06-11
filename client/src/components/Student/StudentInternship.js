import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import StudentsDataGrid from './StudentDataGrid/StudentsDataGrid';

import { getStudentList, getSupervisorStudentList } from '../../actions/student'
import StudentList from './StudentList/StudentList';

const StudentInternship = () => {
  const dispatch = useDispatch();
  const hide = ['phoneNo', 'DOB', 'academicYear', 'department', 'supervisor_internal','supervisor_fullName','supervisor_email','supervisor_position','supervisor_department','supervisor_phoneNo','supervisor_DOB','supervisor_address', 'supervisor_PITCode', 'supervisor_personalID_No', 'supervisor_personalID_givenDate', 'supervisor_personalID_givenPlace', 'supervisor_bankAccount_No', 'supervisor_bankAccount_bankName', 'supervisor_bankAccount_branch', 'internship_topicStatus', 'internship_updatedAt', 'comment']
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if (user?.result?.role === 'supervisor') {
      const supervisorEmail = {email: user.result.email}
      dispatch(getSupervisorStudentList(supervisorEmail));
    } else {
      dispatch(getStudentList());
    }
  }, [dispatch])

  return (
    user?.result?.role === 'supervisor' ? (
      <StudentList />
    ) : (
      <div>
        {/* Internship Information */}
        <StudentsDataGrid hide={hide} role={user?.result?.role}/>
      </div>
    )
  );
}

export default StudentInternship

