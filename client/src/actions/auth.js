import { AUTH } from '../setting/constants/actionTypes';
import * as api from '../api/auth';
import { STUDENTS_PAGE } from '../setting/constants/pages';


export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    console.log(data.result.role)
    switch (data.result.role) {
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