import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import ConversationHeader from 'components/messages/ConversationHeader'

export class ConversationHeaderContainer extends React.Component {
  static propTypes = {
    conversationStubs: PropTypes.array.isRequired,
    onConversationSelected: PropTypes.func.isRequired,
    selectedConversationStub: PropTypes.object.isRequired
  }

  get conversationList () {
    if (_.isEmpty(this.props.conversationStubs)) {
      return <p>No Conversations</p>
    } else {
      return <ul className='messages-tabs tabs vertical block-margins'
        id='example-vert-tabs'
        data-tabs='2dqsvw-tabs'>
      {this.props.conversationStubs.map(function (conversationStub, _) {
        return <ConversationHeader
          conversationStub={conversationStub}
          onConversationSelected={this.props.onConversationSelected}
          key={conversationStub.id}
          selected={conversationStub.id === this.props.selectedConversationStub.id}
        />
      }.bind(this))}
      </ul>
    }
  }

  render () {
    return (
      <div className='medium-4 columns'>
        {this.conversationList}
      </div>
    )
  }
}

export default ConversationHeaderContainer
