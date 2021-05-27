import { CREATE_PLAN, CREATE_PLAN_PERIOD, GET_PLAN } from '../constants/actionTypes';
import * as api from '../api/plan';

export const createPlan = (studentID) => async (dispatch) => {
  try {
    const { data } = await api.createPlan(studentID);

    dispatch({ type: CREATE_PLAN, payload: data });
  } catch (error) {
    console.log(error);
  } 
}

export const getPlan = (studentID) => async (dispatch) => {
  try {
    const { data } = await api.getPlan(studentID);

    dispatch({ type: GET_PLAN, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createPlanPeriod = (studentID, uid, periodData) => async (dispatch) => {
  try {
    const { data } = await api.createPlanPeriod(studentID, uid, periodData);

    dispatch({ type: CREATE_PLAN_PERIOD, payload: data });
  } catch (error) {
    console.log(error);
  } 
}