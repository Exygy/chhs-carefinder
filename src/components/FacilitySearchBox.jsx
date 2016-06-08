import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/facilities'
import Geosuggest from 'react-geosuggest'

const mapStateToProps = (state) => ({
  searchQuery: state.facilities.searchQuery,
  licensed: state.facilities.licensed,
  geoSearch: state.facilities.geoSearch
})

export class FacilitySearchBox extends React.Component {
  static propTypes = {
    children: PropTypes.object,
    showLicensedCheckbox: PropTypes.bool,
    resultCount: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    getFacilities: PropTypes.func.isRequired,
    setFacilityGeoSearch: PropTypes.func.isRequired,
    setFacilitySearchQuery: PropTypes.func.isRequired,
    setFacilityLicensed: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    licensed: PropTypes.bool.isRequired,
    geoSearch: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {geoSearch: {}, searchQuery: '', errorMsg: ''}
  }

  onSubmit = (e) => {
    e.preventDefault()
    // only allow submit if user has selected a location from the geosuggest dropdown
    if (!_.isEmpty(this.state.geoSearch)) {
      this.props.setFacilityGeoSearch(this.state.geoSearch)
      this.props.setFacilitySearchQuery(this.state.searchQuery)
      this.props.onSubmit()
      // reset local state
      this.setState({geoSearch: {}})
      this.setState({searchQuery: ''})
      this.setState({errorMsg: ''})
    } else {
      this.setState({errorMsg: 'Please select a location from the dropdown list.'})
    }
  }

  updateLicensed = (e) => {
    this.props.setFacilityLicensed(!this.props.licensed)
    this.props.onSubmit()
  }

  handleSuggestSelect = (suggest) => {
    let coords = {
      lat: suggest.location.lat,
      lng: suggest.location.lng
    }
    this.setState({geoSearch: coords})
    this.setState({searchQuery: suggest.label})
    // this.props.setFacilityGeoSearch(location)
    // this.props.setFacilitySearchQuery(suggest.label)
    // this.props.onSubmit()
  }

  get licensedCheckbox () {
    if (!this.props.showLicensedCheckbox) return ''
    return (
      <div className='large-4 columns'>
        <input
          id='licensed'
          type='checkbox'
          checked={this.props.licensed}
          onChange={this.updateLicensed} />
        <label className='t-small' htmlFor='licensed'>
          Show only licensed facilities
        </label>
      </div>
    )
  }

  get error () {
    return <p className='form-error is-visible margin-top'>{this.state.errorMsg}</p>
  }

  render () {
    return (
      <div className='callout large'>
        <h2 className='t-serif t-delta'>
          Find Foster Family Agencies In Your Area
        </h2>
        {this.props.children}
        <form onSubmit={this.onSubmit}>
          <div className='row'>
            <div className='large-8 columns'>
              <div className='search-input-group input-group large-9'>
                <Geosuggest
                  inputClassName='search-input input-group-field'
                  country='us'
                  types={['(regions)']}
                  initialValue={this.props.searchQuery}
                  placeholder='Enter a city or zipcode'
                  onSuggestSelect={this.handleSuggestSelect}
                  autoActivateFirstSuggest
                  ref='geosuggest'
                />
                <div className='input-group-button'>
                  <input
                    type='submit'
                    className='search-button button'
                    defaultValue='Search' />
                </div>
              </div>
            </div>
            {this.licensedCheckbox}
          </div>
        </form>
        {this.props.resultCount}
        {this.error}
      </div>
    )
  }
}

FacilitySearchBox.defaultProps = { showLicensedCheckbox: true }

export default connect(mapStateToProps, actions)(FacilitySearchBox)
