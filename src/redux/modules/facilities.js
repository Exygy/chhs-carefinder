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
export const getFacilities = () => thunkAPI(API_URL, '/resource/ubwb-3u3c.json', {
  onSuccess: facilitiesLoad,
  queryData: (state) => {
    let geo = state.facilities.geoSearch
    if (_.isEmpty(geo)) return {}
    geo.distance = geo.distance || 30000 // 30 km
    return {
      $where: `within_circle(location, ${geo.lat}, ${geo.lng}, ${geo.distance})`
    }
  }
})

export const actions = {
  setFacilityGeoSearch,
  getFacilities
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const INITIAL_STATE = {
  results: [],
  geoSearch: {}
}
export default handleActions({
  FACILITIES_LOAD: (state, action) => {
    return Object.assign({}, state, { results: action.payload })
  },
  SET_FACILITY_GEO_SEARCH: (state, action) => {
    return Object.assign({}, state, { geoSearch: action.payload })
  }
}, INITIAL_STATE)
