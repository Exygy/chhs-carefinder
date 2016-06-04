import React, { PropTypes } from 'react'

export class ProfileInfoBox extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  get incomeString () {
    let annualIncome = this.props.user.annualIncome.toString()

    let numberOfCommasNeeded = Math.floor((annualIncome.length - 1) / 3)

    var incomeString = ''

    for (var i = 0; i < numberOfCommasNeeded; i++) {
      let end = -(numberOfCommasNeeded - i) * 3
      let newSegment = annualIncome.slice(0, end) + ','
      incomeString += newSegment
      annualIncome = annualIncome.slice(newSegment.length - 1)
    }

    incomeString += annualIncome.slice(-3)

    return incomeString
  }

  render () {
    let {
      gender,
      maritalStatus,
      medicalHistory,
      religion,
      race,
      employmentStatus,
      occupation
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
          <div className='medium-4 columns'>
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
              Annual Income: ${this.incomeString}
              </li>
            </ul>
          </div>
          <div className='medium-4 columns'>
            <ul className='meta-list tall'>
              <li className='meta-list-item'>
                <span className='ui-icon i-base i-primary'>
                  <svg>
                    <use xlinkHref='#i-care' />
                  </svg>
                </span>
                Medical History: {medicalHistory}
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default ProfileInfoBox
