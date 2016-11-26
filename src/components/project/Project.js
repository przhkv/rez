import Immutable from 'immutable';
import React, { Component, PropTypes } from 'react';
import SubmitButton from '../common/buttons/SubmitButton';
import { NEUTRAL_LIGHT } from '../../constants/components/buttonStyles';
import { CLOSE } from '../../constants/seqElements';

const Project = ({closeProject, i18n, project, setMouseOut, setMouseOver, theme}) => {
  const setOnMouseOver = () => setMouseOver(CLOSE);
  return (
    <section className="pa3 pv4-ns ph6-ns">
      <h5 className={theme.commonText}>{'project ' + project.get('title')}</h5>
      <h5 className={theme.commonText}>{'bpm ' + project.getIn(['common', 'bpm'])}</h5>
      <section className="db">
        <SubmitButton
          buttonStyle={NEUTRAL_LIGHT}
          onClick={closeProject}
          onMouseOut={setMouseOut}
          onMouseOver={setOnMouseOver}
          text={i18n.controls.close}
          theme={theme}
        />
      </section>
    </section>
  );
};

Project.propTypes = {
  closeProject: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Immutable.Map).isRequired,
  save: PropTypes.func.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default Project;
