import { GET_STUDENT_USER } from "../setting/constants/actionTypes";

const studentUser = (studentUser = [], action) => {
  switch (action.type) {
    case GET_STUDENT_USER:
      return action.payload;
    default:
      return studentUser;
  }
}

export default studentUser;