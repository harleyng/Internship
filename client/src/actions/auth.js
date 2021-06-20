import { AUTH, GET_PROFILE } from '../setting/constants/actionTypes';
import * as api from '../api/auth';
import { getProfile } from '../api/student';
import { OPPORTUNITIES_PAGE, STUDENTS_PAGE } from '../setting/constants/pages';
import axios from 'axios';


export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    if (data.token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
    
    switch (data.result.role) {
      case 'student':
        history.push(`/${OPPORTUNITIES_PAGE}`);

        const profile = await getProfile({ userID: data.result._id });
        localStorage.setItem('student', profile.data.studentID)
        
        dispatch({ type: GET_PROFILE, payload: profile.data });
        break;
      case 'supervisor':
        history.push(`/${STUDENTS_PAGE}/internship`);
        break;
      default:
        history.push('/');
    }
  } catch (error) {
    console.log(error);
  }
}

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData)

    dispatch({ type: AUTH, data });
    
    const user = JSON.parse(localStorage.getItem('profile'))
    console.log(user)
    if (user.result.role === 'student') {
      history.push('/students/new')
    } else {
      history.push('/');
    }
  } catch (error) {
    console.log(error);
  }
}