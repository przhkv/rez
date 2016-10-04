/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, createMemoryHistory } from 'react-router';

import routes from './routes';
import configureStore from './store/configureStore';
import rootSaga from './sagas';
import {loadProjectList} from './actions/projectActions';

const history = createMemoryHistory('/');
const store = configureStore();
store.runSaga(rootSaga);
store.dispatch(loadProjectList());

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>,
  document.getElementById('app')
);
