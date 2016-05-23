import React, { PropTypes } from 'react'

function ProfileView ({ children }) {
  return (
    <div>
      My Profile
    </div>
  )
}

ProfileView.propTypes = {
  children: PropTypes.element
}

export default ProfileView
