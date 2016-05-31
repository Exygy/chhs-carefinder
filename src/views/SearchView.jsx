import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/facilities'
import { StickyContainer, Sticky } from 'react-sticky'
import Equalizer from 'components/vendor/Equalizer'
import FacilitySearchBox from 'components/FacilitySearchBox'
import SearchResultCard from 'components/SearchResultCard'

const mapStateToProps = (state) => ({
  facilities: state.facilities.results,
  searchQuery: state.facilities.searchQuery
})

export class SearchView extends React.Component {

  static propTypes = {
    routes: PropTypes.array,
    facilities: PropTypes.array.isRequired,
    getFacilities: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired
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

  get resultCount () {
    let facilityCount = this.props.facilities.length
    if (facilityCount) {
      let resultCount = facilityCount + ' agencies'
      if (!_.isEmpty(this.props.searchQuery)) {
        resultCount += ` matching "${this.props.searchQuery}"`
      }
      return resultCount
    } else {
      return `No results matching "${this.props.searchQuery}"`
    }
  }

  get facilityList () {
    let facilities = this.props.facilities
    let list = <div />
    if (this.props.facilities.length) {
      let i = 0
      list = facilities.map((facility) => {
        i++
        return (
          <div className='large-6 columns end' key={i}>
            <SearchResultCard facility={facility} />
          </div>
        )
      })
    }
    return <Equalizer>{list}</Equalizer>
  }

  render () {
    return (
      <StickyContainer className='content with-sticky-header'>
        <Sticky style={{paddingTop: '10px', zIndex: 1}}>
          <section className='row padding-top--2x padding-bottom'>
            <div className='large-12 columns'>
              <FacilitySearchBox
                showLicensedCheckbox
                resultCount={this.resultCount}
                onSubmit={this.props.getFacilities} />
            </div>
          </section>
        </Sticky>

        <section className='row padding-bottom--2x'>
          {this.facilityList}
        </section>
      </StickyContainer>
    )
  }
}

export default connect(mapStateToProps, actions)(SearchView)
