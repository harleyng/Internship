import { AUTH } from '../constants/actionTypes';
import * as api from '../api/auth';


export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
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
      history.push('/student/new')
    } else {
      history.push('/');
    }
  } catch (error) {
    console.log(error);
  }
}