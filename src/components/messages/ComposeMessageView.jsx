import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/messages'

const mapStateToProps = (state) => ({
  selectedConversationStub: state.messages.selectedConversationStub
})

export class ComposeMessageView extends React.Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
    selectedConversationStub: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      text_1: '',
      text_2: '',
      text_3: '',
      text_4: ''
    }
  }

  get textKey () {
    return `text_${this.props.selectedConversationStub.id}`
  }

  onChange = (e) => {
    let updatedText = {}
    updatedText[this.textKey] = e.target.value
    this.setState(updatedText)
  }

  onClick = () => {
    // check if any message text was entered
    if (!_.isEmpty(this.refs.message.value)) {
      this.props.sendMessage(this.refs.message.value)
      let updatedText = {}
      updatedText[this.textKey] = ''
      this.setState(updatedText)
    }
  }

  render () {
    return (
      <div className='message-input'>
        <textarea
          className='message-textarea rounded'
          value={this.state[this.textKey]}
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

export default connect(mapStateToProps, actions)(ComposeMessageView)
