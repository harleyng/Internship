import API from './index'

// Profile
export const getProfile = (id) => API.post(`/student/getProfile`, id);
export const updateProfile = (updatedData) => API.patch('/student/updateProfile', updatedData);

// Student
export const getStudentUser = (userID) => API.get(`/student/user/${userID}`);
export const getStudentList = (filter = undefined, department = undefined) => {
	let params = "";

	if (filter) params += "status=" + filter;
	if (department) params +="&department=" + department; 

	return API.get(`/student?${params}`)
};
export const getSupervisorStudentList = (supervisorEmail) => API.post(`/student`, supervisorEmail)
export const createStudent = (formData) => API.post(`/student/new`, formData);