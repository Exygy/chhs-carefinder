import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux/modules/user'
import ConversationHeaderContainer from 'components/messages/ConversationHeaderContainer'

const mapStateToProps = (state) => ({
  loggedInUser: state.user.loggedInUser
})

export class MessagesView extends React.Component {

  static propTypes = {
    loggedInUser: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.setState({ selectedConversationId: 0 })
  }

  constructor () {
    super()
    this.conversationSelected = this.conversationSelected.bind(this)
  }

  conversationSelected (conversationId) {
    this.setState({ selectedConversationId: conversationId })
  }

  render () {
    let conversation1 = {
      key: 1,
      sender: 'Mateo',
      subject: 'Mateo\'s time'
    }
    let conversation2 = {
      key: 2,
      sender: 'Mateosh',
      subject: 'Mateosh\'s time'
    }
    let conversations = [conversation1, conversation2]
    return (
      <div className='content with-sticky-header'>
        <div className='row collapse margin-top--2x margin-bottom--2x'>
          <ConversationHeaderContainer
            conversations={conversations}
            conversationSelected={this.conversationSelected}
            selectedConversationId={this.state.selectedConversationId} />
          <div className='medium-8 columns p-relative'>
            <div className='message-content tabs-content vertical block-margins' data-tabs-content='example-vert-tabs'>
              <div aria-labelledby='panel1v-label'
                aria-hidden='false'
                role='tabpanel'
                className='message-panel tabs-panel is-active'
                id='panel1v'>
                <header className='message-subect'>
                  <h1 className='message-title'>Re: Stephanie Lang</h1>
                  <span className='message-date'>Apr 13, 2016</span>
                </header>
                <section className='message-feed'>
                  <div className='message-object media-object'>
                    <div className='media-object-section'>
                      <figure className='message-thumb'>
                        <img src='http://placehold.it/83x111' />
                        <figcaption className='message-time'>10:38 am</figcaption>
                      </figure>
                    </div>
                    <div className='media-object-section'>
                      <div className='message-bubble'>
                        <p>Marc<br />
                          I'm going to improvise. Listen, there's something you should know about me...
                          about inception. An idea is like a virus, resilient, highly contagious.
                          The smallest seed of an idea can grow. It can grow to define or destroy you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='message-object media-object'>
                    <div className='media-object-section'>
                      <div className='message-bubble right'>
                        <p>Marc<br/>
                    I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
                  </div>
                </div>
                <div className='media-object-section'>
                  <figure className='message-thumb'>
                    <img src='http://placehold.it/83x111' />
                    <figcaption className='message-time'>10:38 am</figcaption>

                </figure></div>
              </div>
              <div className='message-object media-object'>
                <div className='media-object-section'>
                  <figure className='message-thumb'>
                    <img src='http://placehold.it/83x111' />
                    <figcaption className='message-time'>10:38 am</figcaption>

                </figure></div>
                <div className='media-object-section'>
                  <div className='message-bubble'>
                    <p>Marc<br />
                    I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
                  </div>
                </div>
              </div>            <div className='message-object media-object'>
                <div className='media-object-section'>
                  <div className='message-bubble right'>
                    <p>Marc<br />
                    I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
                  </div>
                </div>
                <div className='media-object-section'>
                  <figure className='message-thumb'>
                    <img src='http://placehold.it/83x111' />
                    <figcaption className='message-time'>10:38 am</figcaption>

                </figure></div>
              </div>
              <div className='message-object media-object'>
                <div className='media-object-section'>
                  <figure className='message-thumb'>
                    <img src='http://placehold.it/83x111' />
                    <figcaption className='message-time'>10:38 am</figcaption>

                </figure></div>
                <div className='media-object-section'>
                  <div className='message-bubble'>
                    <p>Marc<br />
                    I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
                  </div>
                </div>
              </div>            <div className='message-object media-object'>
                <div className='media-object-section'>
                  <div className='message-bubble right'>
                    <p>Marc<br />
                    I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
                  </div>
                </div>
                <div className='media-object-section'>
                  <figure className='message-thumb'>
                    <img src='http://placehold.it/83x111' />
                    <figcaption className='message-time'>10:38 am</figcaption>

                </figure></div>
              </div>
              <div className='message-object media-object'>
                <div className='media-object-section'>
                  <figure className='message-thumb'>
                    <img src='http://placehold.it/83x111' />
                    <figcaption className='message-time'>10:38 am</figcaption>

                </figure></div>
                <div className='media-object-section'>
                  <div className='message-bubble'>
                    <p>Marc<br />
                    I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
                  </div>
                </div>
              </div>            <div className='message-object media-object'>
                <div className='media-object-section'>
                  <div className='message-bubble right'>
                    <p>Marc<br />
                    I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
                  </div>
                </div>
                <div className='media-object-section'>
                  <figure className='message-thumb'>
                    <img src='http://placehold.it/83x111' />
                    <figcaption className='message-time'>10:38 am</figcaption>

                </figure></div>
              </div>
            </section>
          </div>

          <div aria-labelledby='panel2v-label' aria-hidden='true' role='tabpanel' className='tabs-panel' id='panel2v'>
            <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
          </div>
          <div className='tabs-panel' id='panel3v'>
            <img className='thumbnail' src='assets/img/generic/rectangle-3.jpg' />
          </div>
          <div className='tabs-panel' id='panel4v'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='tabs-panel' id='panel5v'>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='tabs-panel' id='panel6v'>
            <img className='thumbnail' src='assets/img/generic/rectangle-5.jpg' />
          </div>

          <div className='message-input'>
            <textarea className='message-textarea rounded'></textarea>
            <div className='float-right'>
              <input className='message-button button' value='Send' type='submit' />
            </div>
          </div>      </div>
      </div>
    </div>
  </div>
    )
  }
}

export default connect(mapStateToProps, actions)(MessagesView)
