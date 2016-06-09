import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import facilities from './modules/facilities'
import messages from './modules/messages'
import user from './modules/user'
import menu from './modules/menu'

export default combineReducers({
  facilities,
  messages,
  user,
  menu,
  router
})
