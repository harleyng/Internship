import { GET_OPPORTUNITIES, CREATE_OPPORTUNITY, UPDATE_OPPORTUNITY, DELETE_OPPORTUNITY } from "../setting/constants/actionTypes"

const opportunity = (data = {}, action) => {
  switch (action.type) {
    case GET_OPPORTUNITIES:
      return action.payload;
		case CREATE_OPPORTUNITY:
			return {...data, 'opportunities': [...data.opportunities, action.payload.opportunity]};
		case UPDATE_OPPORTUNITY:
			return {...data, 'opportunities': data.opportunities.map(opportunity => opportunity._id === action.payload.opportunity._id ? action.payload.opportunity : opportunity)};
		case DELETE_OPPORTUNITY:
			return {...data, 'opportunities': data.opportunities.filter(opportunity => opportunity._id !== action.payload.opportunity._id)};
    default:
      return data;
  }
} 

export default opportunity;