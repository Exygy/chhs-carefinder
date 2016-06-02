import React from 'react'

export class ComposeMessageView extends React.Component {

  render () {
    return (
      <div className='message-input'>
        <textarea className='message-textarea rounded'></textarea>
        <div className='float-right'>
          <input className='message-button button' value='Send' type='submit' />
        </div>
      </div>
    )
  }
}

export default ComposeMessageView
