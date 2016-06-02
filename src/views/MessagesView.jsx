import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/user'
import ConversationHeaderContainer from 'components/messages/ConversationHeaderContainer'
import ConversationView from 'components/messages/ConversationView'

const mapStateToProps = (state) => ({
  loggedInUser: state.user.loggedInUser
})

export class MessagesView extends React.Component {

  static propTypes = {
    loggedInUser: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.setState({ selectedConversation: {} })
  }

  constructor () {
    super()
    this.onConversationSelected = this.onConversationSelected.bind(this)
  }

  onConversationSelected (conversation) {
    this.setState({ selectedConversation: conversation })
  }

  render () {
    let conversation1 = {
      id: 1,
      sender: 'Mateo',
      subject: 'Mateo\'s time'
    }
    let conversation2 = {
      id: 2,
      sender: 'Mateosh',
      subject: 'Mateosh\'s time'
    }
    let conversations = [conversation1, conversation2]
    return (
      <div className='content with-sticky-header'>
        <div className='row collapse margin-top--2x margin-bottom--2x'>
          <ConversationHeaderContainer
            conversations={conversations}
            onConversationSelected={this.onConversationSelected}
            selectedConversation={this.state.selectedConversation} />

          <ConversationView conversation={this.state.selectedConversation} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(MessagesView)
