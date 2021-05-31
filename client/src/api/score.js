import API from './index'

export const getScoreList = () => API.get(`/score`)
export const getSupervisorScoreList = (supervisorEmail) => API.post(`/score`, supervisorEmail)
export const createScore = (studentID) => API.get(`/score/${studentID}`)
export const updateScore = (studentID, score) => API.post(`/score/${studentID}`, score)
export const getEvaluation = (studentID) => API.get(`score/council/${studentID}`)
export const updateEvaluation = (studentID, updateData) => API.post(`/score/council/${studentID}`, updateData)