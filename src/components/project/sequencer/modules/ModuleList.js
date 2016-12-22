import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import PanelModuleBlank from './PanelModuleBlank';
import { BLANK, FILE, NOISE, OSCILLATOR, ROUTE } from '../../../../constants/sequencer/channelLayoutTypes';

const _createPanel = (props, type) => {
  const modules = {
    [BLANK]: <PanelModuleBlank {...props} />
  };
  return modules[type] || modules[BLANK];
};

const ModuleList = ({i18n, project, setMouseOut, setMouseOver, theme, updateProject}) => (
  <div className="w5 fl br b--light-gray">
    {project.get('channels').map((channel, key) =>
      _createPanel({key, channel, i18n, setMouseOut, setMouseOver, theme, updateProject}, channel.get('type'))
    )}
  </div>
);

ModuleList.propTypes = {
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default ModuleList;
