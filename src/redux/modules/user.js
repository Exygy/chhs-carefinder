import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Actions
// ------------------------------------
export const userLoad = createAction('USER_LOAD')
export const login = () => {
  return (dispatch, getState) => {
    dispatch(userLoad(exampleUser))
  }
}

export const actions = {
  userLoad,
  login
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

// Sample data

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
    age: '10 to 17 years',
    gender: 'No Preference'
  },
  fosterChildren: [
    {
      birthday: 'February 11, 2001',
      caseId: 50096,
      fosterStartDate: 'April 3, 2015',
      fosterEndDate: '',
      image: 'http://placehold.it/81x111',
      firstName: 'James',
      lastName: 'Middleton'
    },
    {
      birthday: 'March 8, 2005',
      caseId: 51720,
      fosterStartDate: 'May 2, 2014',
      fosterEndDate: '',
      image: 'http://placehold.it/81x111',
      firstName: 'Gloria',
      lastName: 'Luke'
    },
    {
      birthday: 'October 21, 2009',
      caseId: 59636,
      fosterStartDate: 'June 1, 2013',
      fosterEndDate: 'November 16, 2013',
      image: 'http://placehold.it/81x111',
      firstName: 'Stephanie',
      lastName: 'Lang'
    }
  ],
  gender: 'Male',
  image: 'http://placehold.it/358x440',
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
  maritalStatus: 'Widower',
  medicalHistory: 'Migraines, Shoulder Surgery (2000), Allergies',
  occupation: 'Software Engineer',
  phone: '415-555-1234',
  preferredModeOfContact: 'Email',
  race: 'Native American',
  religion: 'Bábism',
  ssn: '123-12-9834',
  status: 'approved'
}
