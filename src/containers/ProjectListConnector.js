import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import version from '../constants/version';
import { load } from '../actions/projectListActions';
import { open } from '../actions/projectActions';
import { projectListSelector } from '../selectors';
import ProjectListPage from '../components/project-list/ProjectListPage';

const ProjectListConnector = props => (
  <div>
    <i>{'v. ' + version}</i>
    <ProjectListPage
      projectList={props.projectList}
      openProject={props.open}
      loadProjectList={props.load}/>
  </div>
);

ProjectListConnector.propTypes = {
  load: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  projectList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  projectList: projectListSelector(state)
});

export default connect(mapStateToProps, {load, open})(ProjectListConnector);
