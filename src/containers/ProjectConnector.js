import Immutable from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigate } from '../actions/navigationActions';
import { close, purge, save } from '../actions/projectActions';
import { i18nSelector, settingsSelector, themeSelector, makeGetSelectedProject } from '../selectors';
import ProjectPage from '../components/project/ProjectPage';

const ProjectConnector = props => (
  <ProjectPage {...props} />
);

ProjectConnector.propTypes = {
  close: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  project: PropTypes.instanceOf(Immutable.Map).isRequired,
  purge: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  settings: PropTypes.instanceOf(Immutable.Map).isRequired,
  theme: PropTypes.object.isRequired
};

const makeMapStateToProps = () => {
  const getSelectedProject = makeGetSelectedProject();
  const mapStateToProps = (state, props) => ({
    i18n: i18nSelector(state),
    loading: false, // fixme
    project: getSelectedProject(state, props),
    settings: settingsSelector(state),
    theme: themeSelector(state),
  });
  return mapStateToProps;
};

export default connect(makeMapStateToProps, {close, navigate, purge, save})(ProjectConnector);
