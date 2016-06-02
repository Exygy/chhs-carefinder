import _ from 'utils/lodash'
import React, { PropTypes } from 'react'

export class ProfileInfoBox extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  get medicalHistoryList () {
    let medicalHistory = this.props.user.medicalHistory
    if (_.isEmpty(medicalHistory)) {
      return <div />
    } else {
      return <div className='large-6 columns'>
        <ul className='meta-list icon-list no-bullet'>
          <li className='meta-list-item'>
            <span className='ui-icon i-base i-primary'>
              <svg>
                <use xlinkHref='#i-care' />
              </svg>
            </span>
          Medical History:
            <ul className='meta-list nested no-bullet'>
              {medicalHistory.map(function (object, _) {
                return <li className='meta-list-item'>{object}</li>
              })}
            </ul>
          </li>
        </ul>
      </div>
    }
  }

  render () {
    let {
      gender,
      maritalStatus,
      religion,
      race,
      employmentStatus,
      occupation,
      annualIncome
    } = this.props.user
    return (
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
              Gender: {gender}
              </li>
              <li className='meta-list-item'>
                <span className='ui-icon i-base i-primary'>
                  <svg>
                    <use xlinkHref='#i-love' />
                  </svg>
                </span>
              Marital Status: {maritalStatus}
              </li>
              <li className='meta-list-item'>
                <span className='ui-icon i-base i-primary'>
                  <svg>
                    <use xlinkHref='#i-love' />
                  </svg>
                </span>
              Religion: {religion}
              </li>
              <li className='meta-list-item'>
                <span className='ui-icon i-base i-primary'>
                  <svg>
                    <use xlinkHref='#i-religion' />
                  </svg>
                </span> Race: {race}
              </li>
              <li className='meta-list-item'>
                <span className='ui-icon i-base i-primary'>
                  <svg>
                    <use xlinkHref='#i-job' />
                  </svg>
                </span>
              Employment Status: {employmentStatus}
              </li>
              <li className='meta-list-item'>
                <span className='ui-icon i-base i-primary'>
                  <svg>
                    <use xlinkHref='#i-time' />
                  </svg>
                </span>
              Occupation: {occupation}
              </li>
              <li className='meta-list-item'>
                <span className='ui-icon i-base i-primary'>
                  <svg>
                    <use xlinkHref='#i-money' />
                  </svg>
                </span>
              Annual Income: ${annualIncome}
              </li>
            </ul>
          </div>

          {this.medicalHistoryList}

        </div>
      </section>
    )
  }
}

export default ProfileInfoBox