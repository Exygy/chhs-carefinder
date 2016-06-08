import React from 'react'

export class Hero extends React.Component {
  static propTypes = {
  }

  render () {
    return (
      <div className='hero tb-table'>
        <div className='hero-inner tb-vert-align'>
          <a className='hero-logo'>
          </a>
          <div className='hero-copy'>
            <h1 className='hero-header'>
              Find the Support You Need as a Foster Parent
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
