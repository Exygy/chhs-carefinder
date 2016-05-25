import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/facilities'
import FacilitySearchBox from 'components/FacilitySearchBox'

const mapStateToProps = (state) => ({
  facilities: state.facilities.results
})

export class SearchView extends React.Component {

  static propTypes = {
    routes: PropTypes.array,
    facilities: PropTypes.array.isRequired,
    getFacilities: PropTypes.func.isRequired
  }

  componentWillMount () {
    this.props.getFacilities()
  }

  get message () {
    if (_.last(this.props.routes).path === 'favorites') {
      return 'Search Favorites'
    } else {
      return 'Search'
    }
  }

  get facilityList () {
    let facilities = this.props.facilities
    if (this.props.facilities.length) {
      let i = 0
      let list = facilities.map((facility) => {
        i++
        return (
          <li key={i}>
            {_.retitleize(facility.facility_name)}
            {' - '}
            {_.retitleize(facility.county_name)}, {facility.facility_zip}
            <br />
            {facility.range_in_miles}
          </li>
        )
      })
      return list
    } else {
      return 'No facilities found.'
    }
  }

  render () {
    return (
      <div className='content with-sticky-header'>
        <section className='row padding-top--2x padding-bottom'>
          <div className='large-12 columns'>
            <FacilitySearchBox onSubmit={this.props.getFacilities} />
          </div>
          {this.facilityList}
        </section>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(SearchView)
