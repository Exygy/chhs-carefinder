import React, { PropTypes } from 'react'

export class ProfilePhotoBox extends React.Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    maritalStatus: PropTypes.oneOf(['Divorced', 'Married', 'Single', 'Widowed']).isRequired,
    race: PropTypes.string.isRequired,
    religion: PropTypes.string.isRequired
  }

  render () {
    return (
      <figure className='caption-overlay image-block'>
        <img src='http://placehold.it/358x440' className='full-image' />
        <figcaption className='caption-overlay-text'>
          <ul className='meta-list icon-list no-bullet'>
            <li className='meta-list-item t-caps'>{this.props.firstName}</li>
            <li className='meta-list-item'>Gender: {this.props.gender}</li>
            <li className='meta-list-item'>Marital Status: {this.props.maritalStatus}</li>
            <li className='meta-list-item'>Religion: {this.props.religion}</li>
            <li className='meta-list-item'>Race: {this.props.race}</li>
          </ul>
        </figcaption>
      </figure>
    )
  }
}

export default ProfilePhotoBox
