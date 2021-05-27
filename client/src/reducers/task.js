import { CREATE_TASK_CARD, CREATE_TASK_LIST, GET_TASK } from "../constants/actionTypes";

const task = (task = {}, action) => {
  switch (action.type) {
    case GET_TASK:
      return action.payload
    case CREATE_TASK_LIST:
      return action.payload
    case CREATE_TASK_CARD:
      return action.payload
    default:
      return task;
  }
}

export default task;