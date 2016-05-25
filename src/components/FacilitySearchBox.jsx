import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/facilities'
import Geosuggest from 'react-geosuggest'

const mapStateToProps = (state) => ({
  searchQuery: state.facilities.searchQuery
})

export class FacilitySearchBox extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    getFacilities: PropTypes.func.isRequired,
    setFacilityGeoSearch: PropTypes.func.isRequired,
    setFacilitySearchQuery: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired
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

  handleSuggestSelect = (suggest) => {
    let location = {
      lat: suggest.location.lat,
      lng: suggest.location.lng
    }
    this.props.setFacilityGeoSearch(location)
    this.props.setFacilitySearchQuery(suggest.label)
    this.props.onSubmit()
  }

  render () {
    return (
      <div className='callout large bg-light-gray'>
        <h2 className='t-serif t-gamma'>
          Find Foster Family Agencies in Your Area
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed libero ligula, mattis eu justo at, pulvinar efficitur lectus.
        </p>
        <form onSubmit={this.onSubmit}>
          <div className='search-input-group input-group'>
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
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(FacilitySearchBox)
