import { GET_PROFILE, UPDATE_PROFILE } from "../setting/constants/actionTypes"
const studentProfile = (profile = [], action) => {
  switch (action.type) {
    case GET_PROFILE:
      return action.payload
    case UPDATE_PROFILE:
      return action.payload;
    default:
      return profile;
  }
}

export default studentProfile;