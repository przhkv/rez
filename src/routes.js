import React from 'react';
import ErrorConnector from './containers/ErrorConnector';
import ProjectConnector from './containers/ProjectConnector';
import ProjectListConnector from './containers/ProjectListConnector';
import SettingsConnector from './containers/SettingsConnector';

export default [
  { path: '/', action: props => <ProjectListConnector {...props} /> },
  { path: '/seq/:id?', action: props => <ProjectConnector {...props} /> },
  { path: '/settings', action: props => <SettingsConnector {...props} /> },
  { path: '/error', action: props => <ErrorConnector {...props} /> },
];
