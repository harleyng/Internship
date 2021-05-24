import API from './index'

// Profile
export const getProfile = (id) => API.post(`/student/getProfile`, id);
export const updateProfile = (updatedData) => API.put('/student/updateProfile', updatedData);

// Student
export const getStudentUser = (userID) => API.get(`/student/user/${userID}`);
export const getStudentList = () => API.get(`/student`);
export const createStudent = (formData) => API.post(`/student/new`, formData);