import React from 'react'

export class ProfileNotification extends React.Component {
  render () {
    return (
      <section className='block primary'>
        <p className='has-icon'>
          <span className='ui-icon i-base i-white'>
            <svg>
              <use xlinkHref='#i-mail' />
            </svg>
          </span>
        Yo, there's a notification
        </p>
      </section>
    )
  }
}

export default ProfileNotification
