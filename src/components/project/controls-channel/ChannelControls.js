import { Map } from 'immutable';
import React, { PropTypes } from 'react';

const ChannelControls = ({editedChannelId, i18n, project, setMouseOut, setMouseOver, theme, updateProject}) => {
  const cName = (editedChannelId && editedChannelId.length > 0) ? '' : 'dn';
  const indexOfChannel = project.get('channels').findIndex(c => c.get('channelId') === editedChannelId);
  const channel = (indexOfChannel >= 0) ? project.getIn(['channels', indexOfChannel]) : null;

  return (
    <div className={`flex-none order-4 ${cName}`}>
      {channel && <h4>{channel.get('name') + ' ' + channel.get('pos')}</h4>}
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
