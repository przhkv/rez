import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import history from './history';
import router from './router';
import routes from './routes';
import configureStore from './store/configureStore';
import rootSaga from './sagas';
import * as projectListActions from './actions/projectListActions';
import * as settingsActions from './actions/settingsActions';
import './assets/styles/main.scss';

const store = configureStore(window.__INITIAL_STATE__); // eslint-disable-line no-underscore-dangle
store.runSaga(rootSaga);
store.dispatch(settingsActions.load());
store.dispatch(projectListActions.load());

const renderComponent = (component) => {
  ReactDOM.render(
    <Provider store={store}>{component}</Provider>,
    document.getElementById('app'),
  );
};

const render = (location) => {
  router.resolve(routes, location)
    .then(renderComponent)
    .catch((error) => {
      console.log(error); // eslint-disable-line no-console
      return router
        .resolve(routes, { ...location, error })
        .then(renderComponent);
    });
};

history.listen(render);
render(history.location);
