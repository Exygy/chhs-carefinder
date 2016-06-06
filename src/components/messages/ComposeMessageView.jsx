import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/messages'

export class ComposeMessageView extends React.Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired
  }

  onClick = () => {
    // check if any message text was entered
    if (!_.isEmpty(this.refs.message.value)) {
      // send new msg
      this.props.sendMessage(this.refs.message.value)
      // show new msg in the conversation view? or that already happens from updating the messages
    }
  }

  render () {
    return (
      <div className='message-input'>
        <textarea className='message-textarea rounded' ref='message'></textarea>
        <div className='float-right'>
          <input className='message-button button' value='Send' type='submit' onClick={this.onClick} />
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(ComposeMessageView)
