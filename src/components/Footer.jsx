import React from 'react'

export class Footer extends React.Component {
  static propTypes = {
  }

  render () {
    return (
      <footer className='footer stuck is-at-bottom'>
        <div className='row'>
          <div className='medium-4 columns'>
            <p className='footer-copywrite'>
              Copyright &copy; 2016 State of CA
            </p>
          </div>
          <div className='medium-4 columns'>
            <p className='footer-links'>
              <a href='http://www.cdss.ca.gov/cdssweb/privacy.htm' target='_blank' className='footer-link'>
                Privacy Policy
              </a>
            </p>
          </div>
          <div className='medium-4 columns'>
            <p className='footer-contact'>
              1-800-KIDS-4-US (1-800-543-7487)
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
