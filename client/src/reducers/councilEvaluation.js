import { GET_EVALUATION, UPDATE_EVALUATION } from "../setting/constants/actionTypes";

const councilEvaluation = (evaluation = {}, action) => {
  switch (action.type) {
    case GET_EVALUATION:
      return action.payload
    case UPDATE_EVALUATION:
      return action.payload;
    default:
      return evaluation;
  }
}

export default councilEvaluation;