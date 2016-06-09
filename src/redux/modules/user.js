import { createAction, handleActions } from 'redux-actions'
import { getConversationStubs, resetConversations } from 'redux/modules/messages'
import { store } from 'main'
// ------------------------------------
// Actions
// ------------------------------------
export const userLoad = createAction('USER_LOAD')
export const login = () => {
  return (dispatch, getState) => {
    // for demo purpose, data gets reset upon login
    resetUserInfo()
    dispatch(resetConversations())

    dispatch(userLoad(exampleUser))
    dispatch(getConversationStubs())
  }
}
export const updateUser = (user) => {
  return (dispatch, getState) => {
    // would go update a user on API and then...
    dispatch(userLoad(user))
    dispatch(getConversationStubs())
  }
}

export function isLoggedIn (user = store.getState().user.loggedInUser) {
  return !!(user && user.id)
}

export const resetUserInfo = () => {
  exampleUser.email = 'mark.oberin@mail.com'
  exampleUser.phone = '415-555-1234'
  exampleUser.preferredModeOfContact = 'Email'
}

export const actions = {
  login,
  updateUser,
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

// sample data - replace with link to API documentation when available

let exampleUser = {
  id: 1083597,
  address: {
    street: '4053 18th Street',
    city: 'Sacramento',
    state: 'CA',
    zipcode: '94123'
  },
  annualIncome: 100000,
  dateOfBirth: 'September 14, 1976',
  email: 'mark.oberin@mail.com',
  employmentStatus: 'Full Time',
  firstName: 'Mark',
  fosterCarePreferences: {
    ability: 'Ambulatory',
    age: '9 years to 17 years',
    gender: 'No Preference'
  },
  fosterChildren: [
    {
      birthday: 'February 11, 2001',
      caseId: 50096,
      fosterStartDate: 'April 3, 2015',
      fosterEndDate: '',
      image: 'https://raw.githubusercontent.com/Exygy/chhs-carefinder/master/src/images/james.jpg',
      imageAlt: 'A 15-year-old boy',
      firstName: 'James',
      lastName: 'Middleton'
    },
    {
      birthday: 'March 8, 2005',
      caseId: 51720,
      fosterStartDate: 'May 2, 2014',
      fosterEndDate: '',
      image: 'https://raw.githubusercontent.com/Exygy/chhs-carefinder/master/src/images/gloria.jpg',
      imageAlt: 'A 10-year-old girl',
      firstName: 'Gloria',
      lastName: 'Luke'
    },
    {
      birthday: 'October 21, 2009',
      caseId: 59636,
      fosterStartDate: 'June 1, 2013',
      fosterEndDate: 'November 16, 2013',
      image: 'https://raw.githubusercontent.com/Exygy/chhs-carefinder/master/src/images/stephanie.jpg',
      imageAlt: 'A 6-year-old girl',
      firstName: 'Stephanie',
      lastName: 'Lang'
    }
  ],
  gender: 'Male',
  image: 'https://raw.githubusercontent.com/Exygy/chhs-carefinder/master/src/images/mark-large.png',
  household: {
    adultsAtHome: 2,
    childrenAtHome: 3,
    bedrooms: 2,
    homeSize: {
      value: 949,
      unit: 'sq. ft.'
    }
  },
  lastName: 'Oberin',
  maritalStatus: 'Widowed',
  medicalHistory: 'Migraines, Shoulder Surgery (2000), Allergies',
  occupation: 'Software Engineer',
  phone: '415-555-1234',
  preferredModeOfContact: 'Email',
  race: 'Native American',
  religion: 'Bábism',
  ssn: '123-12-9834',
  status: 'approved'
}
