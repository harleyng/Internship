import { CREATE_DOCUMENT_MODEL, GET_DOCUMENTS ,CREATE_DOCUMENT, UPDATE_DOCUMENT } from "../setting/constants/actionTypes";

const documents = (documents = [], action) => {
  switch (action.type) {
    case GET_DOCUMENTS:
      return action.payload;
    case CREATE_DOCUMENT_MODEL:
      return [...documents, action.payload]
    case CREATE_DOCUMENT:
      return action.payload;
    case UPDATE_DOCUMENT:
      return action.payload;
    default:
      return documents;
  }
}

export default documents;