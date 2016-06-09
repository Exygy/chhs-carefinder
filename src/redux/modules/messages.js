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
        image: 'https://raw.githubusercontent.com/Exygy/chhs-carefinder/master/src/images/mark-small.png',
        name: getState().user.loggedInUser.firstName
      },
      text: text,
      time: moment().format('MMM D h:mmA')
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
      // our current starting state is that all stubs are read except for the one with id 2
      if (stub.id === 2) {
        stub.unread = true
      } else {
        stub.unread = false
      }
    })
  }
}
export const resetConversations = () => {
  return (dispatch, getState) => {
    exampleMessages1 = exampleMessages1.slice(0, 2)
    exampleMessages2 = exampleMessages2.slice(0, 3)
    exampleMessages3 = []
    exampleMessages4 = exampleMessages4.slice(0, 2)
    dispatch(getMessages())
  }
}

export const actions = {
  getConversationStubs,
  getMessages,
  selectConversationStub,
  sendMessage,
  resetUnreadConversationStubs,
  resetConversations
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

// example data - replace with link to API documentation when available

let exampleConversationStubs = [
  {
    id: 1,
    mostRecentMessageDate: 'May 23',
    sender: 'Benjamin Barnes',
    subject: 'Re: James Middleton',
    unread: false
  },
  {
    id: 2,
    mostRecentMessageDate: 'June 3',
    sender: 'Sam Torres',
    subject: 'Re: Gloria Luke',
    unread: true
  },
  {
    id: 3,
    mostRecentMessageDate: '',
    sender: 'Peter Flemmings',
    subject: 'Re: Stephanie Lang',
    unread: false
  },
  {
    id: 4,
    mostRecentMessageDate: 'May 23',
    sender: 'Foster Parent Liaison',
    subject: 'General Support',
    unread: false
  }
]

let exampleMessages1 = [
  {
    id: 10,
    sender: {
      id: 1083597,
      image: 'https://raw.githubusercontent.com/Exygy/chhs-carefinder/master/src/images/mark-small.png',
      imageAlt: 'My photo: A smiling 40-year-old man',
      name: 'Mark'
    },
    text: 'Hi Ben, I need some advice regarding James. He’s been diagnosed with ADHD. What do I need to do?',
    time: 'MAY 23 10:23AM'
  },
  {
    id: 11,
    sender: {
      id: 101,
      image: 'https://raw.githubusercontent.com/Exygy/chhs-carefinder/master/src/images/caseworker1.png',
      imageAlt: 'Benjamin Barnes: Caseworker',
      name: 'Benjamin'
    },
    text: 'Thanks for keeping us informed, Mark. We schedule a number of classes to train parents on how to support children with ADHD. In fact, we have one this upcoming Tuesday at 7pm in the local office. I encourage you to come by to learn more.  Additionally, feel free to search for foster family agencies in your area using the search feature on the portal.  Please let me know if there’s anything else I can help with.',
    time: 'MAY 23 2:39PM'
  }
]

let exampleMessages2 = [
  {
    id: 20,
    sender: {
      id: 102,
      image: 'https://raw.githubusercontent.com/Exygy/chhs-carefinder/master/src/images/caseworker4.png',
      imageAlt: 'Sam Torres: Caseworker',
      name: 'Sam'
    },
    text: 'Good Morning, Mark. I’d like to check in to see how Gloria is doing. I know the last time I visited the house, Gloria was struggling in a few classes at school.',
    time: 'JUN 2 11:10AM'
  },
  {
    id: 21,
    sender: {
      id: 1083597,
      image: 'https://raw.githubusercontent.com/Exygy/chhs-carefinder/master/src/images/mark-small.png',
      imageAlt: 'My photo: A smiling 40-year-old man',
      name: 'Mark'
    },
    text: 'Gloria has been improving significantly. She is graduating from 5th grade next month! Her teachers have been seeing noticeable improvements and she has been making great friends. She will switching schools next year and is very excited.',
    time: 'JUN 2 11:20AM'
  },
  {
    id: 22,
    sender: {
      id: 102,
      image: 'https://raw.githubusercontent.com/Exygy/chhs-carefinder/master/src/images/caseworker4.png',
      imageAlt: 'Sam Torres: Caseworker',
      name: 'Sam'
    },
    text: 'That’s amazing! I’m so proud of her. It sounds like you guys are getting along very well. Super pleased to hear. Please keep me up to date on how she transitions to the new school.',
    time: 'JUN 3 8:17AM'
  }
]

let exampleMessages3 = []

let exampleMessages4 = [
  {
    id: 40,
    sender: {
      id: 1083597,
      image: 'https://raw.githubusercontent.com/Exygy/chhs-carefinder/master/src/images/mark-small.png',
      imageAlt: 'My photo: A smiling 40-year-old man',
      name: 'Mark'
    },
    text: 'I have scheduled for respite care this upcoming Saturday and would like to know if I can reschedule to Sunday. Please let me know if this is possible.',
    time: 'MAY 23 11:20AM'
  }
]
