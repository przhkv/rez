import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import PanelModule from './PanelModule';
import PanelModuleBlank from './PanelModuleBlank';
import { BLANK } from '../../../../constants/sequencer/channelLayoutTypes';

const ModuleList = ({i18n, project, setMouseOut, setMouseOver, theme, updateProject}) => (
  <div className="w5 fl br b--light-gray">
    {project.get('channels').map((channel, key) =>
      (channel.get('type') === BLANK) ?
        (<PanelModuleBlank {...{key, channel, i18n, setMouseOut, setMouseOver, theme, updateProject}} />) :
        (<PanelModule {...{key, channel, i18n, setMouseOut, setMouseOver, theme, updateProject}} />)
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
