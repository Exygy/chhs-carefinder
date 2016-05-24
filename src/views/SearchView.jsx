import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/facilities'

const mapStateToProps = (state) => ({
  filterByFavorites: state.facilities.filterByFavorites
})

export class SearchView extends React.Component {

  static propTypes = {
    children: PropTypes.element,
    routes: PropTypes.array
  }

  get message () {
    if (_.last(this.props.routes).path === 'favorites') {
      return 'Search Favorites'
    } else {
      return 'Search'
    }
  }

  render () {
    console.log(this.props)
    return (
      <div>
        {this.message}
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(SearchView)
