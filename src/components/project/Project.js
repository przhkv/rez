import Immutable from 'immutable';
import React, { PropTypes } from 'react';
import Seq from './sequencer/Seq';

const Project = props => (
  <main className={'flex-auto order-3 overflow-y-auto w-100 ' + props.theme.bg}>
    <Seq {...props} />
  </main>
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
