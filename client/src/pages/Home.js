import React from 'react'
import LecturerView from '../components/home/LecturerView'
import StaffView from '../components/home/StaffView'
import StudentView from '../components/home/StudentView'
import SupervisorView from '../components/home/SupervisorView'
import CouncilView from '../components/home/CouncilView'

const Home = () => {
  const user = JSON.parse(localStorage.getItem('profile'))

  switch (user.result?.role) {
    case 'student':
      return <StudentView />
    case 'staff':
      return <StaffView />
    case 'lecturer':
      return <LecturerView />
    case 'supervisor':
      return <SupervisorView />
    case 'council':
      return <CouncilView />
  }
}

export default Home
