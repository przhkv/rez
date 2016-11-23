import Immutable from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateRequest } from '../actions/settingsActions';
import { i18nSelector, settingsSelector, themeSelector } from '../selectors';
import MainSection from '../components/common/MainSection';
import SettingsPage from '../components/settings/SettingsPage';

const SettingsConnector = props => (
  <MainSection theme={props.theme}>
    <SettingsPage {...props} />
  </MainSection>
);

SettingsConnector.propTypes = {
  i18n: PropTypes.object.isRequired,
  settings: PropTypes.instanceOf(Immutable.Map).isRequired,
  theme: PropTypes.object.isRequired,
  updateRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  settings: settingsSelector(state),
  theme: themeSelector(state)
});

export default connect(mapStateToProps, {updateRequest})(SettingsConnector);
