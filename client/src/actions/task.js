import { CREATE_TASK, GET_TASK, CREATE_TASK_LIST, CREATE_TASK_CARD } from '../constants/actionTypes';
import * as api from '../api/task';

export const createTask = (taskID) => async (dispatch) => {
  try {
    const { data } = await api.createTask(taskID);

    dispatch({ type: CREATE_TASK, payload: data });
  } catch (error) {
    console.log(error);
  } 
}

export const getTask = (taskID) => async (dispatch) => {
  try {
    const { data } = await api.getTask(taskID);

    dispatch({ type: GET_TASK, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createTaskList = (taskID, title) => async (dispatch) => {
  try {
    const { data } = await api.createTaskList(taskID, title);

    dispatch({ type: CREATE_TASK_LIST, payload: data})
  } catch (error) {
    console.log(error)
  }
}

export const createTaskCard = (taskID, listID, title) => async (dispatch) => {
  try {
    const { data } = await api.createTaskCard(taskID, listID, title);

    dispatch({ type: CREATE_TASK_CARD, payload: data})
  } catch (error) {
    console.log(error)
  }
}