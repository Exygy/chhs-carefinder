import React, { PropTypes } from 'react'

export class ReceivedMessageView extends React.Component {
  static propTypes = {
    message: PropTypes.object.isRequired
  }

  render () {
    let { sender, text, time } = this.props.message
    return (
      <div className='message-object media-object'>
        <div className='media-object-section'>
          <figure className='message-thumb'>
            <img src={sender.image} alt={sender.imageAlt} />
            <figcaption className='message-time'>{time}</figcaption>
          </figure>
        </div>
        <div className='media-object-section'>
          <div className='message-bubble'>
            {text}
          </div>
        </div>
      </div>
    )
  }
}

export default ReceivedMessageView
