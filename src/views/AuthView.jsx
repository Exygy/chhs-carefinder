import React, { PropTypes } from 'react'

function AuthView ({ children }) {
  return (
    <div>
      Sign In + Sign Up
    </div>
  )
}

AuthView.propTypes = {
  children: PropTypes.element
}

export default AuthView
