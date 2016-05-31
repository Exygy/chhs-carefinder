import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/user'
import { Link } from 'react-router'

export class AuthView extends React.Component {

  static propTypes = {
    login: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className='content with-sticky-header'>
        <Link onClick={this.props.login} to='/'>Sign in</Link>
      </div>
    )
  }
}

export default connect(null, actions)(AuthView)
