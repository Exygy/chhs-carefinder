import React, { PropTypes } from 'react'

export class FosterCarePreferences extends React.Component {
  static propTypes = {
    updateUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      ability: this.props.user.fosterCarePreferences.ability,
      age: this.props.user.fosterCarePreferences.age,
      gender: this.props.user.fosterCarePreferences.gender,
      isEditingProfile: false
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

    user.fosterCarePreferences.ability = this.state.ability
    user.fosterCarePreferences.age = this.state.age
    user.fosterCarePreferences.gender = this.state.gender

    this.props.updateUser(user)
    this.setState({ isEditingProfile: false })
  }

  updateAbility = (event) => {
    this.setState({ ability: event.target.value })
  }

  updateAge = (event) => {
    this.setState({ age: event.target.value })
  }

  updateGender = (event) => {
    this.setState({ gender: event.target.value })
  }

  render () {
    let { ability, age, gender } = this.props.user.fosterCarePreferences

    if (this.state.isEditingProfile) {
      // return editing mode
      return (
        <section className='content-block block bg-white'>
          <header className='block-header'>
            <h3 className='block-title t-base'>Foster Care Preferences</h3>
            <span className='block-cancel'>
              <a href='#'
                className='a-alert'
                onClick={this.isEditingOff}>Cancel</a>
            </span>
          </header>
          <div className='row padding-bottom--2x'>
            <div className='large-10 medium-10 medium-centered columns'>
              <ul className='meta-list tall'>
                <li className='meta-list-item'>
                  <div className='inline-form border-bottom'>
                    <label className='inline-form-label'>Age of Children</label>
                    <select name='age'
                      id='age'
                      className='inline-form-input'
                      defaultValue={age}
                      onChange={this.updateAge}>
                      <option value='0 months to 2 years'>0 months to 2 years</option>
                      <option value='2 years to 9 years'>2 years to 9 years</option>
                      <option value='9 years to 17 years'>9 years to 17 years</option>
                    </select>
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form border-bottom'>
                    <label className='inline-form-label'>Gender of Children</label>
                    <select name='gender'
                      id='gender'
                      className='inline-form-input'
                      defaultValue={gender}
                      onChange={this.updateGender}>
                      <option value='No Preference'>No Preference</option>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                      <option value='Transgender'>Transgender</option>
                    </select>
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form border-bottom'>
                    <label className='inline-form-label'>Type of Children</label>
                    <select name='ability'
                      id='ability'
                      className='inline-form-input'
                      defaultValue={ability}
                      onChange={this.updateAbility}>
                      <option value='Ambulatory'>Ambulatory</option>
                      <option value='Non-Ambulatory'>Non-Ambulatory</option>
                      <option value='Special Health Needs'>Special Health Needs</option>
                    </select>
                  </div>
                </li>
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
        <section className='content-block block bg-white'>
          <header className='block-header'>
            <h3 className='block-title t-base'>Foster Care Preferences</h3>
            <span className='block-edit'>
              <a href='#'
                className='a-alert'
                onClick={this.isEditingOn}>
                Edit
              </a>
            </span>
          </header>
          <ul className='meta-list tall'>
            <li className='meta-list-item'>
              <strong>Age of Children</strong>: {age}
            </li>
            <li className='meta-list-item'>
              <strong>Gender of Children</strong>: {gender}
            </li>
            <li className='meta-list-item'>
              <strong>Type of Children</strong>: {ability}
            </li>
          </ul>
        </section>
      )
    }
  }
}

export default FosterCarePreferences
