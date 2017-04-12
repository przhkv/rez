/* eslint-disable max-len */
import { Map } from 'immutable';
import React from 'react';
import PropTypes from 'prop-types';
import { BLANK, NOISE, ROUTE } from '../../../constants/sequencer/channelLayoutTypes';
import ControlsBlank from './blank/ControlsBlank';
import ControlsNoise from './noise/ControlsNoise';
import ControlsRoute from './route/ControlsRoute';

const ChannelControls = ({ audioCtx, gainNode, editedChannelId, i18n, project, setMouseOut,
                           setMouseOver, theme, updateProject }) => {
  const displayClass = (editedChannelId && editedChannelId.length > 0) ? '' : 'dn';
  const indexOfChannel =
    project.get('channels').findIndex(c => c.get('channelId') === editedChannelId);
  const channel = (indexOfChannel >= 0) ? project.getIn(['channels', indexOfChannel]) : null;
  const type = channel ? channel.get('type') : '';

  return (
    <div className={`flex-none order-4 ${displayClass}`}>
      {
        channel &&
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
          {(type === ROUTE) &&
            <ControlsRoute
              {...{channels: project.get('channels'), i18n, indexOfChannel, setMouseOut, setMouseOver, theme, updateProject}}
            />
          }
          {(![BLANK, NOISE, ROUTE].includes(type)) &&
            `${channel.get('name')} ${channel.get('pos')}`
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
