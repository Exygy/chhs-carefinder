import React, { PropTypes } from 'react'
import Footer from 'components/Footer'

export class CoreLayout extends React.Component {
  render () {
    return (
      <div>
        {this.props.navbar}
        {this.props.content}
        <Footer />
      </div>
    )
  }
}

CoreLayout.propTypes = {
  navbar: PropTypes.element,
  content: PropTypes.element,
  children: PropTypes.element
}

export default CoreLayout
