import React, { PropTypes } from 'react'

export class ContactInfoBox extends React.Component {
  static propTypes = {
    updateUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      isEditingProfile : false
    }
  }

  isEditingOn = () => {
    this.setState({ isEditingProfile : true })
  }

  isEditingOff = () => {
    this.setState({ isEditingProfile : false })
  }

  save = () => {
    this.props.updateUser(this.props.user)
  }

  render () {
    let { email, phone, preferredModeOfContact } = this.props.user

    if (this.state.isEditingProfile) {
      return (
        <section className='block primary'>
          <header className='block-header'>
            <a href='#' onClick={this.isEditingOff} className='block-edit'>Cancel</a>
          </header>
          <div className='row padding-bottom--2x'>
            <div className='large-8 large-centered columns'>
              <ul className='meta-list tall'>
                <li className='meta-list-item'>
                  <div className='inline-form'>
                    <span className='ui-icon i-base i-white inline-form-icon'>
                      <svg>
                        <use xlinkHref='#i-mail'></use>
                      </svg>
                    </span>
                    <label htmlFor='textInput' className='inline-form-label'>Email</label>
                    <input id='textInput' className='inline-form-input' type='text' defaultValue={email} />
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form'>
                    <span className='ui-icon i-base i-white inline-form-icon'>
                      <svg>
                        <use xlinkHref='#i-phone'></use>
                      </svg>
                    </span>
                    <label htmlFor='textInput' className='inline-form-label'>Phone</label>
                    <input id='textInput' className='inline-form-input' type='text' defaultValue={phone} />
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form'>
                    <label htmlFor='textInput' className='inline-form-label a-white'>Preferred Mode of Contact:</label>
                    <div className='inline-form-group radio-group-inline'>
                      <div className='radio radio-inline'>
                        <input name='contact' id='email' type='radio' defaultChecked={preferredModeOfContact === 'Email'} />
                        <label htmlFor='email' className='a-white'>Email</label>
                      </div>
                      <div className='radio radio-inline'>
                        <input name='contact' id='phone' type='radio' defaultChecked={preferredModeOfContact === 'Phone'} />
                        <label htmlFor='phone' className='a-white'>Phone</label>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='large-6 large-centered columns'>
              <button className='button large attention expanded' onClick={this.save}>Save</button>
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className='block primary'>
          <a href='#' onClick={this.isEditingOn} className='block-edit'>Edit</a>
          <ul className='meta-list no-bullet'>
            <li className='meta-list-item'>
              <span className='ui-icon i-base i-white'>
                <svg>
                  <use xlinkHref='#i-mail' />
                </svg>
              </span>
            {email}
            </li>
            <li className='meta-list-item'>
              <span className='ui-icon i-base i-white'>
                <svg>
                  <use xlinkHref='#i-phone' />
                </svg>
              </span>
            {phone}
            </li>
            <li className='meta-list-item'>
              <strong>Preferred Mode of Contact</strong>: {preferredModeOfContact}
            </li>
          </ul>
        </section>
      )
    }
  }
}

export default ContactInfoBox
