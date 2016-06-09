import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/user'
import ContactInfoBox from 'components/profile/ContactInfoBox'
import FosterCarePreferences from 'components/profile/FosterCarePreferences'
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
    loggedInUser: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired
  }

  render () {
    let user = this.props.loggedInUser
    return (
      <div className='padding-top--2x'>
        <section className='row collapse padding-top--2x padding-bottom'>
          <div className='medium-4 columns'>

            <ProfilePhotoBox user={user} />

            <FosterChildrenContainer fosterChildren={user.fosterChildren} />

          </div>
          <div className='medium-8 columns'>

            <ProfileNotification status={user.status} />

            <ContactInfoBox updateUser={this.props.updateUser} user={user} />

            <ProfileInfoBox updateUser={this.props.updateUser} user={user} />

            <HouseholdDetailsBox updateUser={this.props.updateUser} user={user} />

            <FosterCarePreferences updateUser={this.props.updateUser} user={user} />

          </div>
        </section>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(ProfileView)
