import API from './index'

export const getScoreList = () => API.get(`/score`)
export const createScore = (studentID) => API.get(`/score/${studentID}`)
export const updateScore = (id, score) => API.post(`/score/${id}`, score)