import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import version from '../constants/version';
import { load } from '../actions/projectListActions';
import { open } from '../actions/projectActions';
import { i18nSelector, loadedProjectsIdsSelector, projectListSelector } from '../selectors';
import ProjectListPage from '../components/project-list/ProjectListPage';

const ProjectListConnector = props => (
  <div>
    <i>{'v. ' + version}</i>
    <ProjectListPage
      i18n={props.i18n}
      loadedProjectsIds={props.loadedProjectsIds}
      loadProjectList={props.load}
      openProject={props.open}
      projectList={props.projectList}
    />
  </div>
);

ProjectListConnector.propTypes = {
  i18n: PropTypes.object.isRequired,
  load: PropTypes.func.isRequired,
  loadedProjectsIds: PropTypes.array.isRequired,
  open: PropTypes.func.isRequired,
  projectList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  loadedProjectsIds: loadedProjectsIdsSelector(state),
  projectList: projectListSelector(state)
});

export default connect(mapStateToProps, {load, open})(ProjectListConnector);
