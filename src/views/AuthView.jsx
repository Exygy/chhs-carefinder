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
            <form>
              <div className='row column log-in-form'>
                <header className='form-header'>
                  <h1 className='form-title t-epsilon'>Sign in to Your Account</h1>
                </header>
                <div className='form-group'>
                  <div className='inline-form'>
                    <label className='inline-form-label'>Email</label>
                    <input className='inline-form-input' type='text' placeholder='me@example.com' />
                  </div>
                  <div className='inline-form'>
                    <label className='inline-form-label'>Password</label>
                    <input className='inline-form-input' type='password' placeholder='Password' />
                  </div>
                  <div className='row'>
                    <div className='large-10 large-centered columns text-center'>
                      <p className='form-submit '>
                        <Link
                          onClick={this.props.login}
                          to='/'
                          type='submit'
                          className='button t-base attention large expanded'>Log In</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='large-6 columns'>
            <form>
              <div className='row column log-in-form'>
                <header className='form-header'>
                  <h1 className='form-title t-epsilon'>Create New Account</h1>
                </header>
                <div className='form-group'>
                  <div className='inline-form'>
                    <label className='inline-form-label'>Foster Home ID #</label>
                    <input className='inline-form-input' type='text' placeholder='xxxxxxxxxx' />
                  </div>
                  <div className='inline-form'>
                    <label className='inline-form-label'>Social Security #</label>
                    <input className='inline-form-input' type='text' placeholder='xxx-xx-xxxx' />
                  </div>
                  <div className='inline-form'>
                    <label className='inline-form-label'>Password</label>
                    <input className='inline-form-input' type='password' placeholder='Password' />
                  </div>
                  <div className='inline-form'>
                    <label className='inline-form-label'>Re-enter Password</label>
                    <input className='inline-form-input' type='password' placeholder='Password' />
                  </div>
                  <div className='row'>
                    <div className='large-10 large-centered columns text-center'>
                      <p className='form-submit '>
                        <Link
                          onClick={this.props.login}
                          to='/profile'
                          type='submit'
                          className='button attention large expanded'>Register</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section className='row margin-bottom--2x'>
          <div className='block primary text-center'>
            <p>Your personal information is visible only to you and California Health &amp; Human Services Agency</p>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(null, actions)(AuthView)
