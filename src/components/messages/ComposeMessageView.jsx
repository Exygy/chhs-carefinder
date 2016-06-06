import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/messages'

export class ComposeMessageView extends React.Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {text: ''}
  }

  onChange = (e) => {
    this.setState({text: e.target.value})
  }

  onClick = () => {
    // check if any message text was entered
    if (!_.isEmpty(this.refs.message.value)) {
      this.props.sendMessage(this.refs.message.value)
      this.setState({text: ''})
    }
  }

  render () {
    return (
      <div className='message-input'>
        <textarea
          className='message-textarea rounded'
          value={this.state.text}
          onChange={this.onChange}
          ref='message'></textarea>
        <div className='float-right'>
          <input
            className='message-button button'
            value='Send'
            type='submit'
            onClick={this.onClick} />
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(ComposeMessageView)
