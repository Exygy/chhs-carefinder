import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/messages'
import ConversationHeaderContainer from 'components/messages/ConversationHeaderContainer'
import ConversationView from 'components/messages/ConversationView'

const mapStateToProps = (state) => ({
  conversationStubs: state.messages.conversationStubs,
  loggedInUser: state.user.loggedInUser,
  messages: state.messages.messages,
  selectedConversationStub: state.messages.selectedConversationStub
})

export class MessagesView extends React.Component {

  static propTypes = {
    conversationStubs: PropTypes.array.isRequired,
    getConversationStubs: PropTypes.func.isRequired,
    getMessages: PropTypes.func.isRequired,
    loggedInUser: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    selectConversationStub: PropTypes.func.isRequired,
    selectedConversationStub: PropTypes.object.isRequired
  }

  componentWillMount () {
    if (_.isEmpty(this.props.selectedConversationStub) && this.props.conversationStubs.length) {
      this.props.selectConversationStub(this.props.conversationStubs[0])
    }
  }

  onConversationSelected = (conversation) => {
    this.props.selectConversationStub(conversation)
  }

  render () {
    return (
      <div className='content with-sticky-header'>
        <div className='row collapse margin-top--2x margin-bottom--2x'>
          <ConversationHeaderContainer
            conversationStubs={this.props.conversationStubs}
            onConversationSelected={this.onConversationSelected}
            selectedConversationStub={this.props.selectedConversationStub} />

          <ConversationView
            loggedInUser={this.props.loggedInUser}
            messages={this.props.messages}
            selectedConversationStub={this.props.selectedConversationStub} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(MessagesView)
