import React, { PropTypes } from 'react'

export class ProfileInfoBox extends React.Component {
  static propTypes = {
    updateUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      annualIncome: this.props.user.annualIncome,
      gender: this.props.user.gender,
      medicalHistory: this.props.user.medicalHistory,
      maritalStatus: this.props.user.maritalStatus,
      isEditingProfile: false,
      religion: this.props.user.religion,
      employmentStatus: this.props.user.employmentStatus,
      occupation: this.props.user.occupation
    }
  }

  isEditingOn = (event) => {
    event.preventDefault()
    this.setState({ isEditingProfile: true })
  }

  isEditingOff = (event) => {
    event.preventDefault()
    this.setState({ isEditingProfile: false })
  }

  save = () => {
    let user = Object.assign({}, this.props.user)

    user.medicalHistory = this.state.medicalHistory
    user.annualIncome = this.state.annualIncome
    user.gender = this.state.gender
    user.maritalStatus = this.state.maritalStatus
    user.religion = this.state.religion
    user.employmentStatus = this.state.employmentStatus
    user.occupation = this.state.occupation

    this.props.updateUser(user)
    this.setState({ isEditingProfile: false })
  }

  updateGender = (event) => {
    this.setState({ gender: event.target.value })
  }

  updateMaritalStatus = (event) => {
    this.setState({ maritalStatus: event.target.value })
  }

  updateReligion = (event) => {
    this.setState({ religion: event.target.value })
  }

  updateEmploymentStatus = (event) => {
    this.setState({ employmentStatus: event.target.value })
  }

  updateOccupation = (event) => {
    this.setState({ occupation: event.target.value })
  }

  updateIncome = (event) => {
    let maxLength = 15
    if (event.target.value.toString().length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength)
    }
    this.setState({ annualIncome: event.target.value })
  }

  updateMedicalHistory = (event) => {
    this.setState({ medicalHistory: event.target.value })
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

    return '$' + incomeString
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

    if (this.state.isEditingProfile) {
      // return editing mode
      return (
        <section className='content-block block bg-white'>
          <header className='block-header'>
            <h3 className='block-title t-base'>Profile</h3>
            <span className='block-cancel'>
              <a href='#'
                className='a-alert'
                onClick={this.isEditingOff}>Cancel</a>
            </span>
          </header>
          <div className='row padding-bottom--2x'>
            <div className='large-8 medium-10 medium-centered columns'>
              <ul className='meta-list tall'>
                <li className='meta-list-item'>
                  <div className='inline-form border-bottom'>
                    <span className='ui-icon i-base i-primary inline-form-icon'>
                      <img src={require('../../images/gender.png')} />
                    </span>
                    <label className='inline-form-label'>Gender</label>
                    <select name='gender'
                      id='gender'
                      className='inline-form-input'
                      defaultValue={gender}
                      onChange={this.updateGender}>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                      <option value='Transgender'>Transgender</option>
                    </select>
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form border-bottom'>
                    <span className='ui-icon i-base i-primary inline-form-icon'>
                      <svg>
                        <use xlinkHref='#i-love'></use>
                      </svg>
                    </span>
                    <label className='inline-form-label'>Marital Status</label>
                    <select name='maritalStatus'
                      id='maritalStatus'
                      className='inline-form-input'
                      defaultValue={maritalStatus}
                      onChange={this.updateMaritalStatus}>
                      <option value='Single'>Single</option>
                      <option value='Married'>Married</option>
                      <option value='Separated'>Separated</option>
                      <option value='Divorced'>Divorced</option>
                      <option value='Widowed'>Widowed</option>
                    </select>
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form border-bottom'>
                    <span className='ui-icon i-base i-primary inline-form-icon'>
                      <svg>
                        <use xlinkHref='#i-religion'></use>
                      </svg>
                    </span>
                    <label className='inline-form-label'>Religion</label>
                    <select name='religion'
                      id='religion'
                      className='inline-form-input'
                      defaultValue={religion}
                      onChange={this.updateReligion}>
                      <option value='Agnosticism'>Agnosticism</option>
                      <option value='Atheism'>Atheism</option>
                      <option value='Bábism'>Bábism</option>
                      <option value='Baháí'>Baháí</option>
                      <option value='Buddhism'>Buddhism</option>
                      <option value='Cao Dai'>Cao Dai</option>
                      <option value='Christianity'>Christianity</option>
                      <option value='Hinduism'>Hinduism</option>
                      <option value='Islam'>Islam</option>
                      <option value='Jainism'>Jainism</option>
                      <option value='Judaism'>Judaism</option>
                      <option value='Neo-Paganism'>Neo-Paganism</option>
                      <option value='Nonreligious'>Nonreligious</option>
                      <option value='Other'>Other</option>
                      <option value='Rastafarianism'>Rastafarianism</option>
                      <option value='Shinto'>Shinto</option>
                      <option value='Sikhism'>Sikhism</option>
                      <option value='Spiritism'>Spiritism</option>
                      <option value='Tenrikyo'>Tenrikyo</option>
                      <option value='Unitarian Universalism'>Unitarian Universalism</option>
                      <option value='Zoroastrianism'>Zoroastrianism</option>
                    </select>
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form border-bottom'>
                    <span className='ui-icon i-base i-primary inline-form-icon'>
                      <svg>
                        <use xlinkHref='#i-job'></use>
                      </svg>
                    </span>
                    <label className='inline-form-label'>Employment Status</label>
                    <select name='employmentStatus'
                      id='employmentStatus'
                      className='inline-form-input'
                      defaultValue={employmentStatus}
                      onChange={this.updateEmploymentStatus}>
                      <option value='Unemployed'>Unemployed</option>
                      <option value='Part Time'>Part Time</option>
                      <option value='Full Time'>Full Time</option>
                      <option value='Retired'>Retired</option>
                    </select>
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form'>
                    <span className='ui-icon i-base i-primary inline-form-icon'>
                      <svg>
                        <use xlinkHref='#i-time'></use>
                      </svg>
                    </span>
                    <label htmlFor='textInput' className='inline-form-label'>Occupation</label>
                    <input id='textInput'
                      className='inline-form-input'
                      defaultValue={occupation}
                      type='text'
                      maxLength='62'
                      onChange={this.updateOccupation} />
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form'>
                    <span className='ui-icon i-base i-primary inline-form-icon'>
                      <svg>
                        <use xlinkHref='#i-money'></use>
                      </svg>
                    </span>
                    <label htmlFor='textInput' className='inline-form-label'>Annual Income</label>
                    <input id='textInput'
                      className='inline-form-input'
                      defaultValue={this.props.user.annualIncome}
                      type='number'
                      onChange={this.updateIncome} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <header className='block-header'>
            <h3 className='block-subtitle t-base'>Medical History</h3>
          </header>
          <div className='row'>
            <div className='large-8 medium-10 medium-centered columns'>
              <ul className='meta-list'>
                <div className='inline-form'>
                  <label htmlFor='textInput' className='inline-form-label show-for-sr'>Medical History</label>
                  <textarea className='tall'
                    defaultValue={medicalHistory}
                    onChange={this.updateMedicalHistory}
                    maxLength='800' />
                </div>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='large-6 large-centered columns'>
              <button className='button large attention expanded' onClick={this.save}>Save</button>
            </div>
          </div>
        </section>
      )
    } else {
      // return non-editing mode
      return (
        <section className='block'>
          <header className='block-header'>
            <h3 className='block-title t-base'>Profile</h3>
            <span className='block-edit'>
              <a href='#'
                className='a-alert'
                onClick={this.isEditingOn}>Edit</a>
            </span>
          </header>
          <div className='row collapse'>
            <div className='medium-6 columns'>
              <ul className='meta-list tall'>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <img src={require('../../images/gender.png')} />
                  </span>
                  <strong>Gender</strong>: {gender}
                </li>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-love' />
                    </svg>
                  </span>
                  <strong>Marital Status</strong>: {maritalStatus}
                </li>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-religion' />
                    </svg>
                  </span>
                  <strong>Religion</strong>: {religion}
                </li>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-gender' />
                    </svg>
                  </span>
                  <strong>Race</strong>: {race}
                </li>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-job' />
                    </svg>
                  </span>
                  <strong>Employment Status</strong>: {employmentStatus}
                </li>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-time' />
                    </svg>
                  </span>
                  <strong>Occupation</strong>: {occupation}
                </li>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-money' />
                    </svg>
                  </span>
                  <strong>Annual Income</strong>: {this.incomeString}
                </li>
              </ul>
            </div>
            <div className='medium-6 columns'>
              <ul className='meta-list tall'>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-health' />
                    </svg>
                  </span>
                  <strong>Medical History</strong>: {medicalHistory}
                </li>
              </ul>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default ProfileInfoBox
