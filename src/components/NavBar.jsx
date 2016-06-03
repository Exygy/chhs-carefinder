import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { IndexLink } from 'react-router'
import activeComponent from 'react-router-active-component'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/user'

const mapStateToProps = (state) => ({
  loggedInUser: state.user.loggedInUser,
  conversationStubs: state.messages.conversationStubs
})

export class NavBar extends React.Component {
  static propTypes = {
    loggedInUser: PropTypes.object.isRequired,
    userLoad: PropTypes.func.isRequired,
    conversationStubs: PropTypes.array.isRequired
  }

  get notifications () {
    let unread = _.filter(this.props.conversationStubs, (stub) => stub.unread)
    let unreadCount = unread.length
    if (unreadCount > 0) {
      return <span className='top-bar-badge badge alert'>{unreadCount}</span>
    } else {
      return ''
    }
  }

  get menuBar () {
    var NavItem = activeComponent('li', { linkClassName: 'top-bar-menu-link' })

    let searchFacilitiesLink = (
      <NavItem to='/search' className='top-bar-menu-item' activeClassName='active'>
        Search Facilities
      </NavItem>
    )
    let loggedOutNavLinks = (
      <ul className='top-bar-menu menu' role='menubar'>
        {searchFacilitiesLink}
        <NavItem to='/signin' className='top-bar-menu-item' activeClassName='active'>
          Sign In or Sign Up
        </NavItem>
      </ul>
    )
    let loggedInNavLinks = (
      <ul className='top-bar-menu menu' role='menubar'>
        {searchFacilitiesLink}
        <NavItem to='/profile' className='top-bar-menu-item' activeClassName='active'>
          My Profile
        </NavItem>
        <NavItem to='/messages' className='top-bar-menu-item' activeClassName='active'>
          My Messages {this.notifications}
        </NavItem>
        <NavItem onClick={this.logOut} to='/' className='top-bar-menu-item' activeClassName=''>
          Sign Out
        </NavItem>
      </ul>
    )
    if (_.isEmpty(this.props.loggedInUser)) {
      return loggedOutNavLinks
    } else {
      return loggedInNavLinks
    }
  }

  logOut = () => {
    this.props.userLoad({})
  }

  render () {
    return (
      <nav className='top-bar sticky is-stuck is-at-top column'>
        <div className='row'>
          <div className='medium-4 columns'>
            <IndexLink to='/'>
              <div className='top-bar-logo'>
                <svg className='logo-svg'>
                  <use xlinkHref='#i-care' />
                </svg>
                <span className='logo-name'>
                  Care Finder
                </span>
              </div>
            </IndexLink>
          </div>
          <div className='top-bar-right'>
            {this.menuBar}
          </div>
        </div>
      </nav>
    )
  }
}

export default connect(mapStateToProps, actions)(NavBar)
