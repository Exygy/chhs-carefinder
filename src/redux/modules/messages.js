import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Actions
// ------------------------------------
const conversationStubsLoad = createAction('CONVERSATION_STUBS_LOAD')
const messagesLoad = createAction('MESSAGES_LOAD')
const selectConversationStub = createAction('SELECT_CONVERSATION_STUB')
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
      default:
        dispatch(messagesLoad([]))
        break
    }
  }
}

export const actions = {
  getConversationStubs,
  getMessages,
  selectConversationStub
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
  SELECT_CONVERSATION_STUB: (state, action) => {
    return Object.assign({}, state, { selectedConversationStub: action.payload })
  }
}, INITIAL_STATE)

// example data

let exampleConversationStubs = [
  {
    id: 1,
    mostRecentMessageDate: 'June 1, 2016 8:00PM',
    sender: 'Mateo',
    subject: 'Re: Child 1'
  },
  {
    id: 2,
    mostRecentMessageDate: 'January 1, 2016 8:00PM',
    sender: 'Mateosh',
    subject: 'Re: Child 2'
  },
  {
    id: 3,
    mostRecentMessageDate: 'January 1, 2016 8:00PM',
    sender: 'Mateosh',
    subject: 'Re: Child 3'
  },
  {
    id: 4,
    mostRecentMessageDate: 'January 1, 2016 8:00PM',
    sender: 'Mateosh',
    subject: 'General'
  }
]

let exampleMessages1 = [
  {
    id: 10,
    sender: {
      id: 100,
      image: 'http://placehold.it/83x111',
      name: 'Matt'
    },
    text: 'my message!',
    time: 'June 1, 2016 7:00PM'
  },
  {
    id: 11,
    sender: {
      id: 2,
      image: 'http://placehold.it/83x111',
      name: 'little mateo'
    },
    text: 'my reply! I\'m going to improvise. Listen, there\'s something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.',
    time: 'June 1, 2016 8:00PM'
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
    time: 'January 1, 2016 7:00PM'
  },
  {
    id: 21,
    sender: {
      id: 100,
      image: 'http://placehold.it/83x111',
      name: 'little mateosh'
    },
    text: 'my reply, hi!',
    time: 'January 1, 2016 8:00PM'
  }
]
