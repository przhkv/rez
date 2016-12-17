import Immutable from 'immutable';
import React, { PropTypes } from 'react';
import Seq from './sequencer/Seq';
import Toolbar from './sequencer/Toolbar';

const Project = props => (
  <div>
    <Toolbar
      channels={props.project.get('channels')}
      i18n={props.i18n}
      setMouseOut={props.setMouseOut}
      setMouseOver={props.setMouseOver}
      theme={props.theme}
      updateProject={props.updateProject}
    />
    <Seq {...props} />
  </div>
);

Project.propTypes = {
  audioCtx: PropTypes.object.isRequired,
  gainNode: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Immutable.Map).isRequired,
  save: PropTypes.func.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default Project;
