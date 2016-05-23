import React from 'react'

export class NavBar extends React.Component {
  static propTypes = {
  }

  render () {
    return (
      <nav className='top-bar'>
        <div className='top-bar-left'>
          Logo
        </div>
        <div className='top-bar-right'>
          <ul className='menu' role='menubar'>
            <li role='menuitem'><a href='#' tabIndex='0'>Search Facilities</a></li>
            <li role='menuitem'><a href='#'>Sign Up</a></li>
            <li role='menuitem'><a href='#'>Sign In</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
