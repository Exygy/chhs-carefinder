import React, { PropTypes } from 'react'

export class FosterChildBox extends React.Component {
  static propTypes = {
    fosterChild: PropTypes.object.isRequired
  }

  render () {
    let { birthday, caseId, fosterStartDate, name } = this.props.fosterChild
    return (
      <div className='media-object'>
        <div className='media-object-section'>
          <img src='http://placehold.it/81x111' />
        </div>

        <div className='media-object-section'>
          <ul className='meta-list no-bullet'>
            <li className='meta-list-item t-caps'>{name}</li>
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
