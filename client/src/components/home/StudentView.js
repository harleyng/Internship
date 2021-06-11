import React, { useEffect } from "react";
import { Book, Person } from "@material-ui/icons";
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { STUDENTS_PAGE } from '../../setting/constants/pages'
import { getProfile } from '../../actions/student';
import HomeButton from "./HomeButton";

const StudentView = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.studentProfile);
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (user?.result?.role === 'student') {
      dispatch(getProfile({userID: user?.result._id}));
    }
  }, [location])

  const accessProfile = () => {
    if (profile) {
      return `/${STUDENTS_PAGE}/${profile?.studentID}`;
    }
  };

  const accessLogbook = () => {
    if (profile) {
      return `/${STUDENTS_PAGE}/${profile?.studentID}/logbook`;
    }
  };
  return (
    <div className='home-view'>
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
