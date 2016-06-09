import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'views/CoreLayout'
import NavBar from 'components/NavBar'
import AuthView from 'views/AuthView'
import HomeView from 'views/HomeView'
import MessagesView from 'views/MessagesView'
import ProfileView from 'views/ProfileView'
import SearchView from 'views/SearchView'
import { isLoggedIn } from 'redux/modules/user'
import { toggleMenu } from 'redux/modules/menu'
import { store } from 'main'

function authenticateAndCloseMenu (nextState, replace) {
  closeMenu(nextState, replace)
  if (!isLoggedIn()) {
    replace('/signin')
  }
}

function closeMenu (nextState, replace) {
  store.dispatch(toggleMenu('close'))
}

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute onEnter={closeMenu} components={{content: HomeView, navbar: NavBar}} />
    <Route path='messages' onEnter={authenticateAndCloseMenu} components={{content: MessagesView, navbar: NavBar}} />
    <Route path='profile' onEnter={authenticateAndCloseMenu} components={{content: ProfileView, navbar: NavBar}} />
    <Route path='search' onEnter={closeMenu} components={{content: SearchView, navbar: NavBar}} />
    <Route path='signin' onEnter={closeMenu} components={{content: AuthView, navbar: NavBar}} />
  </Route>
)
