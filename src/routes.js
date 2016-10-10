import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ProjectListConnector from './containers/ProjectListConnector';
import SettingsConnector from './containers/SettingsConnector';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProjectListConnector} />
    <Route path="settings(/:tab)" component={SettingsConnector} />
  </Route>
);
