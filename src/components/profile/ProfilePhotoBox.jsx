import React, { PropTypes } from 'react'

export class ProfilePhotoBox extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    let { firstName, gender, image, maritalStatus, religion, race } = this.props.user
    return (
      <figure className='caption-overlay image-block'>
        <img src={image} className='full-image' />
        <figcaption className='caption-overlay-text'>
          <ul className='meta-list icon-list no-bullet'>
            <li className='meta-list-item t-caps'>{firstName}</li>
            <li className='meta-list-item'>Gender: {gender}</li>
            <li className='meta-list-item'>Marital Status: {maritalStatus}</li>
            <li className='meta-list-item'>Religion: {religion}</li>
            <li className='meta-list-item'>Race: {race}</li>
          </ul>
        </figcaption>
      </figure>
    )
  }
}

export default ProfilePhotoBox
