import React from 'react'
import { RateReview } from '@material-ui/icons'
import { STUDENTS_PAGE } from '../../setting/constants/pages'
import HomeButton from './HomeButton'

const LecturerView = () => {
  return (
    <div className='home-view'>
      {/* Review Topic */}
      <HomeButton 
        icon={<RateReview/>} 
        path={`${STUDENTS_PAGE}/topic`} 
        title='Review Topic'  
      />
    </div>
  )
}

export default LecturerView
