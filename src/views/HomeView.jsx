import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Hero from 'components/Hero'
import FacilitySearchBox from 'components/FacilitySearchBox'
import AdditionalResourcesCallout from 'components/AdditionalResourcesCallout'
import ContactUsCallout from 'components/ContactUsCallout'

export class HomeView extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  goToSearchView = () => {
    this.props.dispatch(push('/search'))
  }

  render () {
    return (
      <div className='content with-sticky-header with-hero'>
        <Hero />
        <section className='row padding-top--2x padding-bottom'>
          <div className='large-12 columns'>
            <AdditionalResourcesCallout />
          </div>
        </section>
        <section className='row padding-bottom'>
          <div className='large-12 columns'>
            <FacilitySearchBox
              showLicensedCheckbox={false}
              forceOnSubmit
              onSubmit={this.goToSearchView}>
              <p>
                Foster Family Agencies offer services to support foster children,
                such as certifying and training foster parents, providing
                professional support to foster parents, and finding temporary
                or permanent placements for children who require intensive care.
              </p>
            </FacilitySearchBox>
          </div>
        </section>
        <section className='row padding-bottom--2x'>
          <div className='large-12 columns'>
            <ContactUsCallout />
          </div>
        </section>
      </div>
    )
  }
}

export default connect()(HomeView)
