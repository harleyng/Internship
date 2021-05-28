import { combineReducers } from 'redux'

import auth from './auth'
import drawerToggler from './drawer'
import students from './students'
import studentProfile from './studentProfile'
import studentUser from "./studentUser";
import documents from './documents'
import studentScore from './studentScore'
import councilEvaluation from './councilEvaluation'
import plan from './plan'
import task from './task'

export default combineReducers({
  auth, // general
  drawerToggler, // CSS
  students, studentProfile, studentUser, // student
  documents, // document
  studentScore, councilEvaluation,  // score
  plan, task, // Plan & task
})