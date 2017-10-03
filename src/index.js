import React from 'react';
import ReactDOM from 'react-dom';
import App from './root/js/Menu.js';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'

const store = createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('menu')
);




