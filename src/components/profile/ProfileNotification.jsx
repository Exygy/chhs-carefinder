import React from 'react'

export class ProfileNotification extends React.Component {
  render () {
    return (
      <section className='block attention'>
        <p className='has-icon'>
          <span className='ui-icon i-base i-white'>
            <svg>
              <use xlinkHref='#i-mail' />
            </svg>
          </span>
        Due to changes to your details, your foster status is pending review.
        </p>
      </section>
    )
  }
}

export default ProfileNotification
