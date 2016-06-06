import React, { PropTypes } from 'react'

export class FosterCarePreferences extends React.Component {
  static propTypes = {
    fosterCarePreferences: PropTypes.object.isRequired
  }

  render () {
    let { ability, age, gender } = this.props.fosterCarePreferences
    return (
      <section className='content-block block bg-white'>
        <header className='block-header'>
          <h3 className='block-title t-base'>Foster Care Preferences</h3>
          <span className='block-edit'>
            <a href='#' className='a-alert'>Edit</a>
          </span>
        </header>
        <ul className='meta-list tall'>
          <li className='meta-list-item'>
            <strong>Age of Children</strong>: {age}
          </li>
          <li className='meta-list-item'>
            <strong>Gender of Children</strong>: {gender}
          </li>
          <li className='meta-list-item'>
            <strong>Type of Children</strong>: {ability}
          </li>
        </ul>
      </section>
    )
  }
}

export default FosterCarePreferences
