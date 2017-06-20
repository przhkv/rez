/* eslint-disable no-constant-condition */
import { takeEvery } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import * as i18nActions from '../actions/i18nActions';
import * as themeActions from '../actions/themeActions';
import * as settingsActions from '../actions/settingsActions';
import { SETTINGS_LOAD, SETTINGS_UPDATE } from '../constants/actionTypes';
import * as settingsApi from '../api/settingsApi';
import { settingsSelector } from '../selectors';

function* triggerLangSwitch(newLang) {
  const settings = yield select(settingsSelector);
  const language = settings.getIn(['general', 'language']);
  if (language !== newLang)
    yield put(i18nActions.load(newLang));
}

function* triggerThemeSwitch(newTheme) {
  const settings = yield select(settingsSelector);
  const theme = settings.getIn(['general', 'theme']);
  if (theme !== newTheme)
    yield put(themeActions.load(newTheme));
}

function* getSettings() {
  const settings = yield call(settingsApi.fetchSettings);
  yield fork(triggerLangSwitch, settings.general.language);
  yield fork(triggerThemeSwitch, settings.general.theme);
  yield put(settingsActions.receive(fromJS(settings)));
}

function* updateSettings(settings) {
  try {
    yield call(settingsApi.changeSettings, settings.toJS());
    yield fork(triggerLangSwitch, settings.getIn(['general', 'language']));
    yield fork(triggerThemeSwitch, settings.getIn(['general', 'theme']));
    yield put(settingsActions.updateSuccess(settings));
  } catch (e) {
    yield put(settingsActions.updateFailure(e));
  }
}

function* watchGetSettings() {
  yield* takeEvery(SETTINGS_LOAD, getSettings);
}

function* watchUpdateSettings() {
  while (true) {
    const {settings} = yield take(SETTINGS_UPDATE.REQUEST);
    yield fork(updateSettings, settings);
  }
}

export {
  watchGetSettings,
  watchUpdateSettings,
};
