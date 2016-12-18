import { Map } from 'immutable';
import React, { PropTypes } from 'react';

const ChannelModule = ({audioCtx, channel, gainNode, i18n, setMouseOut, setMouseOver, theme, updateProject}) => (
  <div className="bb b--light-gray">
    {channel.get('name')}
  </div>
);

ChannelModule.propTypes = {
  audioCtx: PropTypes.object.isRequired,
  channel: PropTypes.instanceOf(Map).isRequired,
  gainNode: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default ChannelModule;
