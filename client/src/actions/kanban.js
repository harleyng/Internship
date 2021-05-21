import { ADD_LIST, ADD_CARD, DRAG_HAPPENED } from '../constants/actionTypes';
// import * as api from '../api/kanban';

// List actions
export const addList = (title) => async (dispatch) => {
  dispatch({ type: ADD_LIST, payload: title });
}

// Card actions
export const addCard = (listID, text) => async (dispatch) => {
  dispatch({ type: ADD_CARD, payload:  {listID, text}});
}

export const sort = (
  droppableIDStart,
  droppableIDEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableID,
  type
) => async (dispatch) => {
  dispatch({
    type: DRAG_HAPPENED,
    payload: {
      droppableIDStart,
      droppableIDEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableID,
      type 
    }
  })
}