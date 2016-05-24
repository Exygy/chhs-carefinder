import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/user'
import { Link } from 'react-router'

const mapStateToProps = (state) => ({
  userLoad: state.facilities.filterByFavorites
})

export class AuthView extends React.Component {

  static propTypes = {
    userLoad: PropTypes.func.isRequired
  }

  loadFakeUser = () => {
    console.log('loadingFakeUser')
    this.props.userLoad({name: 'Matt'})
    console.log('fakeUserLoaded')
  }

  render () {
    return (
      <div>
        <Link onClick={this.loadFakeUser} to='/'>Sign in</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(AuthView)
