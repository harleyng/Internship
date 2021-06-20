import { GET_OPPORTUNITIES, UPDATE_OPPORTUNITY, DELETE_OPPORTUNITY } from '../setting/constants/actionTypes'; 
import * as api from '../api/opportunity';

export const deleteOpportunity = (opportunityID) => async (dispatch) => {
	try {
		const { data } = await api.deleteOpportunity(opportunityID);

    dispatch({ type: DELETE_OPPORTUNITY, payload: data });
	} catch (error) {
		console.log(error)
	}
}