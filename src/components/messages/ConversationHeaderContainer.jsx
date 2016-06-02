import _ from 'utils/lodash'
import React, { PropTypes } from 'react'
import ConversationHeader from 'components/messages/ConversationHeader'

export class ConversationHeaderContainer extends React.Component {
  static propTypes = {
    conversations: PropTypes.array.isRequired
  }

  get conversationList () {
    if (_.isEmpty(this.props.conversations)) {
      return <p>No Conversations</p>
    } else {
      return <ul className='messages-tabs tabs vertical block-margins'
        id='example-vert-tabs'
        data-tabs='2dqsvw-tabs'>
      {this.props.conversations.map(function (object, _) {
        return <ConversationHeader conversation={object} />
      })}
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
