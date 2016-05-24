import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/user'

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
        <a onClick={this.loadFakeUser} href='#'>Sign in</a>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(AuthView)
