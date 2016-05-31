import React, { PropTypes } from 'react'

export class ContactInfoBox extends React.Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    preferredContactMode: PropTypes.oneOf(['Email', 'Phone']).isRequired
  }

  render () {
    return (
      <section className='block attention'>
        <a href='#' className='block-edit'>Edit</a>
        <ul className='meta-list no-bullet'>
          <li className='meta-list-item'>
            <span className='ui-icon i-base i-white'>
              <svg>
                <use xlinkHref='#i-mail' />
              </svg>
            </span>
          {this.props.email}
          </li>
          <li className='meta-list-item'>
            <span className='ui-icon i-base i-white'>
              <svg>
                <use xlinkHref='#i-phone' />
              </svg>
            </span>
          {this.props.phone}
          </li>
          <li className='meta-list-item'>
          {this.props.preferredContactMode}
          </li>
        </ul>
      </section>
    )
  }
}

export default ContactInfoBox
