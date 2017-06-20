import { Map, is as immIs } from 'immutable';
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../common/Footer';
import Header from '../common/Header';
import MainSection from '../common/MainSection';
import Wrapping from '../common/Wrapping';
import CheckboxInput from '../common/inputs/CheckboxInput';
import SelectInput from '../common/inputs/SelectInput';
import SubmitButton from '../common/buttons/SubmitButton';
import TextInput from '../common/inputs/TextInput';
import { NUMBER } from '../../constants/components/inputTypes';
import { langs, themes } from '../../constants/optionLists';
import { extractInputData, formatSelectOptions } from '../../utils/mapUtils';

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      modified: false,
      saving: false,
      settings: props.settings,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!immIs(this.props.settings, nextProps.settings))
      this.setState({
        modified: false,
        saving: false,
        settings: nextProps.settings,
      });
  }

  render() {
    const {props, state} = this;
    const {i18n, loading, navigate, page, theme, updateRequest} = props;
    const {modified, saving, settings} = state;

    const updateSettingsState = ({field, val}, group) =>
      this.setState({
        modified: true,
        settings: settings.updateIn([group, field], () => val),
      });

    const save = () => {
      this.setState({saving: true});
      updateRequest(settings);
    };

    const changeGeneralSettings = e => updateSettingsState(extractInputData(e), 'general');
    const changeSeqSettings = e => updateSettingsState(extractInputData(e), 'seq');

    return (
      <Wrapping>
        <Header theme={theme} i18n={i18n} loading={loading} navigate={navigate} page={page} />
        <MainSection theme={theme}>
          <section className="pa3 pv4-ns ph6-ns">
            <article className="pb3">
              <h3 className={`f5 ttu fw6 mt0 mb3 bb pb2 mv3 ${theme.articleHeader}`}>{i18n.settings.general}</h3>
              <SelectInput
                label={i18n.settings.language}
                name={'language'}
                onChange={changeGeneralSettings}
                options={formatSelectOptions(langs, i18n.options.language)}
                theme={theme}
                value={settings.getIn(['general', 'language'])}
              />
              <SelectInput
                label={i18n.settings.theme}
                name={'theme'}
                onChange={changeGeneralSettings}
                options={formatSelectOptions(themes, i18n.options.theme)}
                theme={theme}
                value={settings.getIn(['general', 'theme'])}
              />
            </article>
            <article className="pb3">
              <h3 className={`f5 ttu fw6 mt0 mb3 bb pb2 mv3 ${theme.articleHeader}`}>
                {i18n.settings.sequencer}
              </h3>
              <CheckboxInput
                label={i18n.settings.enableKeyboardShortcut}
                name={'enableKeyboardShortcut'}
                onChange={changeSeqSettings}
                theme={theme}
                value={settings.getIn(['seq', 'enableKeyboardShortcut'])}
              />
              <TextInput
                label={i18n.settings.defaultBPM}
                onChange={changeSeqSettings}
                name={'defaultBPM'}
                type={NUMBER}
                theme={theme}
                value={settings.getIn(['seq', 'defaultBPM'])}
              />
            </article>
            <SubmitButton
              disabled={!modified || saving}
              onClick={save}
              text={i18n.controls.save}
              theme={theme}
            />
          </section>
        </MainSection>
        <Footer i18n={i18n} theme={theme} />
      </Wrapping>
    );
  }
}

SettingsPage.propTypes = {
  i18n: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  settings: PropTypes.instanceOf(Map).isRequired,
  updateRequest: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default SettingsPage;
