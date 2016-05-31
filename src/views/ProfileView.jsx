import React, { PropTypes } from 'react'

function ProfileView ({ children }) {
  return (

    <section className='row collapse padding-bottom'>
      <div className='medium-4 columns'>

        <figure className='caption-overlay image-block'>
          <img src='http://placehold.it/358x440' className='full-image' />
          <figcaption className='caption-overlay-text'>
            <ul className='meta-list icon-list no-bullet'>
              <li className='meta-list-item t-caps'>James Middleditch</li>
              <li className='meta-list-item'>Gender: Male</li>
              <li className='meta-list-item'>Marital Status: Widower</li>
              <li className='meta-list-item'>Religion: Bábism</li>
              <li className='meta-list-item'>Race: Native American</li>
            </ul>
          </figcaption>
        </figure>
        <section className='content-block block bg-white'>
          <header className='block-header'>
            <h3 className='block-title t-base'>Foster Children</h3>
            <span className='block-edit'>
              <a href='#' className='a-alert'>Edit</a>
            </span>
          </header>

          <div className='media-object'>
            <div className='media-object-section'>
              <img src='http://placehold.it/81x111' />
            </div>

            <div className='media-object-section'>
              <ul className='meta-list no-bullet'>
                <li className='meta-list-item t-caps'>James Middleditch</li>
                <li className='meta-list-item'>Case ID: 50096</li>
                <li className='meta-list-item'>Birthday: February 11, 1999</li>
                <li className='meta-list-item'>Fostering Since: April 3, 2015</li>
              </ul>
            </div>
          </div>

          <div className='media-object'>
            <div className='media-object-section'>
              <img src='http://placehold.it/81x111' />
            </div>

            <div className='media-object-section'>
              <ul className='meta-list no-bullet'>
                <li className='meta-list-item t-caps'>James Middleditch</li>
                <li className='meta-list-item'>Case ID: 50096</li>
                <li className='meta-list-item'>Birthday: February 11, 1999</li>
                <li className='meta-list-item'>Fostering Since: April 3, 2015</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className='medium-8 columns'>
        <section className='block primary'>
          <p className='has-icon'>
            <span className='ui-icon i-base i-white'>
              <svg>
                <use xlinkHref='#i-mail' />
              </svg>
            </span> JAMES MIDDLEDITCH</p>
        </section>

        <section className='block attention'>
          <a href='#' className='block-edit'>Edit</a>
          <ul className='meta-list no-bullet'>
            <li className='meta-list-item'>
              <span className='ui-icon i-base i-white'>
                <svg>
                  <use xlinkHref='#i-mail' />
                </svg>
              </span>
            happydaddy@gmail.com
            </li>
            <li className='meta-list-item'>
              <span className='ui-icon i-base i-white'>
                <svg>
                  <use xlinkHref='#i-phone' />
                </svg>
              </span>
            415-555-1212
            </li>
            <li className='meta-list-item'>Preferred Mode of Contact: Phone></li>
          </ul>
        </section>

        <section className='block'>
          <header className='block-header'>
            <h3 className='block-title t-base'>Profile</h3>
            <span className='block-edit'>
              <a href='#' className='a-alert'>Edit</a>
            </span>
          </header>

          <div className='row collapse'>
            <div className='large-6 columns'>
              <ul className='meta-list tall'>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-gender' />
                    </svg>
                  </span>
                Gender: Male
                </li>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-love' />
                    </svg>
                  </span>
                Marital Status: Widower
                </li>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-love' />
                    </svg>
                  </span>
                Religion: Bábism
                </li>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-religion' />
                    </svg>
                  </span> Race: Native American
                </li>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-job' />
                    </svg>
                  </span>
                Employment Status: Full Time
                </li>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-time' />
                    </svg>
                  </span>
                Ocupation: Software Engineer
                </li>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-money' />
                    </svg>
                  </span>
                Annual Income: $100,000
                </li>
              </ul>
            </div>

            <div className='large-6 columns'>
              <ul className='meta-list icon-list no-bullet'>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-care' />
                    </svg>
                  </span>
                Medical History:
                  <ul className='meta-list nested no-bullet'>
                    <li className='meta-list-item'>Migraines</li>
                    <li className='meta-list-item'>PVCs</li>
                    <li className='meta-list-item'>Shoulder Surgery (2000)</li>
                    <li className='meta-list-item'>Inflammed Gut</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
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
              <ul className='meta-list no-bullet'>
                <li className='meta-list-item'>Medical History:
                  <ul className='meta-list nested no-bullet'>
                    <li className='meta-list-item'>Migraines</li>
                    <li className='meta-list-item'>PVCs</li>
                    <li className='meta-list-item'>Shoulder Surgery (2000)</li>
                    <li className='meta-list-item'>Inflammed Gut</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

ProfileView.propTypes = {
  children: PropTypes.element
}

export default ProfileView
