import { GET_SCORE_LIST, CREATE_SCORE, UPDATE_SCORE, GET_SUPERVISOR_SCORE_LIST } from "../constants/actionTypes";

const studentScore = (score = [], action) => {
  switch (action.type) {
    case GET_SCORE_LIST:
      return action.payload
    case GET_SUPERVISOR_SCORE_LIST:
      return action.payload
    case CREATE_SCORE:
      return [...score, action.payload]
    case UPDATE_SCORE:
      return score.map((s) => s._id === action.payload._id ? action.payload : s);
    default:
      return score;
  }
}

export default studentScore;