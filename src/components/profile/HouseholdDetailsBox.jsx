import React, { PropTypes } from 'react'

export class HouseholdDetailsBox extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    let { address, household } = this.props.user
    return (
      <section className='content-block block bg-white'>
        <header className='block-header'>
          <h3 className='block-title t-base'>Household Details</h3>
          <span className='block-edit'>
            <a href='#' className='a-alert'>Edit</a>
          </span>
        </header>

        <div className='block primary'>
          <p className='has-icon'>
          If you make changes to any of the following information, your parenting status will undergo review.
          </p>
        </div>

        <section className='row collapse padding-top--2x padding-bottom'>
          <div className='medium-4 columns'>
            <ul className='meta-list tall'>
              <li className='meta-list-item'>
                <span className='ui-icon i-base i-primary'>
                  <svg>
                    <use xlinkHref='#i-address' />
                  </svg>
                </span>
                <strong>Address</strong>:
              </li>
              <li className='meta-list-item'>
                {address.street}
              </li>
              <li className='meta-list-item'>
                {address.city}, {address.state}
              </li>
              <li className='meta-list-item'>
                {address.zipcode}
              </li>
            </ul>
          </div>
          <div className='medium-4 columns'>
            <ul className='meta-list tall'>
              <li className='meta-list-item'>
                <strong>Home Size</strong>: {household.homeSize.value} {household.homeSize.unit}
              </li>
              <li className='meta-list-item'>
                <strong>Bedrooms</strong>: {household.bedrooms}
              </li>
              <li className='meta-list-item'>
                <strong>Adults at Home</strong>: {household.adultsAtHome}
              </li>
              <li className='meta-list-item'>
                <strong>Children at Home</strong>: {household.childrenAtHome}
              </li>
            </ul>
          </div>
        </section>
      </section>
    )
  }
}

export default HouseholdDetailsBox
