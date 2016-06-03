import React, { PropTypes } from 'react'

export class ContactInfoBox extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    let { email, phone, preferredModeOfContact } = this.props.user
    return (
      <section className='block primary'>
        <a href='#' className='block-edit'>Edit</a>
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
            Preferred Mode of Contact: {preferredModeOfContact}
          </li>
        </ul>
      </section>
    )
  }
}

export default ContactInfoBox
