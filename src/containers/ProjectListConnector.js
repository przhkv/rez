import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import version from '../constants/version';
import * as projectActions from '../actions/projectActions';
import ProjectListPage from '../components/ProjectListPage';

export const ProjectListConnector = props => (
  <div>
    <i>{'v. ' + version}</i>
    <ProjectListPage
      projectList={props.projectList}
      loadProjectList={props.actions.loadProjectList}/>
  </div>
);

ProjectListConnector.propTypes = {
  actions: PropTypes.object.isRequired,
  projectList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  projectList: state.projectList
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(projectActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListConnector);
