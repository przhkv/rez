import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { isTrue, reverse } from '../../../../utils/stringBoolUtils';

const magicHeight = expanded => `${expanded ? '75' : '53'}px`;

const ChannelTimeline = ({ channel, editedChannelId, i18n, setMouseOut, setMouseOver, theme,
                           updateProject }) => {
  const chId = channel.get('channelId');
  const {expanded, muted} = channel.getIn(['payload', 'state']).toJS();
  const edited = (chId === editedChannelId);
  const height = magicHeight(isTrue(expanded));

  return (
    <div
      key={chId}
      className={`bb b--light-gray ${edited ? theme.seqTimelineSelectedBg : theme.seqTimelineBg}`}
      style={{ height }}
    >
      <span className="ml2 light-gray i">todo timeline</span>
    </div>
  );
};

ChannelTimeline.propTypes = {
  channel: PropTypes.instanceOf(Map).isRequired,
  editedChannelId: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default ChannelTimeline;
