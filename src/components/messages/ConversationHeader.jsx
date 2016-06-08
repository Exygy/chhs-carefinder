import React, { PropTypes } from 'react'

export class ConversationHeader extends React.Component {
  static propTypes = {
    conversationStub: PropTypes.object.isRequired,
    onConversationSelected: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
  }

  itemSelected = () => {
    this.props.onConversationSelected(this.props.conversationStub)
  }
  get unreadLabel () {
    if (this.props.conversationStub.unread) {
      return <span className='label small alert float-right'>New</span>
    }
  }

  render () {
    let { mostRecentMessageDate, sender, subject } = this.props.conversationStub
    return (
      <li role='presentation'
        className='messages-title tabs-title is-active'
        onClick={this.itemSelected}>
        <a id='panel1v-label'
          aria-controls='panel1v'
          role='tab'
          aria-selected={this.props.selected}>
          <h3 className='messages-from t-base'>
            From: {sender} <span className='message-date'>{mostRecentMessageDate}</span>
          </h3>
          <p>
            {subject}
            {this.unreadLabel}
          </p>
        </a>
      </li>
    )
  }
}

export default ConversationHeader
