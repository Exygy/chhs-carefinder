import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/facilities'
import Geosuggest from 'react-geosuggest'

const mapStateToProps = (state) => ({
  searchQuery: state.facilities.searchQuery,
  licensed: state.facilities.licensed,
  loading: state.facilities.loading,
  geoSearch: state.facilities.geoSearch
})

export class FacilitySearchBox extends React.Component {
  static propTypes = {
    children: PropTypes.object,
    className: PropTypes.string,
    showLicensedCheckbox: PropTypes.bool,
    forceOnSubmit: PropTypes.bool,
    resultCount: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    getFacilities: PropTypes.func.isRequired,
    setFacilityGeoSearch: PropTypes.func.isRequired,
    setFacilitySearchQuery: PropTypes.func.isRequired,
    setFacilityLicensed: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    licensed: PropTypes.bool.isRequired,
    geoSearch: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {geoSearch: {}, searchQuery: '', errorMsg: '', waitForSelection: true}
  }

  onSubmit = (e) => {
    if (e) e.preventDefault()
    // only allow submit if user has selected a location from the geosuggest dropdown
    if (!_.isEmpty(this.state.geoSearch)) {
      this.props.setFacilityGeoSearch(this.state.geoSearch)
      this.props.setFacilitySearchQuery(this.state.searchQuery)
      this.props.onSubmit()
      // reset local state
      this.setState({geoSearch: {}, searchQuery: '', errorMsg: ''})
    } else if (this.props.forceOnSubmit) {
      // if we're coming from the homepage we want to force the form submission
      // so that it always takes us to the SearchView page
      this.props.onSubmit()
    } else {
      // check if the user typed in something random in the search box
      if (this.props.searchQuery !== this.refs.geosuggest.refs.input.refs.input.value) {
        this.setState({errorMsg: 'Please select a location from the dropdown list.'})
      }
    }
  }

  updateLicensed = (e) => {
    this.props.setFacilityLicensed(!this.props.licensed)
    this.props.onSubmit()
  }

  handleSuggestSelect = (suggest) => {
    // if there's no placeId it could be a false positive e.g. we just typed in some gibberish
    if (!suggest.placeId) {
      this.setState({errorMsg: 'Please select a location from the dropdown list.'})
      return false
    }
    let coords = {
      lat: suggest.location.lat,
      lng: suggest.location.lng
    }
    this.setState({geoSearch: coords, searchQuery: suggest.label})
  }

  onKeyPressEnter = () => {
    if (this.state.searchQuery) {
      this.onSubmit()
    }
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

  get resultCount () {
    if (this.props.loading) {
      return (
        <img
          style={{height: '21px', marginLeft: '10px', display: 'inline-block'}}
          src={require('images/loading-animation.svg')} />
      )
    } else {
      return this.props.resultCount
    }
  }

  formatSuggestLabel = (suggest) => {
    return _.replace(suggest.description, ', United States', '')
  }

  render () {
    return (
      <div className={`callout large bg-light-gray ${this.props.className}`}>
        <h2 className='t-serif t-delta'>
          Find Foster Family Agencies In Your Area
        </h2>
        {this.props.children}
        <form onSubmit={this.onSubmit}>
          <div className='row'>
            <div className='large-8 columns'>
              <div className='search-input-group input-group large-9'>
                <Geosuggest
                  autoActivateFirstSuggest
                  country='us'
                  inputClassName='search-input input-group-field'
                  types={['(regions)']}
                  initialValue={this.props.searchQuery}
                  placeholder='Enter a city or zipcode'
                  onSuggestSelect={this.handleSuggestSelect}
                  onKeyPressEnter={this.onKeyPressEnter}
                  getSuggestLabel={this.formatSuggestLabel}
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
        {this.resultCount}
        {this.error}
      </div>
    )
  }
}

FacilitySearchBox.defaultProps = {
  showLicensedCheckbox: true,
  forceOnSubmit: false,
  className: ''
}

export default connect(mapStateToProps, actions)(FacilitySearchBox)
