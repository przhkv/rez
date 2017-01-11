import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import { BLANK, NOISE } from '../../../constants/sequencer/channelLayoutTypes';
import ControlsBlank from './blank/ControlsBlank';
import ControlsNoise from './noise/ControlsNoise';

const ChannelControls = ({audioCtx, gainNode, editedChannelId, i18n, project, setMouseOut, setMouseOver, theme,
                         updateProject}) => {
  const _display = (editedChannelId && editedChannelId.length > 0) ? '' : 'dn';
  const indexOfChannel = project.get('channels').findIndex(c => c.get('channelId') === editedChannelId);
  const channel = (indexOfChannel >= 0) ? project.getIn(['channels', indexOfChannel]) : null;
  const type = channel ? channel.get('type') : '';

  return (
    <div className={`flex-none order-4 ${_display}`}>
      {channel &&
        <div className={`h4 w-100 bt bb ${theme.sectionBorder}`}>
          {type === BLANK &&
            <ControlsBlank
              {...{i18n, indexOfChannel, setMouseOut, setMouseOver, theme, updateProject}}
            />
          }
          {type === NOISE &&
            <ControlsNoise
              {...{audioCtx, channel, gainNode, i18n, indexOfChannel, setMouseOut, setMouseOver, theme, updateProject}}
            />
          }
          {(type !== BLANK && type !== NOISE) &&
            <div>channel.get('name') + ' ' + channel.get('pos')</div>
          }
        </div>
      }
    </div>
  );
};

ChannelControls.propTypes = {
  audioCtx: PropTypes.object.isRequired,
  gainNode: PropTypes.object.isRequired,
  editedChannelId: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default ChannelControls;
