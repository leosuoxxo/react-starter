import { createStore, applyMiddleware, compose } from 'redux';
import config from 'config';
import middlewares from './middlewares';
import reducer from './reducer';
import thunk from 'redux-thunk';

const { isDev, isBrowser } = config;

// development tools
const composeEnhancers =
  isBrowser && isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

middlewares.push(thunk);

if (isDev) {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const enhancers = [applyMiddleware(...middlewares)];

const configureStore = initialState => {
  const store = createStore(reducer, initialState, composeEnhancers(...enhancers));
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;
