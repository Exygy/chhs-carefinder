import React from 'react'

export class Footer extends React.Component {
  static propTypes = {
  }

  render () {
    return (
      <footer className='footer stuck is-at-bottom'>
        <div className='row'>
          <div className='medium-4 columns'>
            <p className='footer-copywrite'>Copywrite not copypwrite © 2015</p>
          </div>
          <div className='medium-4 columns'>
            <p className='footer-links'>
              <a href='#' className='footer-link'>Privacy Policy</a>
            </p>
          </div>
          <div className='medium-4 columns'>
            <p className='footer-contact'>1(800)-Kids</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
