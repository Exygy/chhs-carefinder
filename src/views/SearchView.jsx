import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import Facility from 'components/Facility'
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

  componentDidMount () {
    var query_params = this.props.location.query;

    if(query_params.search !== undefined){
      this.state.zipcode = query_params.search
      this.searchInput.value = query_params.search
      this.zipcodeSearch()
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
        <Facility facility={facility} key={i}/>
      )
    })
    return list
  }

  get facilityResultCount () {
    let facilities = this.props.facilities
    let facility_count = this.props.facilities.length

    if(facility_count){
      return facility_count + " results found"
    }else{
      return "No results match your search"
    }
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
      <div>
        <div className='row'>
          <div className='medium-3 columns'>
            <input
              type='text'
              onChange={this.updateZipcode}
              ref={(ref) => this.searchInput = ref}
              placeholder='Zipcode'
              />
          </div>
          <div className='medium-4 columns'>
            <button type='button' className='success button' onClick={this.zipcodeSearch}>Go</button>
          </div>
        </div>

        <div className='row'>
          {this.facilityResultCount}
        </div>

        <div className='row'>
          {this.facilityList}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(SearchView)
