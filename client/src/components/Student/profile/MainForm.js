import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import BasicInformation from '../../../containers/Student/ProfileEditor/MainForm/BasicInformation'
import Internship from '../../../containers/Student/ProfileEditor/MainForm/Internship';
import Supervisor from '../../../containers/Student/ProfileEditor/MainForm/Supervisor';
import Topic from '../../../containers/Student/ProfileEditor/MainForm/Topic';

const MainForm = ({ handleClick, handleChange, handleDateChange, formData, setFormData }) => {
  const profile = useSelector(state => state.studentProfile)
  useEffect(() => {
    setFormData(profile);
    
  }, [profile])
  return (
    <form>
      <BasicInformation handleChange={handleChange} handleDateChange={handleDateChange} handleClick={handleClick} formData={formData} />
      <Supervisor handleChange={handleChange} handleDateChange={handleDateChange} handleClick={handleClick} formData={formData} />
      <Topic handleChange={handleChange} handleClick={handleClick} formData={formData} />
      <Internship handleChange={handleChange} handleDateChange={handleDateChange} handleClick={handleClick} formData={formData} />
    </form>
  )
} 

export default MainForm
