import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
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
      <li role='menuitem'><a href='search' tabIndex='0'>Search Facilities</a></li>
    )
    let loggedOutNavLinks = (
      <ul className='menu' role='menubar'>
        {searchFacilitiesLink}
        <li role='menuitem'><a href='#'>Sign Up</a></li>
        <li role='menuitem'><a onClick={this.loadFakeUser} href='#'>Sign In</a></li>
      </ul>
    )
    let loggedInNavLinks = (
      <ul className='menu' role='menubar'>
        {searchFacilitiesLink}
        <li role='menuitem'><a onClick={this.unloadFakeUser} href='#'>Logout</a></li>
      </ul>
    )
    if (_.isEmpty(this.props.loggedInUser)) {
      return loggedOutNavLinks
    } else {
      return loggedInNavLinks
    }
  }

  loadFakeUser = () => {
    this.props.userLoad({name: 'Matt'})
  }

  unloadFakeUser = () => {
    this.props.userLoad({})
  }

  render () {
    return (
      <nav className='top-bar'>
        <div className='top-bar-left'>
          Logo
        </div>
        <div className='top-bar-right'>
          {this.menuBar}
        </div>
      </nav>
    )
  }
}

export default connect(mapStateToProps, actions)(NavBar)
