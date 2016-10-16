import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { close, purge, save } from '../actions/projectActions';
import { i18nSelector, settingsSelector, makeGetSelectedProject } from '../selectors';
import defaultProject from '../constants/inits/project';
import ProjectPage from '../components/project/ProjectPage';

const ProjectConnector = props => {
  return (
    <ProjectPage
      closeProject={props.close}
      deleteProject={props.purge}
      i18n={props.i18n}
      project={props.project}
      saveProject={props.save}
    />
  );
};

ProjectConnector.propTypes = {
  close: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
  purge: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired
};

const makeMapStateToProps = () => {
  const getSelectedProject = makeGetSelectedProject();
  const mapStateToProps = (state, props) => {
    return {
      i18n: i18nSelector(state),
      project: props.params.id ? getSelectedProject(state, props) : defaultProject,
      settings: settingsSelector(state)
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps, {close, purge, save})(ProjectConnector);
