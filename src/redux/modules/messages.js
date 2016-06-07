import _ from 'utils/lodash'
import { createAction, handleActions } from 'redux-actions'
let moment = require('moment')

// ------------------------------------
// Actions
// ------------------------------------
const conversationStubsLoad = createAction('CONVERSATION_STUBS_LOAD')
const messagesLoad = createAction('MESSAGES_LOAD')
const setSelectedConversationStub = createAction('SET_SELECTED_CONVERSATION_STUB')
const selectConversationStub = (selected) => {
  return (dispatch, getState) => {
    dispatch(setSelectedConversationStub(selected))
    var index = _.indexOf(exampleConversationStubs, _.find(exampleConversationStubs, (stub) => stub.id === selected.id))
    exampleConversationStubs.splice(index, 1, Object.assign({}, selected, { unread: false }))
    exampleConversationStubs = exampleConversationStubs.slice()
    dispatch(getConversationStubs())
    dispatch(getMessages())
  }
}

export const getConversationStubs = () => {
  return (dispatch, getState) => {
    dispatch(conversationStubsLoad(exampleConversationStubs))
  }
}
export const getMessages = () => {
  return (dispatch, getState) => {
    switch (getState().messages.selectedConversationStub.id) {
      case 1:
        dispatch(messagesLoad(exampleMessages1))
        break
      case 2:
        dispatch(messagesLoad(exampleMessages2))
        break
      case 3:
        dispatch(messagesLoad(exampleMessages3))
        break
      case 4:
        dispatch(messagesLoad(exampleMessages4))
        break
      case 5:
        dispatch(messagesLoad(exampleMessages5))
        break
      default:
        dispatch(messagesLoad([]))
        break
    }
  }
}
export const sendMessage = (text) => {
  return (dispatch, getState) => {
    // create the message
    let msg = {
      id: Math.floor(Math.random() * 100),
      sender: {
        id: getState().user.loggedInUser.id,
        // not using image directly from user because that image is too big
        image: 'http://placehold.it/83x111',
        name: getState().user.loggedInUser.firstName
      },
      text: text,
      time: moment().format('h:mmA')
    }

    // locate the active messages and add the new message to them
    switch (getState().messages.selectedConversationStub.id) {
      case 1:
        exampleMessages1 = _.concat(exampleMessages1, msg)
        dispatch(messagesLoad(exampleMessages1))
        break
      case 2:
        exampleMessages2 = _.concat(exampleMessages2, msg)
        dispatch(messagesLoad(exampleMessages2))
        break
      case 3:
        exampleMessages3 = _.concat(exampleMessages3, msg)
        dispatch(messagesLoad(exampleMessages3))
        break
      case 4:
        exampleMessages4 = _.concat(exampleMessages4, msg)
        dispatch(messagesLoad(exampleMessages4))
        break
      case 5:
        exampleMessages5 = _.concat(exampleMessages5, msg)
        dispatch(messagesLoad(exampleMessages5))
        break
      default:
        dispatch(messagesLoad([msg]))
        break
    }
  }
}
export const resetUnreadConversationStubs = () => {
  return (dispatch, getState) => {
    // for demo purposes, reset the stub unread values to their starting states
    _.forEach(exampleConversationStubs, function (stub) {
      // our current starting state is that all stubs are unread except for the one with id 5
      if (stub.id === 5) {
        stub.unread = false
      } else {
        stub.unread = true
      }
    })
  }
}

export const actions = {
  getConversationStubs,
  getMessages,
  selectConversationStub,
  sendMessage,
  resetUnreadConversationStubs
}

const INITIAL_STATE = {
  conversationStubs: [],
  messages: [],
  selectedConversationStub: {}
}
export default handleActions({
  CONVERSATION_STUBS_LOAD: (state, action) => {
    return Object.assign({}, state, { conversationStubs: action.payload })
  },
  MESSAGES_LOAD: (state, action) => {
    return Object.assign({}, state, { messages: action.payload })
  },
  SET_SELECTED_CONVERSATION_STUB: (state, action) => {
    return Object.assign({}, state, { selectedConversationStub: action.payload })
  }
}, INITIAL_STATE)

// example data

let exampleConversationStubs = [
  {
    id: 1,
    mostRecentMessageDate: 'Jan 1',
    sender: 'Mateosh',
    subject: 'Foster Parent Liaison',
    unread: true
  },
  {
    id: 2,
    mostRecentMessageDate: 'Jun 1',
    sender: 'Mateo',
    subject: 'Current Child 1',
    unread: true
  },
  {
    id: 3,
    mostRecentMessageDate: 'Jan 1',
    sender: 'Mateosh',
    subject: 'Upcoming Child 2',
    unread: true
  },
  {
    id: 4,
    mostRecentMessageDate: 'Jan 1',
    sender: 'Mateosh',
    subject: 'Past Child 3',
    unread: true
  },
  {
    id: 5,
    mostRecentMessageDate: 'Jun 5',
    sender: 'You',
    subject: 'Stephanie Lang',
    unread: false
  }
]

let exampleMessages1 = [
  {
    id: 10,
    sender: {
      id: 1083597,
      image: 'http://placehold.it/83x111',
      name: 'Mark'
    },
    text: 'my message!',
    time: '7:00PM'
  },
  {
    id: 11,
    sender: {
      id: 2,
      image: 'http://placehold.it/83x111',
      name: 'little mateo'
    },
    text: 'my reply! I\'m going to improvise. Listen, there\'s something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.',
    time: '8:00PM'
  }
]

let exampleMessages2 = [
  {
    id: 20,
    sender: {
      id: 3,
      image: 'http://placehold.it/83x111',
      name: 'big mateosh'
    },
    text: 'my message, hi!',
    time: '7:00PM'
  },
  {
    id: 21,
    sender: {
      id: 1083597,
      image: 'http://placehold.it/83x111',
      name: 'Mark'
    },
    text: 'my reply, hi!',
    time: '8:00PM'
  }
]
let exampleMessages3 = [
  {
    id: 30,
    sender: {
      id: 3,
      image: 'http://placehold.it/83x111',
      name: 'little mateosh'
    },
    text: 'my message, hola!',
    time: '7:00PM'
  },
  {
    id: 21,
    sender: {
      id: 1083597,
      image: 'http://placehold.it/83x111',
      name: 'Mark'
    },
    text: 'my reply, hi!',
    time: '8:00PM'
  }
]
let exampleMessages4 = [
  {
    id: 40,
    sender: {
      id: 3,
      image: 'http://placehold.it/83x111',
      name: 'dude'
    },
    text: 'nice to meet you!',
    time: '7:00PM'
  },
  {
    id: 21,
    sender: {
      id: 1083597,
      image: 'http://placehold.it/83x111',
      name: 'Mark'
    },
    text: 'my reply, hi!',
    time: '8:00PM'
  }
]
let exampleMessages5 = []
