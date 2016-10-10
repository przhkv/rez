import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateRequest } from '../actions/settingsActions';
import SettingsPage from '../components/settings/SettingsPage';

const SettingsConnector = props => {
  return (
    <SettingsPage
      i18n={props.i18n}
      settings={props.settings}
      updateSettings={props.actions.updateRequest}
    />
  );
};

SettingsConnector.propTypes = {
  actions: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    i18n: state.i18n,
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({updateRequest}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsConnector);
