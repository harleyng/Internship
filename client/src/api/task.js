import API from './index'

export const createTask = (taskID) => API.get(`/logbook/task/create/${taskID}`)
export const getTask = (taskID) => API.get(`/logbook/task/${taskID}`)
export const createTaskList = (taskID, title) => API.post(`/logbook/task/${taskID}/list/create`, title)
export const createTaskCard = (taskID, listID, title) => API.post(`/logbook/task/${taskID}/list/${listID}/card/create`, title)
export const updateTaskCard = (taskID, listID, cardData) => API.patch(`/logbook/task/${taskID}/list/${listID}/card/update`, cardData)
export const deleteTaskCard = (taskID, listID, cardData) => API.patch(`/logbook/task/${taskID}/list/${listID}/card/delete`, cardData)
export const sort = (sortData) => API.put(`/logbook/task/sort`, sortData)