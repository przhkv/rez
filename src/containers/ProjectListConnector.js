import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigate } from '../actions/navigationActions';
import { load } from '../actions/projectListActions';
import { open } from '../actions/projectActions';
import { i18nSelector, loadedProjectsIdsSelector, projectListSelector } from '../selectors';
import ProjectListPage from '../components/project-list/ProjectListPage';

const ProjectListConnector = props => (
  <div>
    <ProjectListPage
      i18n={props.i18n}
      loadedProjectsIds={props.loadedProjectsIds}
      loadProjectList={props.load}
      navigate={props.navigate}
      openProject={props.open}
      projectList={props.projectList}
    />
  </div>
);

ProjectListConnector.propTypes = {
  i18n: PropTypes.object.isRequired,
  load: PropTypes.func.isRequired,
  loadedProjectsIds: PropTypes.array.isRequired,
  navigate: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  projectList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  loadedProjectsIds: loadedProjectsIdsSelector(state),
  projectList: projectListSelector(state)
});

export default connect(mapStateToProps, {load, navigate, open})(ProjectListConnector);
