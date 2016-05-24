import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { routerMiddleware } from 'react-router-redux'

export default function configureStore (initialState = {}, history) {
  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(thunk, routerMiddleware(history))

  // Create final store and subscribe router in debug env ie. for devtools
  const store = createStore(rootReducer, initialState, middleware)

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default

      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}