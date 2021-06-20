import React, { useEffect } from "react";
import { Book, Person, Work } from "@material-ui/icons";

import { OPPORTUNITIES_PAGE, STUDENTS_PAGE } from '../../setting/constants/pages'
import HomeButton from "./HomeButton";

const StudentView = () => {
  const studentID = JSON.parse(localStorage.getItem('student'));

  const accessProfile = () => {
    return `/${STUDENTS_PAGE}/${studentID}`;
  };

  const accessLogbook = () => {
    return `/${STUDENTS_PAGE}/${studentID}/logbook`;
  };
  return (
    <div className='home-view'>
      {/* Opportunity */}
      <HomeButton 
        icon={<Work/>} 
        path={`/${OPPORTUNITIES_PAGE}`} 
        title='Internship Opportunities'  
      />

      {/* Profile */}
      <HomeButton 
        icon={<Person/>} 
        path={accessProfile()} 
        title='Your Profile'  
      />

      {/* Logbook */}
      <HomeButton 
        icon={<Book/>} 
        path={accessLogbook()} 
        title='Logbook'  
      />
    </div>
  );
};

export default StudentView;
