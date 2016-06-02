import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import ConversationHeader from 'components/messages/ConversationHeader'

export class ConversationHeaderContainer extends React.Component {
  static propTypes = {
    conversations: PropTypes.array.isRequired,
    conversationSelected: PropTypes.func.isRequired,
    selectedConversationId: PropTypes.number.isRequired
  }

  get conversationList () {
    if (_.isEmpty(this.props.conversations)) {
      return <p>No Conversations</p>
    } else {
      return <ul className='messages-tabs tabs vertical block-margins'
        id='example-vert-tabs'
        data-tabs='2dqsvw-tabs'>
      {this.props.conversations.map(function (object, _) {
        return <ConversationHeader conversation={object}
          conversationSelected={this.props.conversationSelected}
          key={object.key}
          selected={object.key === this.props.selectedConversationId} />
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
