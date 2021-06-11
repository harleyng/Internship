import { CREATE_TASK, GET_TASK, CREATE_TASK_LIST, CREATE_TASK_CARD, UPDATE_TASK_CARD, DELETE_TASK_CARD, DRAG_HAPPENED } from '../setting/constants/actionTypes';
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

export const updateTaskCard = (studentID, taskID, listID, cardData) => async (dispatch) => {
  try {
    const { data } = await api.updateTaskCard(studentID, taskID, listID, cardData);

    dispatch({ type: UPDATE_TASK_CARD, payload: data})
  } catch (error) {
    console.log(error)
  }
}

export const deleteTaskCard = (taskID, listID, cardData) => async (dispatch) => {
  try {
    const { data } = await api.deleteTaskCard(taskID, listID, cardData);

    dispatch({ type: DELETE_TASK_CARD, payload: data})
  } catch (error) {
    console.log(error)
  }
}

export const sort = (sortData) => async (dispatch) => {
  dispatch({ type: DRAG_HAPPENED,payload: sortData})

  await api.sort(sortData)
}