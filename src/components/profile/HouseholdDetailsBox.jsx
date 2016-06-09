import React, { PropTypes } from 'react'

export class HouseholdDetailsBox extends React.Component {
  static propTypes = {
    updateUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      city: this.props.user.address.city,
      state: this.props.user.address.state,
      street: this.props.user.address.street,
      zipcode: this.props.user.address.zipcode,
      adultsAtHome: this.props.user.household.adultsAtHome,
      childrenAtHome: this.props.user.household.childrenAtHome,
      bedrooms: this.props.user.household.bedrooms,
      sizeOfHome: this.props.user.household.homeSize.value,
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

    user.address.city = this.state.city
    user.address.state = this.state.state
    user.address.zipcode = this.state.zipcode
    user.address.street = this.state.street
    user.household.adultsAtHome = this.state.adultsAtHome
    user.household.childrenAtHome = this.state.childrenAtHome
    user.household.bedrooms = this.state.bedrooms
    user.household.homeSize.value = this.state.sizeOfHome

    user.status = 'pending'

    this.props.updateUser(user)
    this.setState({ isEditingProfile: false })
  }

  updateAdultsAtHome = (event) => {
    this.setState({ adultsAtHome: event.target.value })
  }

  updateChildrenAtHome = (event) => {
    this.setState({ childrenAtHome: event.target.value })
  }

  updateCity = (event) => {
    this.setState({ city: event.target.value })
  }

  updateBedrooms = (event) => {
    this.setState({ bedrooms: event.target.value })
  }

  updateSizeOfHome = (event) => {
    let maxLength = 8
    if (event.target.value.toString().length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength)
    }
    this.setState({ sizeOfHome: event.target.value })
  }

  updateState = (event) => {
    this.setState({ state: event.target.value })
  }

  updateStreet = (event) => {
    this.setState({ street: event.target.value })
  }

  updateZipcode = (event) => {
    let maxLength = 5
    if (event.target.value.toString().length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength)
    }
    this.setState({ zipcode: event.target.value })
  }

  render () {
    let { address, household } = this.props.user

    if (this.state.isEditingProfile) {
      return (
        <section className='content-block block bg-white'>
          <header className='block-header'>
            <h3 className='block-title t-base'>Household Details</h3>
            <span className='block-edit'>
              <a href='#'
                className='a-alert'
                onClick={this.isEditingOff}>Cancel</a>
            </span>
          </header>
          <div className='row padding-bottom--2x'>
            <div className='large-8 medium-10 medium-centered columns'>
              <ul className='meta-list tall'>
                <li className='meta-list-item'>
                  <div className='inline-form'>
                    <span className='ui-icon i-base i-primary inline-form-icon'>
                      <svg>
                        <use xlinkHref='#i-address'></use>
                      </svg>
                    </span>
                    <label htmlFor='textInput' className='inline-form-label'>Street Address</label>
                    <input id='textInput'
                      className='inline-form-input'
                      defaultValue={address.street}
                      type='text'
                      maxLength='255'
                      onChange={this.updateStreet} />
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form'>
                    <label htmlFor='textInput' className='inline-form-label'>City</label>
                    <input id='textInput'
                      className='inline-form-input'
                      defaultValue={address.city}
                      type='text'
                      maxLength='255'
                      onChange={this.updateCity} />
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form border-bottom'>
                    <label className='inline-form-label'>State</label>
                    <select name='state'
                      id='state'
                      className='inline-form-input'
                      defaultValue={address.state}
                      onChange={this.updateState}>
                      <option value='Alabama'>Alabama</option>
                      <option value='California'>California</option>
                      <option value='Texas'>Texas</option>
                    </select>
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form'>
                    <label htmlFor='textInput' className='inline-form-label'>Zipcode</label>
                    <input id='textInput'
                      className='inline-form-input'
                      defaultValue={address.zipcode}
                      type='number'
                      onChange={this.updateZipcode} />
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form'>
                    <label htmlFor='textInput' className='inline-form-label'>Home Size (sq ft)</label>
                    <input id='textInput'
                      className='inline-form-input'
                      defaultValue={household.homeSize.value}
                      type='number'
                      onChange={this.updateSizeOfHome} />
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form border-bottom'>
                    <label className='inline-form-label'>Bedrooms</label>
                    <select name='bedrooms'
                      id='bedrooms'
                      className='inline-form-input'
                      defaultValue={household.bedrooms}
                      onChange={this.updateBedrooms}>
                      <option value='0'>0</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='10+'>10+</option>
                    </select>
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form border-bottom'>
                    <label className='inline-form-label'>Adults at Home</label>
                    <select name='adultsAtHome'
                      id='adultsAtHome'
                      className='inline-form-input'
                      defaultValue={household.adultsAtHome}
                      onChange={this.updateAdultsAtHome}>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5+'>5+</option>
                    </select>
                  </div>
                </li>
                <li className='meta-list-item'>
                  <div className='inline-form border-bottom'>
                    <label className='inline-form-label'>Children at Home</label>
                    <select name='childrenAtHome'
                      id='childrenAtHome'
                      className='inline-form-input'
                      defaultValue={household.childrenAtHome}
                      onChange={this.updateChildrenAtHome}>
                      <option value='0'>0</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5+'>5+</option>
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
      return (
        <section className='content-block block bg-white'>
          <header className='block-header'>
            <h3 className='block-title t-base'>Household Details</h3>
            <span className='block-edit'>
              <a href='#'
                className='a-alert'
                onClick={this.isEditingOn}>
                Edit
              </a>
            </span>
          </header>

          <div className='block primary'>
            <p className='has-icon'>
            If you make changes to any of the following information, your parenting status will undergo review.
            </p>
          </div>

          <section className='row collapse padding-top--2x padding-bottom'>
            <div className='medium-4 columns'>
              <ul className='meta-list tall'>
                <li className='meta-list-item'>
                  <span className='ui-icon i-base i-primary'>
                    <svg>
                      <use xlinkHref='#i-address' />
                    </svg>
                  </span>
                  <strong>Address</strong>:
                </li>
                <li className='meta-list-item'>
                  {address.street}
                </li>
                <li className='meta-list-item'>
                  {address.city}, {address.state}
                </li>
                <li className='meta-list-item'>
                  {address.zipcode}
                </li>
              </ul>
            </div>
            <div className='medium-4 columns'>
              <ul className='meta-list tall'>
                <li className='meta-list-item'>
                  <strong>Home Size</strong>: {household.homeSize.value} {household.homeSize.unit}
                </li>
                <li className='meta-list-item'>
                  <strong>Bedrooms</strong>: {household.bedrooms}
                </li>
                <li className='meta-list-item'>
                  <strong>Adults at Home</strong>: {household.adultsAtHome}
                </li>
                <li className='meta-list-item'>
                  <strong>Children at Home</strong>: {household.childrenAtHome}
                </li>
              </ul>
            </div>
          </section>
        </section>
      )
    }
  }
}

export default HouseholdDetailsBox
