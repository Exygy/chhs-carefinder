import React from 'react'

export class AdditionalResourcesCallout extends React.Component {
  render () {
    return (
      <div className='callout large'>
        <h2 className='t-serif t-delta'>
          Learn About Foster Care
        </h2>
        <p>
          Foster parents play an essential role in providing temporary, safe,
          and nurturing homes to children who don't have parents that are
          able to care for them. CHHS Care Finder aids needy and vulnerable
          children and adults in ways that strengthen and preserve families,
          encourage personal responsibility, and foster independence.
        </p>
        <p>
          To that end, here is further information about foster care:
        </p>
        <ul className='no-bullet'>
          <li>
            <a target='_blank' href='http://www.cdss.ca.gov/cdssweb/PG88.htm'>
              How to Become a Foster Parent
            </a>
          </li>
          <li>
            <a target='_blank' href='http://www.childsworld.ca.gov/PG1346.htm'>
              About Foster Family Agencies
            </a>
          </li>
          <li>
            <a target='_blank' href='http://www.childsworld.ca.gov/PG1351.htm'>
              Kinship Care
            </a>
          </li>
          <li>
            <a target='_blank' href='http://www.fosteryouthhelp.ca.gov'>
              Foster Youth Website
            </a>
          </li>
          <li>
            <a target='_blank' href='http://www.childsworld.ca.gov/PG1347.htm'>
              Frequently Asked Questions
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default AdditionalResourcesCallout
