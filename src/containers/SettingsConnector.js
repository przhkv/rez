import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateRequest } from '../actions/settingsActions';
import SettingsPage from '../components/settings/SettingsPage';

const SettingsConnector = props => {
  return (
    <SettingsPage
      i18n={props.i18n}
      settings={props.settings}
      updateSettings={props.updateRequest}
    />
  );
};

SettingsConnector.propTypes = {
  i18n: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  updateRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  i18n: state.i18n,
  settings: state.settings
});

export default connect(mapStateToProps, {updateRequest})(SettingsConnector);
