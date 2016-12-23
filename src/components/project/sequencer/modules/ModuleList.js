import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import PanelModule from './PanelModule';
import PanelBlank from './PanelBlank';
import { BLANK } from '../../../../constants/sequencer/channelLayoutTypes';

const ModuleList = ({i18n, project, setMouseOut, setMouseOver, theme, updateProject}) => (
  <div className="w5 fl br b--light-gray">
    {project.get('channels').map((channel, key) =>
      (channel.get('type') === BLANK) ? (
          <PanelBlank {...{key, channel, i18n, setMouseOut, setMouseOver, theme, updateProject}} />
        ) : (
          <PanelModule
            key={key}
            channel={channel}
            editedChannelId={project.get('editedChannelId')}
            i18n={i18n}
            index={key}
            setMouseOut={setMouseOut}
            setMouseOver={setMouseOver}
            soloChannelId={project.get('soloChannelId')}
            theme={theme}
            updateProject={updateProject}
          />
        )
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
