import _ from 'utils/lodash'
import React, { PropTypes } from 'react'

export class SearchResultCard extends React.Component {
  static propTypes = {
    facility: PropTypes.object.isRequired
  }

  get distance () {
    let d = this.props.facility.distance_in_miles
    if (d) {
      let cleanVal = String(d).replace(/[^0-9\.]+/g, '') || 0
      // set to 2 decimal places, then convert back to float
      return `${parseFloat(parseFloat(cleanVal).toFixed(2))} miles`
    }
  }

  get address () {
    let facility = this.props.facility
    let cityStateZip = ''
    cityStateZip += _.retitleize(facility.facility_city)
    cityStateZip += ` ${facility.facility_state}`
    cityStateZip += ` ${facility.facility_zip}`
    return (
      <span>
        {_.retitleize(facility.facility_address)}
        <br />
        {cityStateZip}
      </span>
    )
  }

  render () {
    let facility = this.props.facility
    return (
      <div className='search-card card' style={{minHeight: '220px'}}>
        <div className='card-section'>
          <address>
            <h4 className='t-serif t-epsilon'>
              {facility.facility_name}
            </h4>
            {this.address}
            <br />
            {facility.facility_telephone_number}
          </address>
          <p>
            Licensed {facility.license_first_date}
          </p>
        </div>
        <div className='search-card-meta'>
          <a href='#' className='search-card-fave'>
            <span className='ui-icon i-medium i-warn'>
              <svg>
                <use xlinkHref='#i-star' />
              </svg>
            </span>
          </a>
          <div className='search-card-detail'>
            {this.distance}
          </div>
        </div>
      </div>
    )
  }
}

export default SearchResultCard
