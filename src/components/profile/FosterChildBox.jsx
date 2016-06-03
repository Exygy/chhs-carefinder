import React, { PropTypes } from 'react'

export class FosterChildBox extends React.Component {
  static propTypes = {
    fosterChild: PropTypes.object.isRequired
  }

  render () {
    let { birthday, caseId, firstName, fosterStartDate, image, lastName } = this.props.fosterChild
    return (
      <div className='media-object'>
        <div className='media-object-section'>
          <img src={image} />
        </div>

        <div className='media-object-section'>
          <ul className='meta-list no-bullet'>
            <li className='meta-list-item t-caps'>{firstName} {lastName}</li>
            <li className='meta-list-item'>Case ID: {caseId}</li>
            <li className='meta-list-item'>Birthday: {birthday}</li>
            <li className='meta-list-item'>Fostering Since: {fosterStartDate}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default FosterChildBox
