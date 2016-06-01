import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/user'
import ContactInfoBox from 'components/profile/ContactInfoBox'
import FosterChildrenContainer from 'components/profile/FosterChildrenContainer'
import HouseholdDetailsBox from 'components/profile/HouseholdDetailsBox'
import ProfileInfoBox from 'components/profile/ProfileInfoBox'
import ProfileNotification from 'components/profile/ProfileNotification'
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
      fosterStartDate: 'May 31, 2005'
    }

    let exampleFosterChild2 = {
      name: 'Mateosh',
      caseId: '5234',
      birthday: 'May 31, 2001',
      fosterStartDate: 'May 31, 2003'
    }

    let exampleFosterChildren = [exampleFosterChild, exampleFosterChild2]

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

            <FosterChildrenContainer fosterChildren={exampleFosterChildren} />

          </div>
          <div className='medium-8 columns'>

            <ProfileNotification />

            <ContactInfoBox email='nothing@ha.com' phone='1238790' preferredContactMode='Email' />

            <ProfileInfoBox user={this.props.loggedInUser} />

            <HouseholdDetailsBox user={this.props.loggedInUser} />

          </div>
        </section>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(ProfileView)
