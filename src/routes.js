import React from 'react';
import ProjectConnector from './containers/ProjectConnector';
import ProjectListConnector from './containers/ProjectListConnector';
import SettingsConnector from './containers/SettingsConnector';

export default [
  { path: '/', action: () => <ProjectListConnector /> },
  { path: '/seq/:id?', action: props => <ProjectConnector {...props} /> },
  { path: '/settings', action: () => <SettingsConnector /> }
];
