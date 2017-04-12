import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigate } from '../actions/navigationActions';
import { i18nSelector, themeSelector } from '../selectors';
import NotFoundPage from '../components/misc/NotFoundPage';

const ErrorConnector = props => (
  <NotFoundPage {...props} />
);

ErrorConnector.propTypes = {
  i18n: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  theme: themeSelector(state),
});

export default connect(mapStateToProps, {navigate})(ErrorConnector);
