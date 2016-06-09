import React, { PropTypes } from 'react'

export class ProfileNotification extends React.Component {
  static propTypes = {
    status: PropTypes.string.isRequired
  }

  render () {
    if (this.props.status === 'approved') {
      return (<div />)
    } else {
      return (
        <section className='block attention'>
          <p className='has-icon'>
            <span className='ui-icon i-base i-white'>
              <svg>
                <use xlinkHref='#i-warn' />
              </svg>
            </span>
          Due to changes to your details, your foster status is pending review.
          </p>
        </section>
      )
    }
  }
}

export default ProfileNotification
