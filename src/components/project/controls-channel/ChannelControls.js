import { Map } from 'immutable';
import React, { PropTypes } from 'react';

const ChannelControls = ({i18n, project, selChannelID, setMouseOut, setMouseOver, theme, updateProject}) => {
  const cName = (selChannelID && selChannelID.length > 0) ? '' : 'dn';
  const indexOfChannel = project.get('channels').findIndex(c => c.chID === selChannelID);
  const channel = (indexOfChannel >= 0) ? project.getIn(['channels', indexOfChannel]) : null;
  return (
    <div className={`flex-none order-4 ${cName}`}>
      {channel && <h4>{channel.get('name')}</h4>}
    </div>
  );
};

ChannelControls.propTypes = {
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  selChannelID: PropTypes.string,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default ChannelControls;
