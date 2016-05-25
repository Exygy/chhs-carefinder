import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { applyRouterMiddleware, Router } from 'react-router'
// react-router-scroll allows it to auto scrollToTop after any route transition
import useScroll from 'react-router-scroll'
import 'styles/core.scss'

export default class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired
  }

  get content () {
    return (
      <Router history={this.props.history} render={applyRouterMiddleware(useScroll())}>
        {this.props.routes}
      </Router>
    )
  }

  render () {
    return (
      <Provider store={this.props.store}>
        {this.content}
      </Provider>
    )
  }
}
