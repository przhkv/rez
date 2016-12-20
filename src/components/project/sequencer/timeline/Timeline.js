import { Map } from 'immutable';
import React, { PropTypes } from 'react';

const Timeline = ({i18n, project, setMouseOut, setMouseOver, theme, updateProject}) => (
  <div className="overflow-x-scroll nowrap">
    {project.get('channels').map((c, i) => (
      <div key={i} className="bb b--light-gray">
        <span className="ml2 light-gray i">todo timeline</span>
      </div>
    ))}
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