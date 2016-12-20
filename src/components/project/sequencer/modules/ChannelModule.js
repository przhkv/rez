import { Map } from 'immutable';
import React, { PropTypes } from 'react';

const ChannelModule = ({channel, i18n, setMouseOut, setMouseOver, theme, updateProject}) => (
  <div className="bb b--light-gray">
    {channel.get('name')}
  </div>
);

ChannelModule.propTypes = {
  channel: PropTypes.instanceOf(Map).isRequired,
  i18n: PropTypes.object.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default ChannelModule;
