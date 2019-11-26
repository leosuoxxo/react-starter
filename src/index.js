import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'store'

import App from 'components/App';
import * as serviceWorker from './serviceWorker';


const store = configureStore({});

const Main = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)


const root = document.getElementById('root');

ReactDOM.render(Main(), root);

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    ReactDOM.render(Main(), root)
  })
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
