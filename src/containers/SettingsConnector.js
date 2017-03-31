import Immutable from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigate } from '../actions/navigationActions';
import { updateRequest } from '../actions/settingsActions';
import { i18nSelector, pageSelector, settingsSelector, themeSelector } from '../selectors';
import SettingsPage from '../components/settings/SettingsPage';

const SettingsConnector = props => (
  <SettingsPage {...props} />
);

SettingsConnector.propTypes = {
  i18n: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  settings: PropTypes.instanceOf(Immutable.Map).isRequired,
  theme: PropTypes.object.isRequired,
  updateRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  loading: false, // fixme
  page: pageSelector(state),
  settings: settingsSelector(state),
  theme: themeSelector(state)
});

export default connect(mapStateToProps, {navigate, updateRequest})(SettingsConnector);
