import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/facilities'
import { StickyContainer, Sticky } from 'react-sticky'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactList from 'react-list'
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

  componentWillReceiveProps (nextProps) {
    window.scrollTo(0, 40)
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
        resultCount += ` within 100 miles of "${this.props.searchQuery}"`
      }
      return resultCount
    } else if (this.props.searchQuery) {
      return `No results matching "${this.props.searchQuery}"`
    }
  }

  renderItem = (index, key) => {
    let facility = this.props.facilities[index]
    return (
      <div className='large-6 columns end' key={`${key}-${facility.facility_number}`}>
        <SearchResultCard facility={facility} />
      </div>
    )
  }

  renderItems = (items, ref) =>
    <ReactCSSTransitionGroup
      component='div'
      ref={ref}
      transitionName='fade'
      transitionEnterTimeout={350}
      transitionLeaveTimeout={200}>
      {items}
    </ReactCSSTransitionGroup>

  get facilityList () {
    return (
      <ReactList
        ref={'reactList'}
        itemRenderer={this.renderItem}
        itemsRenderer={this.renderItems}
        length={this.props.facilities.length}
        pageSize={35}
      />
    )
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
