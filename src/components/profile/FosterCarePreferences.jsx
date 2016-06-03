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
            Age of Children: {age}
          </li>
          <li className='meta-list-item'>
            Gender of Children: {gender}
          </li>
          <li className='meta-list-item'>
            Type of Children: {ability}
          </li>
        </ul>
      </section>
    )
  }
}

export default FosterCarePreferences
