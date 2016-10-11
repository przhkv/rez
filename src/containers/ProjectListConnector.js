import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import version from '../constants/version';
import { load } from '../actions/projectListActions';
import ProjectListPage from '../components/project-list/ProjectListPage';

const ProjectListConnector = props => (
  <div>
    <i>{'v. ' + version}</i>
    <ProjectListPage
      projectList={props.projectList}
      loadProjectList={props.load}/>
  </div>
);

ProjectListConnector.propTypes = {
  load: PropTypes.func.isRequired,
  projectList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  projectList: state.projectList
});

export default connect(mapStateToProps, {load})(ProjectListConnector);
