import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigate } from '../actions/navigationActions';
import { i18nSelector, loadedProjectsLinksSelector, pageSelector } from '../selectors';
import Header from '../components/common/Header';

const NavigationConnector = props => (
  <Header
    i18n={props.i18n}
    loadedProjectsLinks={props.loadedProjectsLinks}
    loading={props.loading}
    navigate={props.navigate}
    page={props.page}
  />
);

NavigationConnector.propTypes = {
  i18n: PropTypes.object.isRequired,
  loadedProjectsLinks: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  loadedProjectsLinks: loadedProjectsLinksSelector(state),
  loading: false,//todo state.ajaxCallsInProgress > 0,
  page: pageSelector(state)
});

export default connect(mapStateToProps, {navigate})(NavigationConnector);
