import { combineReducers } from 'redux'

import auth from './auth'
import drawerToggler from './drawer'

export default combineReducers({
  auth, drawerToggler
})