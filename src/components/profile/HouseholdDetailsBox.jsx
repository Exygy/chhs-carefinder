import React, { PropTypes } from 'react'

export class HouseholdDetailsBox extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    return (
      <section className='content-block block bg-white'>
        <header className='block-header'>
          <h3 className='block-title t-base'>Household Details</h3>
          <span className='block-edit'>
            <a href='#' className='a-alert'>Edit</a>
          </span>
        </header>

        <div className='row'>
          <div className='large-6 columns'>
            <ul className='meta-list tall icon-list no-bullet'>
              <li className='meta-list-item'>Gender: Male</li>
              <li className='meta-list-item'>Marital Status: Widower</li>
              <li className='meta-list-item'>Religion: Bábism</li>
              <li className='meta-list-item'>Race: Native American</li>
              <li className='meta-list-item'>Employment Status: Full Time</li>
              <li className='meta-list-item'>Ocupation: Software Engineer</li>
              <li className='meta-list-item'>Annual Income: $100,000</li>
            </ul>
          </div>

          <div className='large-6 columns'>
            {this.medicalHistoryList}
          </div>
        </div>
      </section>
    )
  }
}

export default HouseholdDetailsBox
