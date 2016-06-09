import _ from 'utils/lodash'
import { createAction, handleActions } from 'redux-actions'
import { thunkAPI } from 'utils/api'
const API_URL = 'https://chhs.data.ca.gov'

// https://chhs.data.ca.gov/resource/ubwb-3u3c.json

// ------------------------------------
// Actions
// ------------------------------------
export const facilitiesLoading = createAction('FACILITIES_LOADING')
export const facilitiesDoneLoading = createAction('FACILITIES_DONE_LOADING')
export const facilitiesLoad = createAction('FACILITIES_LOAD')
export const setFacilityGeoSearch = createAction('SET_FACILITY_GEO_SEARCH')
export const setFacilitySearchQuery = createAction('SET_FACILITY_SEARCH_QUERY')
export const setFacilityLicensed = createAction('SET_FACILITY_LICENSED')
export const setFilterByFavorites = createAction('SET_FILTER_BY_FAVORITES')

const facilityZipParamKey = 'facility_zip'
const metersToMiles = 0.000621371

export const getFacilities = () => thunkAPI(API_URL, '/resource/mffa-c6z5.json', {
  onLoad: facilitiesLoading,
  onComplete: facilitiesDoneLoading,
  onSuccess: facilitiesLoad,
  queryData: (state) => {
    let search = {
      $where: 'facility_status != "CLOSED" AND facility_type != "ADOPTION AGENCY"',
      $select: '*'
    }
    let geo = state.facilities.geoSearch
    let query = state.facilities.searchQuery
    if (!_.isEmpty(geo)) {
      geo.distance = geo.distance || (100 / metersToMiles) // 100 miles
      search.$where += ` AND within_circle(location, ${geo.lat}, ${geo.lng}, ${geo.distance})`
      let distance = `distance_in_meters(location, 'POINT (${geo.lng} ${geo.lat})')`
      search.$order = distance
      search.$select += `, ${distance} * ${metersToMiles} AS distance_in_miles`
    } else if (query) {
      search.$q = query
    }
    let zipcode = state.facilities.zipcodeSearch
    if (!_.isEmpty(zipcode)) {
      search.$where += ` AND ${facilityZipParamKey} = "${zipcode}"`
    }

    if (state.facilities.licensed) {
      search.$where += ' AND facility_status == "LICENSED"'
    }
    return search
  }
})

export const actions = {
  getFacilities,
  setFacilityGeoSearch,
  setFacilitySearchQuery,
  setFacilityLicensed,
  setFilterByFavorites
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const INITIAL_STATE = {
  loading: false,
  filterByFavorites: false,
  geoSearch: {},
  results: [],
  searchQuery: '',
  licensed: true
}
export default handleActions({
  FACILITIES_LOADING: (state, action) => {
    return Object.assign({}, state, { loading: true })
  },
  FACILITIES_DONE_LOADING: (state, action) => {
    return Object.assign({}, state, { loading: false })
  },
  FACILITIES_LOAD: (state, action) => {
    return Object.assign({}, state, { results: action.payload })
  },
  SET_FACILITY_GEO_SEARCH: (state, action) => {
    return Object.assign({}, state, { geoSearch: action.payload })
  },
  SET_FACILITY_SEARCH_QUERY: (state, action) => {
    return Object.assign({}, state, { searchQuery: action.payload })
  },
  SET_FACILITY_LICENSED: (state, action) => {
    return Object.assign({}, state, { licensed: action.payload })
  },
  SET_FILTER_BY_FAVORITES: (state, action) => {
    return Object.assign({}, state, { filterByFavorites: action.payload })
  }
}, INITIAL_STATE)
