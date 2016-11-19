import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import CheckboxInput from '../common/inputs/CheckboxInput';
import SelectInput from '../common/inputs/SelectInput';
import { langs } from '../../constants/optionLists';
import { extractInputData } from '../../utils/mapUtils';

class SettingsPage extends Component {
  constructor(props) {
    super();
    this.state = {
      errors: {},
      modified: false,
      saving: false,
      settings: props.settings
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!Immutable.is(this.props.settings, nextProps.settings))
      this.setState({
        modified: false,
        saving: false,
        settings: nextProps.settings
      });
  }

  render() {
    const {props} = this;
    const {modified, saving, settings} = this.state;

    const updateSettingsState = ({field, val}, group) => {
      if (!modified)
        this.setState({modified: true});

      return this.setState({settings: settings.updateIn([group, field], () => val)});
    };

    const save = e => {
      e.preventDefault();
      this.setState({saving: true});
      props.updateSettings(settings);
    };

    const changeGeneralSettings = e => updateSettingsState(extractInputData(e), 'general');
    const changeSeqSettings = e => updateSettingsState(extractInputData(e), 'seq');

    return (
      <div>
        <h3>settings</h3>
        <p>
          account > Language: {settings.getIn(['general', 'accountLang'])}
        </p>
        <SelectInput
          label={'accountLang'}
          name={'accountLang'}
          onChange={changeGeneralSettings}
          options={langs.map(l => ({text: l, value: l}))}
          value={settings.getIn(['general', 'accountLang'])}/>
        <CheckboxInput
          label={'general > Enable Keyboard Shortcut'}
          name={'enableKeyboardShortcut'}
          onChange={changeSeqSettings}
          value={settings.getIn(['seq', 'enableKeyboardShortcut'])}
        />
        <input
          label={'defaultBPM'}
          name={'defaultBPM'}
          onChange={changeSeqSettings}
          type="text"
          value={settings.getIn(['seq', 'defaultBPM'])}
        />
        <hr />
        <input
          disabled={!modified || saving}
          type="button"
          value={props.i18n.controls.save}
          onClick={save}
        />
      </div>
    );
  }
}

SettingsPage.propTypes = {
  i18n: PropTypes.object.isRequired,
  settings: PropTypes.instanceOf(Immutable.Map).isRequired,
  updateSettings: PropTypes.func.isRequired
};

export default SettingsPage;
