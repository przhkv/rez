import Immutable from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateRequest } from '../actions/settingsActions';
import { i18nSelector, settingsSelector } from '../selectors';
import SettingsPage from '../components/settings/SettingsPage';

const SettingsConnector = props => (
  <SettingsPage
    i18n={props.i18n}
    settings={props.settings}
    updateSettings={props.updateRequest}
  />
);

SettingsConnector.propTypes = {
  i18n: PropTypes.object.isRequired,
  settings: PropTypes.instanceOf(Immutable.Map).isRequired,
  updateRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  settings: settingsSelector(state)
});

export default connect(mapStateToProps, {updateRequest})(SettingsConnector);
