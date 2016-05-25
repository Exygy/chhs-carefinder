import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions } from 'redux/modules/facilities'
import Hero from 'components/Hero'

const mapStateToProps = (state) => ({})

export class HomeView extends React.Component {


  get searchParams () {

    // console.log(this.searchInput);

    return { search: "94612" }
  }

  render () {
    return (
      <div>
        <Hero />
        <div className='content'>
          <section className='row padding-top--2x padding-bottom--2x'>
            <div className='card'>
              <div className='card-section'>
                <h4>Find Foster Family Agencies In Your Area</h4>
                <p>Foster Family Agencies offer services to support foster children, such as certified and training foster parents, providing professional support to foster parents, and finding temporary or permanent placements for children who require intensive care.</p>

                <div className='row'>
                  <div className='medium-6 columns'>
                    <input type='text' ref={(ref) => this.searchInput = ref} placeholder='Search by Zipcode' />
                  </div>
                  <div className='medium-6 columns'>
                    <Link to="/search" className='success button' query={Object.assign({}, this.props.location.query, this.searchParams)}>Search</Link>
                  </div>
                </div>

              </div>
            </div>

            <div className='card'>
              <div className='card-section'>
                <h4>Learn About Foster Care</h4>
                <p>
                  Foster Family Agencies offer services to support foster children, such as certifying and training foster parents, providing professional support to foster parents, and finding temporary or permanent placements for children who require intensive care.
                  Foster parents play an essential role in providing temporary, safe, and nurturing homes to children who don't have parents that are able to care for them. The mission of the Office of Children and Family Services is to aid and protect needy and vulnerable children and adults in ways that strengthen and preserve families, encourage personal responsibility, and foster independence.
                </p>

                <p>To that end, here is further information about foster care:</p>
                <ul>
                  <li><a href="http://www.cdss.ca.gov/cdssweb/PG88.htm" target="_blank">How to Become a Foster Parent</a></li>
                  <li><a href="http://www.childsworld.ca.gov/PG1346.htm" target="_blank">About Foster Family Agencies</a></li>
                  <li><a href="http://www.childsworld.ca.gov/PG1351.htm" target="_blank">Kinship Care</a></li>
                  <li><a href="http://www.fosteryouthhelp.ca.gov/" target="_blank">Foster Youth Website</a></li>
                  <li><a href="http://www.childsworld.ca.gov/PG1347.htm" target="_blank">Frequently Asked Questions</a></li>
                </ul>
              </div>
            </div>

            <div className='card'>
              <div className='card-section'>
                <h4>Contact Us</h4>
                <p>For additional information, call us toll-free at 1-800-KIDS-4-US (1-800-543-7487).</p>
              </div>
            </div>

          </section>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(HomeView)
