import API from './index'

export const createPlan = (studentID) => API.get(`/logbook/plan/create/${studentID}`)
export const getPlan = (studentID) => API.get(`/logbook/plan/${studentID}`)
export const createPlanPeriod = (studentID, uid, periodData) => API.post(`/logbook/plan/period/create/${studentID}/${uid}`, periodData)
export const updatePlanPeriod = (studentID, periodData) => API.patch(`/logbook/plan/period/update/${studentID}`, periodData)
export const deletePlanPeriod = (studentID, taskID) => API.put(`/logbook/plan/period/delete/${studentID}/${taskID}`)