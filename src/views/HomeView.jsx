import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/facilities'
import Hero from 'components/Hero'

const mapStateToProps = (state) => ({})

export class HomeView extends React.Component {
  render () {
    return (
      <div>
        <Hero />
        <div className='content'>
          <section className='row padding-top--2x padding-bottom--2x'>
            <div className='card'>
              <div className='card-divider'>
                This is a header
              </div>
              <div className='card-section'>
                <h4>Look at This Swag Card</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi iusto reprehenderit voluptatem odio deleniti provident aliquam qui magnam aspernatur necessitatibus.</p>
              </div>
            </div>
            <div className='row'>
              <div className='medium-3 columns'>
                <input
                  type='text'
                  placeholder='Zipcode'
                  />
              </div>
              <div className='medium-4 columns'>
                <button type='button' className='success button'>Go</button>
              </div>
            </div>

            {this.facilityList}
          </section>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(HomeView)
