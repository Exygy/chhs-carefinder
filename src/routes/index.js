import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'views/CoreLayout'
import HomeView from 'views/HomeView'
import SearchView from 'views/SearchView'

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='search' component={SearchView} />
  </Route>
)
