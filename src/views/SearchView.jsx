import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/facilities'
import Equalizer from 'components/vendor/Equalizer'
import FacilitySearchBox from 'components/FacilitySearchBox'
import SearchResultCard from 'components/SearchResultCard'

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
          <div className='large-6 columns' key={i}>
            <SearchResultCard facility={facility} />
          </div>
        )
      })
      return list
    } else {
      return (
        <div>
          No facilities found.
        </div>
      )
    }
  }

  render () {
    return (
      <div className='content with-sticky-header'>
        <section className='row padding-top--2x padding-bottom'>
          <div className='large-12 columns'>
            <FacilitySearchBox onSubmit={this.props.getFacilities} />
          </div>
        </section>
        <section className='row padding-bottom--2x'>
          <Equalizer>
            {this.facilityList}
          </Equalizer>
        </section>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(SearchView)
