import { GET_SCORE_LIST, CREATE_SCORE, UPDATE_SCORE } from '../constants/actionTypes';
import * as api from '../api/score';

export const getScoreList = () => async (dispatch) => {
  try {
    const { data } = await api.getScoreList();

    dispatch({ type: GET_SCORE_LIST, payload: data });
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

export const updateScore = (id, score) => async (dispatch) => {
  try {
    const { data } = await api.updateScore(id, score);

    dispatch({type: UPDATE_SCORE, payload: data});
  } catch (error) {
    console.log(error)
  }
}
