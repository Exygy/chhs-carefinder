import React, { PropTypes } from 'react'

export class ProfilePhotoBox extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    let { dateOfBirth, firstName, id, image, lastName, ssn } = this.props.user
    return (
      <figure className='caption-overlay image-block'>
        <img src={image} className='full-image' alt='My photo: A smiling 40-year-old man' />
        <figcaption className='caption-overlay-text'>
          <ul className='meta-list icon-list no-bullet'>
            <li className='meta-list-item t-caps'><strong>{firstName} {lastName}</strong></li>
            <li className='meta-list-item'>Foster Home ID: {id}</li>
            <li className='meta-list-item'>
              SSN: xxx-xx-{ssn.slice(-4)}
            </li>
            <li className='meta-list-item'>Birthdate: {dateOfBirth}</li>
          </ul>
        </figcaption>
      </figure>
    )
  }
}

export default ProfilePhotoBox
