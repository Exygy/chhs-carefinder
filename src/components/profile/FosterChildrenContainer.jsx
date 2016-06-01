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
      return <div>{this.props.fosterChildren.map(function (object, _) {
        return <FosterChildBox fosterChild={object} />
      })}
      </div>
    }
  }

  render () {
    return (
      <section className='content-block block bg-white'>
        <header className='block-header'>
          <h3 className='block-title t-base'>Foster Children</h3>
          <span className='block-edit'>
            <a href='#' className='a-alert'>Edit</a>
          </span>
        </header>

        {this.fosterChildrenList}

      </section>
    )
  }
}

export default FosterChildrenContainer
