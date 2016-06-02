import React, { PropTypes } from 'react'

export class ConversationHeader extends React.Component {
  static propTypes = {
    conversation: PropTypes.object.isRequired,
    onConversationSelected: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
  }

  itemSelected () {
    this.props.onConversationSelected(this.props.conversation)
  }

  constructor () {
    super()
    this.itemSelected = this.itemSelected.bind(this)
  }

  render () {
    let { sender, subject } = this.props.conversation
    return (
      <li role='presentation'
        className='messages-title tabs-title is-active'
        onClick={this.itemSelected}>
        <a id='panel1v-label'
          aria-controls='panel1v'
          role='tab' href='#panel1v'
          aria-selected={this.props.selected}>
          <h3 className='messages-from t-base'>From: {sender}</h3>
          <p>{subject}</p>
        </a>
      </li>
    )
  }
}

export default ConversationHeader
