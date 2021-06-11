import React from 'react'
import { Group, RateReview } from '@material-ui/icons'
import { STUDENTS_PAGE } from '../../setting/constants/pages'
import HomeButton from './HomeButton'

const SupervisorView = () => {
  return (
    <div className='home-view'>
      {/* Student Internship List */}
      <HomeButton 
        icon={<Group/>} 
        path={`${STUDENTS_PAGE}/internship`} 
        title='Student'  
      />

      {/* Evaluation */}
      <HomeButton 
        icon={<RateReview/>} 
        path={`${STUDENTS_PAGE}/score`} 
        title='Evaluation'  
      />
    </div>
  )
}

export default SupervisorView
