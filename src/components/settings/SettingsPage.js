import React, { Component, PropTypes } from 'react';
import SelectInput from '../common/inputs/SelectInput';
import { langs } from '../../constants/optionLists';

class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: Object.assign({}, props.settings),
      errors: {},
      saving: false,
      modified: props.settings.modified
    };
  }

  render() {
    const {props} = this;
    const {settings} = this.state;

    const updateSettingsState = e => {
      if (!this.state.modified)
        this.setState({modified: true});

      const field = e.target.name;
      const val = (e.target.type === 'checkbox') ? e.target.checked.toString() : e.target.value;

      let {settings} = this.state;
      settings[field] = val;

      return this.setState({settings});
    };

    const save = e => {
      e.preventDefault();
      this.setState({saving: true});
      props.updateSettings(settings);
    };
    return (
      <div>
        <h3>settings</h3>
        <p>
          account > Language: {settings.accountLang}
        </p>
        <SelectInput
          label={'accountLang'}
          name={'accountLang'}
          onChange={updateSettingsState}
          options={langs.map(l => ({text: l, value: l}))}
          value={settings.accountLang}/>
        <p>
          general > Enable Keyboard Shortcut: {settings.general.enableKeyboardShortcut.toString()}
        </p>
        <input type="button" value="save" onClick={save}/>
      </div>
    );
  }
}

SettingsPage.propTypes = {
  i18n: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  updateSettings: PropTypes.func.isRequired
};

export default SettingsPage;
