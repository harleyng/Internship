import { GET_PROFILE, UPDATE_PROFILE, CREATE_STUDENT, GET_STUDENT_LIST, GET_STUDENT_USER } from '../constants/actionTypes';
import * as api from '../api/student';

export const createStudent = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.createStudent(formData);

    dispatch({ type: CREATE_STUDENT, payload: data });
    history.push('/');
  } catch (error) {
    console.log(error);
  } 
}

export const getStudentList =  () => async (dispatch) => {
  try {
    const { data } = await api.getStudentList();

    dispatch({ type: GET_STUDENT_LIST, payload: data });
  } catch (error) {
    console.log(error);
  } 
}

export const getStudentUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.getStudentUser(id);

    dispatch({ type: GET_STUDENT_USER, payload: data });

  } catch (error) {
    console.log(error);
  }
}

export const getProfile = (id) => async (dispatch) => {
  try {
    const { data } = await api.getProfile(id);

    dispatch({ type: GET_PROFILE, payload: data });

  } catch (error) {
    console.log(error);
  }
}

export const updateProfile = (formData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(formData);
    dispatch({ type: UPDATE_PROFILE, payload: data });

  } catch (error) {
    console.log(error);
  }
}
