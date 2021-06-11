import { GET_STUDENT_LIST, CREATE_STUDENT, GET_SUPERVISOR_STUDENT_LIST } from "../setting/constants/actionTypes";

const students = (students = [], action) => {
  switch (action.type) {
    case GET_STUDENT_LIST:
      return action.payload;
    case GET_SUPERVISOR_STUDENT_LIST:
      return action.payload;
    case CREATE_STUDENT:
  return [...students, action.payload]
    default:
      return students;
  }
}

export default students;