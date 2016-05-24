import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/facilities'

const mapStateToProps = (state) => ({
  facilities: state.facilities.results
})

export class SearchView extends React.Component {

  static propTypes = {
    children: PropTypes.element,
    facilities: PropTypes.array.isRequired,
    getFacilities: PropTypes.func.isRequired,
    routes: PropTypes.array,
    setFacilityZipcode: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      zipcode: ''
    }
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
    let i = 0
    let list = facilities.map((facility) => {
      i++
      return (
        <li key={i}>
          {_.retitleize(facility.facility_name)} - {_.retitleize(facility.county_name)}
        </li>
      )
    })
    return list
  }

  updateZipcode = (e) => {
    this.setState({zipcode: e.target.value})
  }

  zipcodeSearch = () => {
    this.props.setFacilityZipcode(this.state.zipcode)
    this.props.getFacilities()
  }

  render () {
    return (
      <div className='row'>
        <div className='medium-3 columns'>
          <input
            onChange={this.updateZipcode}
            type='text'
            placeholder='Zipcode'
            />
        </div>
        <div className='medium-4 columns'>
          <button type='button' className='success button' onClick={this.zipcodeSearch}>Go</button>
        </div>
        {this.facilityList}
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(SearchView)
