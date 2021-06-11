import { CREATE_PLAN, CREATE_PLAN_PERIOD, GET_PLAN, UPDATE_PLAN_PERIOD, DELETE_PLAN_PERIOD } from '../setting/constants/actionTypes';
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

export const updatePlanPeriod = (studentID, periodData) => async (dispatch) => {
  try {
    const { data } = await api.updatePlanPeriod(studentID, periodData);

    dispatch({ type: UPDATE_PLAN_PERIOD, payload: data });
  } catch (error) {
    console.log(error);
  } 
}

export const deletePlanPeriod = (studentID, taskID) => async (dispatch) => {
  try {
    const { data } = await api.deletePlanPeriod(studentID, taskID);

    dispatch({ type: DELETE_PLAN_PERIOD, payload: data });
  } catch (error) {
    console.log(error);
  } 
}