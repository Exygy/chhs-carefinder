import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import ComposeMessageView from 'components/messages/ComposeMessageView'
import ReceivedMessageView from 'components/messages/ReceivedMessageView'
import SentMessageView from 'components/messages/SentMessageView'

export class ConversationView extends React.Component {
  static propTypes = {
    loggedInUser: PropTypes.object.isRequired,
    selectedConversationStub: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired
  }

  get messageList () {
    let messages = this.props.messages
    if (_.isEmpty(messages)) {
      return <p>Empty Conversation</p>
    } else {
      return <section className='message-feed'>
        {messages.map(function (message, _) {
          if (message.sender.id === this.props.loggedInUser.id) {
            return <SentMessageView key={message.id} message={message} />
          } else {
            return <ReceivedMessageView key={message.id} message={message} />
          }
        }.bind(this))}
      </section>
    }
  }

  render () {
    let { mostRecentMessageDate, subject } = this.props.selectedConversationStub
    return (
      <div className='medium-8 columns p-relative'>
        <div className='message-content tabs-content vertical block-margins' data-tabs-content='example-vert-tabs'>
          <div aria-labelledby='panel1v-label'
            aria-hidden='false'
            role='tabpanel'
            className='message-panel tabs-panel is-active'
            id='panel1v'>
            <header className='message-subect'>
              <h1 className='message-title'>{subject}</h1>
              <span className='message-date'>{mostRecentMessageDate}</span>
            </header>

            {this.messageList}

            <ComposeMessageView />

          </div>
        </div>
      </div>
    )
  }
}

export default ConversationView
