import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import ChannelTimeline from './ChannelTimeline';

const Timeline = ({i18n, project, setMouseOut, setMouseOver, theme, updateProject}) => (
  <div className="overflow-x-hidden nowrap">
    {
      project.get('channels')
        .map(c => (
          <ChannelTimeline
            key={c.get('channelId')}
            channel={c}
            editedChannelId={project.get('editedChannelId')}
            i18n={i18n}
            setMouseOut={setMouseOut}
            setMouseOver={setMouseOver}
            theme={theme}
            updateProject={updateProject}
          />
        ))
    }
  </div>
);

Timeline.propTypes = {
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default Timeline;
