import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigate } from '../actions/navigationActions';
import { load } from '../actions/projectListActions';
import { open } from '../actions/projectActions';
import { i18nSelector, loadedProjectsIdsSelector, pageSelector, projectListSelector, themeSelector } from '../selectors';
import ProjectListPage from '../components/project-list/ProjectListPage';

const ProjectListConnector = props => (
  <ProjectListPage {...props} />
);

ProjectListConnector.propTypes = {
  i18n: PropTypes.object.isRequired,
  load: PropTypes.func.isRequired,
  loadedProjectsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  projectList: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  loadedProjectsIds: loadedProjectsIdsSelector(state),
  loading: false, // fixme
  page: pageSelector(state),
  projectList: projectListSelector(state),
  theme: themeSelector(state)
});

export default connect(mapStateToProps, {load, navigate, open})(ProjectListConnector);
