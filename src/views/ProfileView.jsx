import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/user'
import ContactInfoBox from 'components/profile/ContactInfoBox'
import FosterChildBox from 'components/profile/FosterChildBox'
import ProfileInfoBox from 'components/profile/ProfileInfoBox'
import ProfilePhotoBox from 'components/profile/ProfilePhotoBox'

const mapStateToProps = (state) => ({
  loggedInUser: state.user.loggedInUser
})

export class ProfileView extends React.Component {

  static propTypes = {
    loggedInUser: PropTypes.object.isRequired
  }

  render () {
    // let { firstName } = this.props.loggedInUser

    let exampleFosterChild = {
      name: 'Mateo',
      caseId: '5234',
      birthday: 'May 31, 2001',
      fosterStartDate: 'May 31, 2004'
    }

    return (
      <div className='padding-top--2x'>
        <section className='row collapse padding-top--2x padding-bottom'>
          <div className='medium-4 columns'>

            <ProfilePhotoBox
              firstName='Testman'
              gender='Male'
              maritalStatus='Widowed'
              race='Native American'
              religion='Bábism' />

            <section className='content-block block bg-white'>
              <header className='block-header'>
                <h3 className='block-title t-base'>Foster Children</h3>
                <span className='block-edit'>
                  <a href='#' className='a-alert'>Edit</a>
                </span>
              </header>

              <FosterChildBox fosterChild={exampleFosterChild} />

              <FosterChildBox fosterChild={exampleFosterChild} />

            </section>
          </div>
          <div className='medium-8 columns'>
            <section className='block primary'>
              <p className='has-icon'>
                <span className='ui-icon i-base i-white'>
                  <svg>
                    <use xlinkHref='#i-mail' />
                  </svg>
                </span>
              JAMES MIDDLEDITCH
              </p>
            </section>

            <ContactInfoBox email='nothing@ha.com' phone='1238790' preferredContactMode='Email' />

            <ProfileInfoBox user={this.props.loggedInUser} />

            <section className='content-block block bg-white'>
              <header className='block-header'>
                <h3 className='block-title t-base'>Household Details</h3>
                <span className='block-edit'>
                  <a href='#' className='a-alert'>Edit</a>
                </span>
              </header>

              <div className='row'>
                <div className='large-6 columns'>
                  <ul className='meta-list tall icon-list no-bullet'>
                    <li className='meta-list-item'>Gender: Male</li>
                    <li className='meta-list-item'>Marital Status: Widower</li>
                    <li className='meta-list-item'>Religion: Bábism</li>
                    <li className='meta-list-item'>Race: Native American</li>
                    <li className='meta-list-item'>Employment Status: Full Time</li>
                    <li className='meta-list-item'>Ocupation: Software Engineer</li>
                    <li className='meta-list-item'>Annual Income: $100,000</li>
                  </ul>
                </div>

                <div className='large-6 columns'>
                  {this.medicalHistoryList}
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(ProfileView)
