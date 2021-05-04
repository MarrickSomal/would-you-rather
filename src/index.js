import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import middleware from './middleware/index';
import throttle from 'lodash.throttle';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const persistedState = localStorage.getItem('gameData')
  ? JSON.parse(localStorage.getItem('gameData'))
  : {};

const store = createStore(reducers, persistedState, middleware);

store.subscribe(
  throttle(() => {
    localStorage.setItem('gameData', JSON.stringify(store.getState()));
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
