import Immutable from 'immutable';
import React, { PropTypes } from 'react';
import TestSeq from './sequencer/TestSeq';

const Project = ({audioCtx, gainNode, i18n, project, setMouseOut, setMouseOver, theme}) => {

  return (
    <section>
      <h5 className={theme.commonText}>{project.get('title')}</h5>
      <TestSeq audioCtx={audioCtx} gainNode={gainNode} i18n={i18n} project={project} theme={theme} />
    </section>
  );
};

Project.propTypes = {
  audioCtx: PropTypes.object.isRequired,
  gainNode: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Immutable.Map).isRequired,
  save: PropTypes.func.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default Project;
