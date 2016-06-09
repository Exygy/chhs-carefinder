import React from 'react'

export class Footer extends React.Component {
  static propTypes = {
  }

  render () {
    return (
      <footer className='footer stuck is-at-bottom'>
        <div className='row center'>
          <div className='medium-4 medium-centered columns'>
            <div className='row center'>
              <img src={require('../images/seal_ca_bw.png')} alt='California Seal' />
            </div>
            <div className='row center'>
              <div className='medium-6 columns'>
                <p className='footer-copywrite'>
                  Copyright &copy; 2016<br />
                  State of CA
                </p>
              </div>
              <div className='medium-6 columns'>
                <p className='footer-contact'>
                  1-800-KIDS-4-US<br />
                  <a href='http://www.cdss.ca.gov/cdssweb/privacy.htm' target='_blank' className='footer-link'>
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
