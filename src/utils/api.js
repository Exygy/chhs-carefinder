import queryString from 'query-string'
import fetch from 'isomorphic-fetch'

// see "Handling HTTP error statuses" -- https://github.com/github/fetch
function checkStatus (response) {
  if (response.status && response.status >= 200 && response.status < 300) {
    return response
  } else if (response.ok) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
export const thunkAPI = (url, path, opts = {}) => {
  let { onSuccess, onLoad, onError, onComplete, queryData } = opts
  return (dispatch, getState) => {
    if (onLoad) dispatch(onLoad())
    if (queryData) {
      path += '?' + queryString.stringify(queryData(getState()))
    }
    fetchAPI(url, path, {})
    .then((data) => {
      // console.log(`API: ${path}`)
      if (onSuccess) dispatch(onSuccess(data))
      if (onComplete) dispatch(onComplete())
    })
    .catch((error) => {
      // console.warn(`couldn't get ${path} : ${error.toString()}`)
      if (onError) dispatch(onError(error))
      if (onComplete) dispatch(onComplete())
    })
  }
}

function fetchAPI (url, path, params = {}) {
  var defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  params.headers = Object.assign({}, defaultHeaders, params.headers)
  // fetch returns a chainable promise
  // console.log(params)
  return fetch(`${url}${path}`, params)
    .then(checkStatus)
    .then((response) =>
      response.json().then((json) => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return json
    })
}

export default fetchAPI
