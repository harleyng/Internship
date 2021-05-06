import { combineReducers } from 'redux'

import auth from './auth'
import drawerToggler from './drawer'
import students from './students'
import studentProfile from './studentProfile'

export default combineReducers({
  auth, drawerToggler, students, studentProfile
})