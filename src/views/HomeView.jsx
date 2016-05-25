import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Hero from 'components/Hero'
import FacilitySearchBox from 'components/FacilitySearchBox'
import AdditionalResourcesCallout from 'components/AdditionalResourcesCallout'

export class HomeView extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  goToSearchView = () => {
    this.props.dispatch(push('/search'))
  }

  render () {
    return (
      <div className='content with-hero'>
        <Hero />
        <section className='row padding-top--2x padding-bottom'>
          <div className='large-12 columns'>
            <FacilitySearchBox onSubmit={this.goToSearchView} />
          </div>
          <div className='large-12 columns'>
            <AdditionalResourcesCallout />
          </div>
        </section>
      </div>
    )
  }
}

export default connect()(HomeView)
