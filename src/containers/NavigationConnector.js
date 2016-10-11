import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigate } from '../actions/navigationActions';
import { i18nSelector, pageSelector } from '../selectors';
import Header from '../components/common/Header';

const NavigationConnector = props => {
  return (
    <Header
      i18n={props.i18n}
      loading={props.loading}
      navigate={props.navigate}
      page={props.page}
    />
  );
};

NavigationConnector.propTypes = {
  i18n: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  loading: false,//todo state.ajaxCallsInProgress > 0,
  page: pageSelector(state)
});

export default connect(mapStateToProps, {navigate})(NavigationConnector);
