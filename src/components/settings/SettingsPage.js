import Immutable from 'immutable';
import React, { Component, PropTypes } from 'react';
import CheckboxInput from '../common/inputs/CheckboxInput';
import SelectInput from '../common/inputs/SelectInput';
import SubmitButton from '../common/buttons/SubmitButton';
import TextInput  from '../common/inputs/TextInput';
import { langs } from '../../constants/optionLists';
import { extractInputData } from '../../utils/mapUtils';

class SettingsPage extends Component {
  constructor(props) {
    super(props);
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
    const {props, state} = this;
    const {i18n} = props;
    const {modified, saving, settings} = state;

    const updateSettingsState = ({field, val}, group) =>
      this.setState({
        modified: true,
        settings: settings.updateIn([group, field], () => val)
      });

    const save = e => {
      e.preventDefault();
      this.setState({saving: true});
      props.updateSettings(settings);
    };

    const changeGeneralSettings = e => updateSettingsState(extractInputData(e), 'general');
    const changeSeqSettings = e => updateSettingsState(extractInputData(e), 'seq');

    return (
      <article className="pa3 pv4-ns ph6-ns">
        <h3 className="f5 ttu fw6 mt0 mb3 bb b--black-70 pb2 black-70 mv3">{i18n.settings.general}</h3>
        <p>
          account > Language: {settings.getIn(['general', 'accountLang'])}
        </p>
        <SelectInput
          label={'accountLang'}
          name={'accountLang'}
          onChange={changeGeneralSettings}
          options={langs.map(l => ({text: l, value: l}))}
          value={settings.getIn(['general', 'accountLang'])}
        />

        <h3 className="f5 ttu fw6 mt0 mb3 bb b--black-70 pb2 black-70 mv3">
          {i18n.settings.sequencer}
        </h3>
        <CheckboxInput
          label={'Enable Keyboard Shortcut'}
          name={'enableKeyboardShortcut'}
          onChange={changeSeqSettings}
          value={settings.getIn(['seq', 'enableKeyboardShortcut'])}
        />
        <TextInput
          label={'Default BPM'}
          onChange={changeSeqSettings}
          name={'defaultBPM'}
          value={settings.getIn(['seq', 'defaultBPM'])}
        />
        <SubmitButton
          disabled={!modified || saving}
          onClick={save}
          text={i18n.controls.save}
        />
      </article>
    );
  }
}

SettingsPage.propTypes = {
  i18n: PropTypes.object.isRequired,
  settings: PropTypes.instanceOf(Immutable.Map).isRequired,
  updateSettings: PropTypes.func.isRequired
};

export default SettingsPage;
