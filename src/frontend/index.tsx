import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import * as timeago from 'timeago.js';
import es from 'timeago.js/lib/lang/es';
import { createBrowserHistory } from 'history';
import App from './routes';
import { Provider } from './context';
import { ContextInterface } from './utils/interface/Context';
import './sass/index.scss';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    __PRELOADED_STATE__: ContextInterface;
  }
}

timeago.register('es', es);

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
const app = document.getElementById('app');
const state = document.getElementById('preloadedState');
delete window.__PRELOADED_STATE__;
document.body.removeChild(state);

ReactDOM.render(
  <Provider initialState={preloadedState}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  app,
);
