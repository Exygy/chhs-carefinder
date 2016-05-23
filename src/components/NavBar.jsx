import React, { PropTypes } from 'react'

export class NavBar extends React.Component {
  static propTypes = {
  }

  render () {
    return (
      <nav className='top-bar'>
        <div className='top-bar-left'>
          <ul className='dropdown menu' role='menubar'>
            <li className='menu-text' role='menuitem'>Site Title</li>
            <li role='menuitem'><a href='#' tabIndex='0'>One</a></li>
            <li role='menuitem'><a href='#'>Two</a></li>
            <li role='menuitem'><a href='#'>Three</a></li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <ul className='menu'>
            <li><input type='search' placeholder='Search' /></li>
            <li><button type='button' className='button'>Search</button></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
