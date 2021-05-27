import API from './index'

export const createTask = (taskID) => API.get(`/logbook/task/create/${taskID}`)
export const getTask = (taskID) => API.get(`/logbook/task/${taskID}`)
export const createTaskList = (taskID, title) => API.post(`/logbook/task/${taskID}/list/create`, title)
export const createTaskCard = (taskID, listID, title) => API.post(`/logbook/task/${taskID}/list/${listID}/card/create`, title)