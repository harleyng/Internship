import React, { useState } from 'react'
import BasicInformation from '../../../containers/Student/ProfileEditor/MainForm/BasicInformation'
import Internship from '../../../containers/Student/ProfileEditor/MainForm/Internship';
import Supervisor from '../../../containers/Student/ProfileEditor/MainForm/Supervisor';
import Topic from '../../../containers/Student/ProfileEditor/MainForm/Topic';

const initialState = { department: '', internal: true}
const MainForm = () => {
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    if (e.target?.name == "internal") {
      setFormData({ ...formData, ['internal']: !formData.internal})
    } else if (e.target) {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    } 
    console.log(formData)
  }

  const handleDateChange = (date, name) => {
    setFormData({ ...formData, [name]: date })
    console.log(formData)
  }

  return (
    <form>
      <BasicInformation handleChange={handleChange} handleDateChange={handleDateChange} DOB={formData.DOB} />
      <Supervisor handleChange={handleChange} handleDateChange={handleDateChange} externalSupervisor={!formData.internal} supervisorDOB={formData.supervisorDOB} />
      <Topic handleChange={handleChange} />
      <Internship handleChange={handleChange} handleDateChange={handleDateChange} startTime={formData.startTime} endTime={formData.endTime}/>
    </form>
  )
}

export default MainForm
