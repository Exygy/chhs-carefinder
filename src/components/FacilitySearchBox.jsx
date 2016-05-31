import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/facilities'
import Geosuggest from 'react-geosuggest'

const mapStateToProps = (state) => ({
  searchQuery: state.facilities.searchQuery,
  licensed: state.facilities.licensed
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
    licensed: PropTypes.bool.isRequired
  }

  onSubmit = (e) => {
    e.preventDefault()
    // check if searchQuery has changed
    if (this.props.searchQuery !== this.refs.geosuggest.state.userInput) {
      this.props.setFacilityGeoSearch({})
      this.props.setFacilitySearchQuery(this.refs.geosuggest.state.userInput)
    }
    this.props.onSubmit()
  }

  updateLicensed = (e) => {
    this.props.setFacilityLicensed(!this.props.licensed)
    this.props.onSubmit()
  }

  handleSuggestSelect = (suggest) => {
    let location = {
      lat: suggest.location.lat,
      lng: suggest.location.lng
    }
    this.props.setFacilityGeoSearch(location)
    this.props.setFacilitySearchQuery(suggest.label)
    this.props.onSubmit()
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
      </div>
    )
  }
}

FacilitySearchBox.defaultProps = { showLicensedCheckbox: true }

export default connect(mapStateToProps, actions)(FacilitySearchBox)
