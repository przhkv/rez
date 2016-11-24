import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ProjectConnector from './containers/ProjectConnector';
import ProjectListConnector from './containers/ProjectListConnector';
import SettingsConnector from './containers/SettingsConnector';

export default (
  <Route path="/">
    <IndexRoute component={ProjectListConnector} />
    <Route path="seq(/:id)" component={ProjectConnector} />
    <Route path="settings(/:tab)" component={SettingsConnector} />
  </Route>
);
