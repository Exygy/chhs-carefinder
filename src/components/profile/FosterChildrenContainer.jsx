import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import FosterChildBox from 'components/profile/FosterChildBox'

export class FosterChildrenContainer extends React.Component {
  static propTypes = {
    fosterChildren: PropTypes.array.isRequired
  }

  get fosterChildrenList () {
    if (_.isEmpty(this.props.fosterChildren)) {
      return <p>No Foster Children</p>
    } else {
      return <div>{this.props.fosterChildren.map(function (object, index) {
        return <FosterChildBox fosterChild={object} key={index} />
      })}
      </div>
    }
  }

  render () {
    return (
      <section className='content-block block bg-white'>
        <header className='block-header'>
          <h3 className='block-title t-base'>Foster Children</h3>
        </header>

        {this.fosterChildrenList}

      </section>
    )
  }
}

export default FosterChildrenContainer
