import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import version from '../constants/version';
import { load } from '../actions/projectListActions';
import ProjectListPage from '../components/project-list/ProjectListPage';

const ProjectListConnector = props => (
  <div>
    <i>{'v. ' + version}</i>
    <ProjectListPage
      projectList={props.projectList}
      loadProjectList={props.actions.load}/>
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
  actions: bindActionCreators({load}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListConnector);
