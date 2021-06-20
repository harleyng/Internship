import React from 'react'
import { Description, Group, Work } from '@material-ui/icons'
import { DOCUMENTS_PAGE, STUDENTS_PAGE, OPPORTUNITIES_PAGE } from '../../setting/constants/pages'
import HomeButton from './HomeButton'

const StaffView = () => {
  return (
    <div className='home-view'>
      {/* Opportunity */}
      <HomeButton 
        icon={<Work/>} 
        path={`/${OPPORTUNITIES_PAGE}`} 
        title='Internship Opportunities'  
      />

      {/* Student */}
      <HomeButton 
        icon={<Group/>} 
        path={`${STUDENTS_PAGE}`} 
        title='Student'  
      />

      {/* Document */}
      <HomeButton 
        icon={<Description/>} 
        path={`${DOCUMENTS_PAGE}`} 
        title='Document'  
      />
  </div>
  )
}

export default StaffView
