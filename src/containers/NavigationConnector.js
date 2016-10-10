import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as navigationActions from '../actions/navigationActions';
import Header from '../components/common/Header';

const NavigationConnector = props => {
  return (
    <Header
      i18n={props.i18n}
      loading={props.loading}
      navigate={props.actions.navigate}
      page={props.page}
    />
  );
};

NavigationConnector.propTypes = {
  actions: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    i18n: state.i18n,
    loading: false,//todo state.ajaxCallsInProgress > 0,
    page: state.page
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(navigationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationConnector);
