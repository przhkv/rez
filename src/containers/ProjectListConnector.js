import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigate } from '../actions/navigationActions';
import { load } from '../actions/projectListActions';
import { open } from '../actions/projectActions';
import { i18nSelector, loadedProjectsIdsSelector, projectListSelector, themeSelector } from '../selectors';
import MainSection from '../components/common/MainSection';
import ProjectListPage from '../components/project-list/ProjectListPage';

const ProjectListConnector = props => (
  <MainSection theme={props.theme}>
    <ProjectListPage {...props} />
  </MainSection>
);

ProjectListConnector.propTypes = {
  i18n: PropTypes.object.isRequired,
  load: PropTypes.func.isRequired,
  loadedProjectsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  navigate: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  projectList: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  loadedProjectsIds: loadedProjectsIdsSelector(state),
  projectList: projectListSelector(state),
  theme: themeSelector(state)
});

export default connect(mapStateToProps, {load, navigate, open})(ProjectListConnector);
