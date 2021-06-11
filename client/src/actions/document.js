import { GET_DOCUMENTS, CREATE_DOCUMENT_MODEL, CREATE_DOCUMENT, UPDATE_DOCUMENT } from '../setting/constants/actionTypes'; 
import * as api from '../api/document';

export const createDocumentModel = (studentID) => async (dispatch) => {
  try {
    const { data } = await api.createDocumentModel(studentID);

    dispatch({ type: CREATE_DOCUMENT_MODEL, payload: data });
  } catch (error) {
    console.log(error);
  } 
}

export const createDocument = (documentData) => async (dispatch) => {
  try {
    const { data } = await api.createDocument(documentData);

    dispatch({ type: CREATE_DOCUMENT, payload: data });
  } catch (error) {
    console.log(error);
  } 
}

export const getDocuments = () => async (dispatch) => {
  try {
    const { data } = await api.fetchDocuments();

    dispatch({ type: GET_DOCUMENTS, payload: data });
  } catch (error) {
    console.log(error);
  } 
}

export const updateDocument = (documentData) => async (dispatch) => {
  try {
    const { data } = await api.updateDocument(documentData);

    dispatch({type: UPDATE_DOCUMENT, payload: data});
  } catch (error) {
    console.log(error)
  }
}

