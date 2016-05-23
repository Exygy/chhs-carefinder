import React from 'react'

export class Footer extends React.Component {
  static propTypes = {
  }

  render () {
    return (
      <footer className='footer'>
        <div className='row'>
          <div className='small-12 columns'>
            <p className='footer-slogan'>
              {"Finger lickin' good"}
            </p>
            <p className='footer-links'>
              <a href='#' className='footer-link'>Home</a>
              <a href='#' className='footer-link'>Blog</a>
              <a href='#' className='footer-link'>Pricing</a>
              <a href='#' className='footer-link'>About</a>
              <a href='#' className='footer-link'>Faq</a>
              <a href='#' className='footer-link'>Contact</a>
            </p>
            <p className='footer-copywrite'>Copyright &copy; 2016</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
