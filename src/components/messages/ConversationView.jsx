import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/user'
import ComposeMessageView from 'components/messages/ComposeMessageView'
import ReceivedMessageView from 'components/messages/ReceivedMessageView'
import SentMessageView from 'components/messages/SentMessageView'

const mapStateToProps = (state) => ({
  loggedInUser: state.user.loggedInUser
})

export class ConversationView extends React.Component {
  static propTypes = {
    conversation: PropTypes.object.isRequired
  }

  get messageList () {
    let messages = this.props.conversation.messages
    if (_.isEmpty(messages)) {
      return <p>Empty Conversation</p>
    } else {
      return <section className='message-feed'>
        {messages.map(function (message, _) {
          if (message.sender === this.loggedInUser) {
            <SentMessageView message={message} />
          } else {
            <ReceivedMessageView message={message} />
          }
        })}
      </section>
    }
  }

  render () {
    let { subject } = this.props.conversation
    // let { m, text, time } = this.props.message
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
              <span className='message-date'>Apr 13, 2016</span>
            </header>

            {this.messageList}

            <ComposeMessageView />

          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(ConversationView)
