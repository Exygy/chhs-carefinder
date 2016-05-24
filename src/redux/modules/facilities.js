import _ from 'utils/lodash'
import { createAction, handleActions } from 'redux-actions'
import { thunkAPI } from 'utils/api'
const API_URL = 'https://chhs.data.ca.gov'

// https://chhs.data.ca.gov/resource/ubwb-3u3c.json

// ------------------------------------
// Actions
// ------------------------------------
export const facilitiesLoad = createAction('FACILITIES_LOAD')
export const setFacilityGeoSearch = createAction('SET_FACILITY_GEO_SEARCH')
export const setFacilityZipcode = createAction('SET_FACILITY_ZIPCODE')
export const setFilterByFavorites = createAction('SET_FILTER_BY_FAVORITES')

const facilityZipParamKey = 'facility_zip'

export const getFacilities = () => thunkAPI(API_URL, '/resource/ubwb-3u3c.json', {
  onSuccess: facilitiesLoad,
  queryData: (state) => {
    let where = 'facility_status != "CLOSED"'
    let geo = state.facilities.geoSearch
    if (!_.isEmpty(geo)) {
      geo.distance = geo.distance || 30000 // 30 km
      where += `AND within_circle(location, ${geo.lat}, ${geo.lng}, ${geo.distance})`
    }
    let zipcode = state.facilities.zipcodeSearch
    if (!_.isEmpty(zipcode)) {
      where += ` AND ${facilityZipParamKey} = "${zipcode}"`
    }
    return {
      $where: where
    }
  }
})

export const actions = {
  getFacilities,
  setFacilityGeoSearch,
  setFacilityZipcode,
  setFilterByFavorites
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const INITIAL_STATE = {
  filterByFavorites: false,
  geoSearch: {},
  results: [],
  zipcodeSearch: ''
}
export default handleActions({
  FACILITIES_LOAD: (state, action) => {
    return Object.assign({}, state, { results: action.payload })
  },
  SET_FACILITY_GEO_SEARCH: (state, action) => {
    return Object.assign({}, state, { geoSearch: action.payload })
  },
  SET_FACILITY_ZIPCODE: (state, action) => {
    return Object.assign({}, state, { zipcodeSearch: action.payload })
  },
  SET_FILTER_BY_FAVORITES: (state, action) => {
    return Object.assign({}, state, { filterByFavorites: action.payload })
  }
}, INITIAL_STATE)
