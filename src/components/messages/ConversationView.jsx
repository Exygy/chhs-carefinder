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

  // always scroll conversation to the bottom to show last message
  componentDidUpdate = () => {
    let node = this.refs['feed']
    node.scrollTop = node.offsetHeight

    // needs to be slightly delayed so node contains all data and height is accurate
    setTimeout(() => {
      node.scrollTop = node.offsetHeight
    }, 1)
  }

  get messageList () {
    let messages = this.props.messages
    let stub = this.props.selectedConversationStub
    if (_.isEmpty(messages)) {
      if (_.isEmpty(stub)) {
        return <p>No conversation selected</p>
      } else {
        return <section className='message-feed'>
          <div className='row'>
            <div className='small-11 medium-7 small-centered column'>
              <div className='message-placeholder'>
                <p>You can start a message here with {stub.sender} about Stephanie Lang</p>
              </div>
            </div>
          </div>
        </section>
      }
    } else {
      return <section className='message-feed'>
        {messages.map(function (message, _) {
          if (message.sender.id === this.props.loggedInUser.id) {
            return <div className='row margin'><SentMessageView key={message.id} message={message} /></div>
          } else {
            return <div className='row margin'><ReceivedMessageView key={message.id} message={message} /></div>
          }
        }.bind(this))}
      </section>
    }
  }

  render () {
    let { mostRecentMessageDate, subject, sender } = this.props.selectedConversationStub
    return (
      <div className='medium-8 columns p-relative'>
        <div className='message-content tabs-content vertical block-margins' data-tabs-content='example-vert-tabs'>
          <div aria-labelledby='panel1v-label'
            aria-hidden='false'
            role='tabpanel'
            className='message-panel tabs-panel is-active'
            id='panel1v'
            ref='feed'>
            <header className='message-subect'>
              <h1 className='message-title'>From: {sender}</h1>
              <br />
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
