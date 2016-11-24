import Immutable from 'immutable';
import React, { Component, PropTypes } from 'react';

const Project = ({closeProject, i18n, project, theme}) => {
  return (
    <section className="pa3 pv4-ns ph6-ns">
      <h5>{'project ' + project.get('title')}</h5>
      <h5>{'bpm ' + project.getIn(['common', 'bpm'])}</h5>
      <input
        type="button"
        value={i18n.controls.close}
        onClick={closeProject}
      />
    </section>
  );
};

Project.propTypes = {
  closeProject: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Immutable.Map).isRequired,
  save: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default Project;
