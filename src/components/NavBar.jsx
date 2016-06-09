import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { IndexLink } from 'react-router'
import activeComponent from 'react-router-active-component'
import { connect } from 'react-redux'
import { userLoad } from 'redux/modules/user'
import { resetUnreadConversationStubs } from 'redux/modules/messages'

const mapStateToProps = (state) => ({
  loggedInUser: state.user.loggedInUser,
  conversationStubs: state.messages.conversationStubs
})

export class NavBar extends React.Component {
  static propTypes = {
    loggedInUser: PropTypes.object.isRequired,
    userLoad: PropTypes.func.isRequired,
    conversationStubs: PropTypes.array.isRequired,
    resetUnreadConversationStubs: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {menuClass: 'toggle-menu'}
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
      <ul className='top-bar-menu menu' data-dropdown-menu>
        {searchFacilitiesLink}
        <NavItem to='/signin' className='top-bar-menu-item' activeClassName='active'>
          Sign In or Sign Up
        </NavItem>
      </ul>
    )
    let loggedInNavLinks = (
      <ul className='top-bar-menu menu' data-dropdown-menu>
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
    this.props.resetUnreadConversationStubs()
  }

  toggleMenu = () => {
    var menuName = 'toggle-menu'
    if (!_.includes(this.state.menuClass, 'show-menu')) {
      menuName += ' show-menu'
    }
    this.setState({menuClass: menuName})
  }

  render () {
    return (
      <nav className='top-bar sticky is-stuck is-at-top column'>
        <div className='row'>
          <div className='medium-4 columns'>
            <div className='top-bar-logo'>
              <span className='hide-for-medium'>
                <button
                  className='menu-icon dark'
                  type='button'
                  data-toggle='responsive-menu'
                  onClick={this.toggleMenu}></button>
              </span>
              <IndexLink to='/'>
                <svg className='logo-svg' role='img' aria-label='Care Finder logo'>
                  <title>Care Finder logo</title>
                  <desc>Care Finder logo</desc>
                  <use xlinkHref='#i-care' />
                </svg>
                <span className='logo-name'>
                  Care Finder
                </span>
              </IndexLink>
            </div>
          </div>
          <div id='responsive-menu' className={this.state.menuClass} data-toggler='show-menu'>
            {this.menuBar}
          </div>
        </div>
      </nav>
    )
  }
}

export default connect(mapStateToProps, {userLoad, resetUnreadConversationStubs})(NavBar)
