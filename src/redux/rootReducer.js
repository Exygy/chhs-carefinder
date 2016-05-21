import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import facilities from './modules/facilities'

export default combineReducers({
  facilities,
  router
})
