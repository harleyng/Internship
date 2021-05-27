import API from './index'

export const createPlan = (studentID) => API.get(`/logbook/plan/create/${studentID}`)
export const getPlan = (studentID) => API.get(`/logbook/plan/${studentID}`)
export const createPlanPeriod = (studentID, uid, periodData) => API.post(`/logbook/plan/period/create/${studentID}/${uid}`, periodData)