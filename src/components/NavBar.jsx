import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/user'

const mapStateToProps = (state) => ({
  loggedInUser: state.user.loggedInUser
})

export class NavBar extends React.Component {
  static propTypes = {
    loggedInUser: PropTypes.object.isRequired,
    userLoad: PropTypes.func.isRequired
  }

  get menuBar () {
    let searchFacilitiesLink = (
      <li role='menuitem'><Link to='/search'>Search Facilities</Link></li>
    )
    let loggedOutNavLinks = (
      <ul className='menu' role='menubar'>
        {searchFacilitiesLink}
        <li role='menuitem'><Link to='/signin'>Sign Up</Link></li>
        <li role='menuitem'><Link onClick={this.filterByFavorites} to='/signin'>Sign In</Link></li>
      </ul>
    )
    let loggedInNavLinks = (
      <ul className='menu' role='menubar'>
        {searchFacilitiesLink}
        <li role='menuitem'><Link to={{ pathname: '/search', query: { favorites: true } }}>My Facilities</Link></li>
        <li role='menuitem'><Link to='/profile'>My Profile</Link></li>
        <li role='menuitem'><Link to='/messages'>My Messages</Link></li>
        <li role='menuitem'><Link onClick={this.logOut} to='/'>Logout</Link></li>
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
        <div className='top-bar-left'>
          <ul className='menu' role='menubar'>
            <li>
              <Link to='/'>Logo</Link>
            </li>
          </ul>
        </div>
        <div className='top-bar-right'>
          {this.menuBar}
        </div>
      </nav>
    )
  }
}

export default connect(mapStateToProps, actions)(NavBar)
