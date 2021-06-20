import API from './index'

export const getOpportunities = (pageSize, pageNumber) => {
	var params = '';
	if (pageSize) params += `pageSize=${pageSize}`;
	if (pageNumber) params += `&pageNumber=${pageNumber}`;

	return API.get(`/opportunity?${params}`);
};
export const getOpportunity = (opportunityID) => API.get(`/opportunity/${opportunityID}/detail`);
export const createOpportunity = (opportunity) => API.post(`/opportunity/create`, opportunity);
export const updateOpportunity = (opportunityID, opportunity) => API.put(`/opportunity/${opportunityID}/update`, opportunity);
export const deleteOpportunity = (opportunityID) => API.delete(`/opportunity/${opportunityID}/delete`);
