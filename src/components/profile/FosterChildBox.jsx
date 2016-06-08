import React, { PropTypes } from 'react'

export class FosterChildBox extends React.Component {
  static propTypes = {
    fosterChild: PropTypes.object.isRequired
  }

  get fosterDate () {
    let { fosterEndDate, fosterStartDate } = this.props.fosterChild

    if (fosterEndDate.length > 0) {
      return <li className='meta-list-item'><strong>Fostered From</strong>: {fosterStartDate} - {fosterEndDate}</li>
    } else {
      return <li className='meta-list-item'><strong>Fostering Since</strong>: {fosterStartDate}</li>
    }
  }

  render () {
    let { birthday, caseId, firstName, image, imageAlt, lastName } = this.props.fosterChild
    return (
      <div className='media-object'>
        <div className='media-object-section'>
          <img src={image} alt={imageAlt} />
        </div>

        <div className='media-object-section'>
          <ul className='meta-list no-bullet'>
            <li className='meta-list-item t-caps'>{firstName} {lastName}</li>
            <li className='meta-list-item'><strong>Case ID</strong>: {caseId}</li>
            <li className='meta-list-item'><strong>Birthday</strong>: {birthday}</li>
            {this.fosterDate}
          </ul>
        </div>
      </div>
    )
  }
}

export default FosterChildBox
