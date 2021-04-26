import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import middleware from './middleware/index';
import throttle from 'lodash.throttle';

const persistedState = localStorage.getItem('gameData')
  ? JSON.parse(localStorage.getItem('gameData'))
  : {};

const store = createStore(reducer, persistedState, middleware);

store.subscribe(
  throttle(() => {
    localStorage.setItem('gameData', JSON.stringify(store.getState()));
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
