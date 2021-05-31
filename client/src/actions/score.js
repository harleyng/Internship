import { GET_SCORE_LIST, CREATE_SCORE, UPDATE_SCORE, UPDATE_EVALUATION, GET_EVALUATION, GET_SUPERVISOR_SCORE_LIST } from '../constants/actionTypes';
import * as api from '../api/score';

export const getScoreList = () => async (dispatch) => {
  try {
    const { data } = await api.getScoreList();

    dispatch({ type: GET_SCORE_LIST, payload: data });
  } catch (error) {
    console.log(error);
  } 
}

export const getSupervisorScoreList = (supervisorEmail) => async (dispatch) => {
  console.log(supervisorEmail)
  try {
    const { data } = await api.getSupervisorScoreList(supervisorEmail);

    dispatch({ type: GET_SUPERVISOR_SCORE_LIST, payload: data });
  } catch (error) {
    console.log(error);
  } 
}

export const createScore = (studentID) => async (dispatch) => {
  try {
    const { data } = await api.createScore(studentID);

    dispatch({ type: CREATE_SCORE, payload: data });
  } catch (error) {
    console.log(error);
  } 
}

export const updateScore = (studentID, score) => async (dispatch) => {
  console.log(score)
  try {
    const { data } = await api.updateScore(studentID, score);

    dispatch({type: UPDATE_SCORE, payload: data});
  } catch (error) {
    console.log(error)
  }
}

export const updateEvaluation = (studentID, updateData) => async (dispatch) => {
  console.log(updateData)
  try {
    const { data } = await api.updateEvaluation(studentID, updateData);

    dispatch({type: UPDATE_EVALUATION, payload: data});
  } catch (error) {
    console.log(error)
  }
}

export const getEvaluation = (studentID) => async (dispatch) => {
  try {
    const { data } = await api.getEvaluation(studentID);

    dispatch({ type: GET_EVALUATION, payload: data });

  } catch (error) {
    console.log(error);
  }
}