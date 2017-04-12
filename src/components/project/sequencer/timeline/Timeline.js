import { Map } from 'immutable';
import React from 'react';
import PropTypes from 'prop-types';

const Timeline = ({i18n, project, setMouseOut, setMouseOver, theme, updateProject}) => (
  <div className="overflow-x-scroll nowrap">
    {
      project.get('channels')
        .map(c => (
          <div key={c.get('channelId')} className="bb b--light-gray">
            <span className="ml2 light-gray i">todo timeline</span>
          </div>
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
