import API from './index'

export const createDocumentModel = (studentID) => API.get(`/document/createDocumentModel/${studentID}`);
export const createDocument = (documentData) => API.post(`/document/createDocument`, documentData);
export const fetchDocuments = () => API.get('/document');
export const updateDocument = (documentData) => API.put('/document/updateDocument', documentData);