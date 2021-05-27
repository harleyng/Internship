import { GET_PLAN } from "../constants/actionTypes";

const plan = (plan = {}, action) => {
  switch (action.type) {
    case GET_PLAN:
      return action.payload
    default:
      return plan;
  }
}

export default plan;