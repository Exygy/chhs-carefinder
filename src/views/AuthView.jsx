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
        <section className='row margin-top--2x margin-bottom--2x'>
          <div className='large-6 columns'>
            <form lpformnum='1'>
              <div className='row column log-in-form padding--2x'>
                <h4 className='text-center'>Sign into your account</h4>
                <label>Email
                  <input type='text' placeholder='somebody@example.com' />
                </label>
                <label>Password
                  <input type='text' placeholder='Password' />
                </label>
                <input id='show-password' type='checkbox' /><label htmlFor='show-password'>Show password</label>
                <p>
                  <Link onClick={this.props.login} to='/' type='submit' className='button expanded'>Log in</Link>
                </p>
                <p className='text-center'><a href='#'>Forgot your password?</a></p>
              </div>
            </form>
          </div>
          <div className='large-6 columns'>
            <form lpformnum='2'>
              <div className='row column log-in-form padding--2x'>
                <h4 className='text-center'>Create new account</h4>
                <label>
                  Foster Home ID #
                  <input type='text' placeholder='xxxxxxxx' />
                </label>
                <label>
                  Social Security #
                  <input type='text' placeholder='xxx-xx-xxxx' />
                </label>
                <label>
                  Password
                  <input type='text' placeholder='Password' />
                </label>
                <label>
                  Re-enter Password
                  <input type='text' placeholder='Password' />
                </label>
                <input id='show-password' type='checkbox' /><label htmlFor='show-password'>Show password</label>
                <p>
                  <Link onClick={this.props.login} to='/' type='submit' className='button expanded'>Register</Link>
                </p>
                <p className='text-center'><a href='#'>Forgot your password?</a></p>
              </div>
            </form>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(null, actions)(AuthView)
