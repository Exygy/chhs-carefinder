import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'views/CoreLayout'
import AuthView from 'views/AuthView'
import HomeView from 'views/HomeView'
import MessagesView from 'views/MessagesView'
import ProfileView from 'views/ProfileView'
import SearchView from 'views/SearchView'

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='messages' component={MessagesView} />
    <Route path='profile' component={ProfileView} />
    <Route path='search' component={SearchView} />
    <Route path='signin' component={AuthView} />
  </Route>
)
