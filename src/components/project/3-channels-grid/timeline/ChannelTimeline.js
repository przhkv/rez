import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

const ChannelTimeline = ({
  channel, channelHeight, editedChannelId, i18n, setMouseOut, setMouseOver,
  theme, updateProject,
}) => (
  <div className="bb b--light-gray" style={{ height: channelHeight }}>
    <span className="ml2 light-gray i">todo timeline</span>
  </div>
);

ChannelTimeline.propTypes = {
  channel: PropTypes.instanceOf(Map).isRequired,
  channelHeight: PropTypes.number.isRequired,
  editedChannelId: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired,
};

export default ChannelTimeline;
