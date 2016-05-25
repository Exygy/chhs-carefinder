import _ from 'utils/lodash'
import React, { PropTypes } from 'react'

export class Facility extends React.Component {
  static propTypes = {
    facility: PropTypes.object.isRequired,
  }

  get facilityAddress () {
    return this.props.facility.facility_address + ", " +
    this.props.facility.facility_city + " " +
    this.props.facility.facility_state + ", " +
    this.props.facility.facility_zip
  }

  get facilityLicense () {
    let license = this.props.facility.licensee
    if(this.props.facility.facility_status == "LICENSED"){
      license += " " + new Date(this.props.facility.license_first_date)
    }
    return license
  }

  get facilityGoogleSearchLink () {
    return "https://www.google.com#q="+ encodeURI(this.props.facility.facility_name) +"+california"
  }

  render () {
    return (
      <div>
        <h3><a href={this.facilityGoogleSearchLink} target="_blank">{this.props.facility.facility_name}</a></h3>
        <p>{this.facilityAddress}</p>
        <p>{this.props.facility.facility_telephone_number}</p>
        <p>{this.facilityLicense}</p>
      </div>
    )
  }
}

export default Facility
