import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Actions
// ------------------------------------
export const userLoad = createAction('USER_LOAD')

export const actions = {
  userLoad
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const INITIAL_STATE = {
  favorites: [],
  loggedInUser: {}
}
export default handleActions({
  USER_LOAD: (state, action) => {
    return Object.assign({}, state, { loggedInUser: action.payload })
  }
}, INITIAL_STATE)
