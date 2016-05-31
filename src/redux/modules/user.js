import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Actions
// ------------------------------------
export const userLoad = createAction('USER_LOAD')
export const login = () => {
  return (dispatch, getState) => {
    dispatch(userLoad({firstName: 'Matt', lastName: 'Matty'}))
  }
}

export const actions = {
  userLoad,
  login
}

// ------------------------------------
// Action Handlers
// ------------------------------------

/*
loggedInUser example: {
  firstName: 'Matt',
  lastName: 'Luedke'
}
*/

const INITIAL_STATE = {
  favorites: [],
  loggedInUser: {}
}
export default handleActions({
  USER_LOAD: (state, action) => {
    return Object.assign({}, state, { loggedInUser: action.payload })
  }
}, INITIAL_STATE)
