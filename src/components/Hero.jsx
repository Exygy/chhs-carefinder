import React from 'react'

export class Hero extends React.Component {
  static propTypes = {
  }

  render () {
    return (
      <div className='hero tb-table'>
        <div className='hero-inner'>
          <div className='row'>
            <div className='hero-copy'>
              <h1 className='hero-header'>
                Find the Support<br />
                You Need as a Foster Parent
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
