import _ from 'utils/lodash'
import { createAction, handleActions } from 'redux-actions'
// ------------------------------------
// Actions
// ------------------------------------
export const toggleMenu = createAction('TOGGLE_MENU')
export const actions = {
  toggleMenu
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const INITIAL_STATE = {
  menuClass: 'toggle-menu'
}
export default handleActions({
  TOGGLE_MENU: (state, action) => {
    var menuClassName = 'toggle-menu'
    if (action.payload !== 'close' && !_.includes(state.menuClass, 'show-menu')) {
      menuClassName += ' show-menu'
    }
    return Object.assign({}, state, { menuClass: menuClassName })
  }
}, INITIAL_STATE)
