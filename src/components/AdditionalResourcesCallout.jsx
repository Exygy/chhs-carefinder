import React from 'react'

export class AdditionalResourcesCallout extends React.Component {
  static propTypes = {
  }

  render () {
    return (
      <div className='callout large'>
        <h2 className='t-serif t-delta'>
          Learn About Foster Care
        </h2>
        <p>
          Vehicula taciti bibendum a sed a tincidunt tincidunt enim lectus sem nisi sem a
          a eget sociis condimentum hac feugiat. Dis suspendisse mattis vestibulum felis cubilia blandit
          odio at lobortis a lacus tempus netus vestibulum dignissim. Quam at fusce
          interdum commodo nam aptent eget amet elementum a natoque sed nascetur sociis ac rhoncus
          nascetur porta parturient a ullamcorper.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
