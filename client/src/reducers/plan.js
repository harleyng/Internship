import { CREATE_PLAN_PERIOD, DELETE_PLAN_PERIOD, GET_PLAN, UPDATE_PLAN_PERIOD } from "../setting/constants/actionTypes";

const plan = (plan = {}, action) => {
  switch (action.type) {
    case GET_PLAN:
      return action.payload
    case CREATE_PLAN_PERIOD:
      return action.payload
    case UPDATE_PLAN_PERIOD:
      return action.payload
    case DELETE_PLAN_PERIOD:
      return action.payload
    default:
      return plan;
  }
}

export default plan;