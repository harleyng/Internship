import { GET_STUDENT_LIST, CREATE_STUDENT } from "../constants/actionTypes";

const studentProfile = (students = [], action) => {
  switch (action.type) {
    case GET_STUDENT_LIST:
      return action.payload;
    case CREATE_STUDENT:
  return [...students, action.payload]
    default:
      return students;
  }
}

export default studentProfile;