import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import { BLANK } from '../../../constants/sequencer/channelLayoutTypes';
import ControlsBlank from './ControlsBlank';

const ChannelControls = ({editedChannelId, i18n, project, setMouseOut, setMouseOver, theme, updateProject}) => {
  const _display = (editedChannelId && editedChannelId.length > 0) ? '' : 'dn';
  const indexOfChannel = project.get('channels').findIndex(c => c.get('channelId') === editedChannelId);
  const channel = (indexOfChannel >= 0) ? project.getIn(['channels', indexOfChannel]) : null;

  return (
    <div className={`flex-none order-4 ${_display}`}>
      {channel &&
        <div className={`h4 w-100 bt bb ${theme.sectionBorder}`}>
          {(channel.get('type') !== BLANK) && channel.get('name') + ' ' + channel.get('pos')}
          {(channel.get('type') === BLANK) &&
            <ControlsBlank
              i18n={i18n}
              indexOfChannel={indexOfChannel}
              setMouseOut={setMouseOut}
              setMouseOver={setMouseOver}
              theme={theme}
              updateProject={updateProject}
            />
          }
        </div>
      }
    </div>
  );
};

ChannelControls.propTypes = {
  editedChannelId: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default ChannelControls;
