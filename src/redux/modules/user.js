import { createAction, handleActions } from 'redux-actions'
import { getConversationStubs } from 'redux/modules/messages'

// ------------------------------------
// Actions
// ------------------------------------
export const userLoad = createAction('USER_LOAD')
export const login = () => {
  return (dispatch, getState) => {
    dispatch(userLoad({id: 100, firstName: 'Matt', lastName: 'Matty'}))
    dispatch(getConversationStubs())
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
