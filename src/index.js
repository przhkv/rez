/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, createMemoryHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import rootSaga from './sagas';
import * as projectListActions from './actions/projectListActions';
import * as settingsActions from './actions/settingsActions';
import './assets/styles/main.scss';

const history = createMemoryHistory('/');

const store = configureStore();
store.runSaga(rootSaga);
store.dispatch(settingsActions.load());
store.dispatch(projectListActions.load());

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>,
  document.getElementById('app')
);
