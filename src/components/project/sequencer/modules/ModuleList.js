import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import PanelModule from './PanelModule';
import PanelBlank from './PanelBlank';
import { BLANK } from '../../../../constants/sequencer/channelLayoutTypes';

const ModuleList = ({i18n, project, setMouseOut, setMouseOver, theme, updateProject}) => (
  <div className="w5 fl br b--light-gray">
    {project.get('channels').map((channel, i) =>
      ((channel.get('type') === BLANK) ? (
        <PanelBlank
          key={channel.channelId}
          channel={channel}
          editedChannelId={project.get('editedChannelId')}
          i18n={i18n}
          setMouseOut={setMouseOut}
          setMouseOver={setMouseOver}
          theme={theme}
          updateProject={updateProject}
        />
      ) : (
        <PanelModule
          key={channel.channelId}
          channel={channel}
          editedChannelId={project.get('editedChannelId')}
          i18n={i18n}
          index={i}
          setMouseOut={setMouseOut}
          setMouseOver={setMouseOver}
          soloChannelId={project.get('soloChannelId')}
          theme={theme}
          updateProject={updateProject}
        />
      )))}
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
