import { GET_PROFILE, UPDATE_PROFILE, CREATE_STUDENT, GET_STUDENT_LIST, GET_STUDENT_USER, GET_SUPERVISOR_STUDENT_LIST } from '../setting/constants/actionTypes';
import * as api from '../api/student';
import { OPPORTUNITIES_PAGE } from '../setting/constants/pages';

export const createStudent = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.createStudent(formData);

    dispatch({ type: CREATE_STUDENT, payload: data });
    history.push(`/${OPPORTUNITIES_PAGE}`);
  } catch (error) {
    console.log(error);
  } 
}

export const getStudentList =  (filter = undefined, department = undefined) => async (dispatch) => {
  try {
    const { data } = await api.getStudentList(filter, department);

    dispatch({ type: GET_STUDENT_LIST, payload: data });
  } catch (error) {
    console.log(error);
  } 
}

export const getSupervisorStudentList =  (supervisorEmail) => async (dispatch) => {
  try {
    const { data } = await api.getSupervisorStudentList(supervisorEmail);

    dispatch({ type: GET_SUPERVISOR_STUDENT_LIST, payload: data });
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
