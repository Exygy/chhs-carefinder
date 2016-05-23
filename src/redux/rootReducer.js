import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import facilities from './modules/facilities'
import user from './modules/user'

export default combineReducers({
  facilities,
  user,
  router
})
