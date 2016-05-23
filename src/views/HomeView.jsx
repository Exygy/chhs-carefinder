import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/facilities'
import Hero from 'components/Hero'

const mapStateToProps = (state) => ({
  facilities: state.facilities.results
})

export class HomeView extends React.Component {
  static propTypes = {
    facilities: PropTypes.array.isRequired,
    getFacilities: PropTypes.func.isRequired,
    setFacilityGeoSearch: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      lat: '',
      lng: ''
    }

    // this.debouncedGeoSearch = _.debounce(() => {
    //   this.props.setFacilityGeoSearch(this.state.geoSearch)
    //   this.props.getFacilities()
    // }, 250)
  }

  componentWillMount () {
    this.props.getFacilities()
  }

  updateGeoLat = (e) => {
    this.setState({lat: e.target.value})
  }
  updateGeoLng = (e) => {
    this.setState({lng: e.target.value})
  }

  geoSearch = () => {
    this.props.setFacilityGeoSearch({
      lat: this.state.lat,
      lng: this.state.lng
    })
    this.props.getFacilities()
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

  render () {
    return (
      <div>
        <Hero />
        <div className='content'>
          <section className='row padding-top--2x padding-bottom--2x'>
            <div className='card'>
              <div className='card-divider'>
                This is a header
              </div>
              <div className='card-section'>
                <h4>Look at This Swag Card</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi iusto reprehenderit voluptatem odio deleniti provident aliquam qui magnam aspernatur necessitatibus.</p>
              </div>
            </div>

            <div className='row'>
              <div className='medium-3 columns'>
                <input
                  onChange={this.updateGeoLat}
                  value={this.state.lat}
                  type='text'
                  placeholder='Lat'
                  />
              </div>
              <div className='medium-3 columns'>
                <input
                  onChange={this.updateGeoLng}
                  value={this.state.lng}
                  type='text'
                  placeholder='Lng'
                  />
              </div>
              <div className='medium-4 columns'>
                <button type='button' className='success button' onClick={this.geoSearch}>Go</button>
              </div>
            </div>

            {this.facilityList}
          </section>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(HomeView)
