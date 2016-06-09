import React, { PropTypes } from 'react'

export class ContactInfoBox extends React.Component {
  static propTypes = {
    updateUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      email: this.props.user.email,
      isEditingProfile: false,
      phone: this.props.user.phone,
      preferredModeOfContact: this.props.user.preferredModeOfContact
    }
  }

  isEditingOn = (event) => {
    event.preventDefault()
    this.setState({ isEditingProfile: true })
  }

  isEditingOff = (event) => {
    event.preventDefault()
    this.setState({ isEditingProfile: false })
  }

  save = () => {
    let user = Object.assign({}, this.props.user)

    user.email = this.state.email
    user.phone = this.state.phone
    user.preferredModeOfContact = this.state.preferredModeOfContact

    this.props.updateUser(user)
    this.setState({ isEditingProfile: false })
  }

  updateEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  updatePhone = (event) => {
    this.setState({ phone: event.target.value })
  }

  updateEmailPreferred = (event) => {
    if (event.target.checked) {
      this.setState({ preferredModeOfContact: 'Email' })
    }
  }

  updatePhonePreferred = (event) => {
    if (event.target.checked) {
      this.setState({ preferredModeOfContact: 'Phone' })
    }
  }

  render () {
    let { email, phone, preferredModeOfContact } = this.props.user

    if (this.state.isEditingProfile) {
      // return editing mode
      return (
        <section className='block primary'>
          <header className='block-header'>
            <a href='#' onClick={this.isEditingOff} className='block-cancel'>Cancel</a>
          </header>
          <div className='row padding-bottom--2x'>
            <div className='large-8 large-centered columns'>
              <ul className='meta-list tall'>
                <li className='meta-list-item'>
                  <div className='inline-form inline-form-left-padding'>
                    <span className='ui-icon i-base i-white inline-form-icon'>
                      <svg>
                        <use xlinkHref='#i-mail'></use>
                      </svg>
                    </span>
                    <label htmlFor='textInput' className='inline-form-label inline-form-label-left-padding'>
                      Email
                    </label>
                    <input id='textInput'
                      className='inline-form-input'
                      type='text'
                      defaultValue={email}
                      onChange={this.updateEmail} />
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form inline-form-left-padding'>
                    <span className='ui-icon i-base i-white inline-form-icon'>
                      <svg>
                        <use xlinkHref='#i-phone'></use>
                      </svg>
                    </span>
                    <label htmlFor='textInput' className='inline-form-label inline-form-label-left-padding'>Phone</label>
                    <input id='textInput'
                      className='inline-form-input'
                      type='text'
                      defaultValue={phone}
                      onChange={this.updatePhone} />
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form'>
                    <label htmlFor='textInput' className='inline-form-label a-white'>Preferred Mode of Contact:</label>
                    <div className='inline-form-group radio-group-inline'>
                      <div className='radio radio-inline'>
                        <input name='contact'
                          id='email'
                          type='radio'
                          defaultChecked={preferredModeOfContact === 'Email'}
                          onChange={this.updateEmailPreferred} />
                        <label htmlFor='email' className='a-white'>Email</label>
                      </div>
                      <div className='radio radio-inline'>
                        <input name='contact'
                          id='phone'
                          type='radio'
                          defaultChecked={preferredModeOfContact === 'Phone'}
                          onChange={this.updatePhonePreferred} />
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
      // return non-editing mode
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
