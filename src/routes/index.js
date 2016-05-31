import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'views/CoreLayout'
import NavBar from 'components/NavBar'
import AuthView from 'views/AuthView'
import HomeView from 'views/HomeView'
import MessagesView from 'views/MessagesView'
import ProfileView from 'views/ProfileView'
import SearchView from 'views/SearchView'

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute components={{content: HomeView, navbar: NavBar}} />
    <Route path='messages' components={{content: MessagesView, navbar: NavBar}} />
    <Route path='profile' components={{content: ProfileView, navbar: NavBar}} />
    <Route path='/search' components={{content: SearchView, navbar: NavBar}}>
      <Route path='favorites' />
    </Route>
    <Route path='signin' components={{content: AuthView, navbar: NavBar}} />
  </Route>
)
