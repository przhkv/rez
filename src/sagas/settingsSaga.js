/* eslint-disable import/default */
/* eslint-disable no-constant-condition */
import { takeEvery } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import * as i18nActions from '../actions/i18nActions';
import * as settingsActions from '../actions/settingsActions';
import * as actionTypes from '../constants/actionTypes';
import * as settingsApi from '../api/settingsApi';
import { settingsSelector } from '../selectors';

function* triggerLangSwitch(newLang) {
  const {accountLang} = yield select(settingsSelector);
  if (accountLang !== newLang)
    yield put(i18nActions.load(newLang));
}

function* getSettings() {
  const settings = yield call(settingsApi.fetchSettings);
  yield fork(triggerLangSwitch, settings.accountLang);
  yield put(settingsActions.receive(settings));
}

function* updateSettings(settings) {
  try {
    const s = yield call(settingsApi.changeSettings, settings);
    yield fork(triggerLangSwitch, settings.accountLang);
    yield put(settingsActions.updateSuccess(s));
  } catch (e) {
    yield put(settingsActions.updateFailure(e));
  }
}

function* watchGetSettings() {
  yield* takeEvery(actionTypes.SETTINGS_LOAD, getSettings);
}

function* watchUpdateSettings () {
  while(true) {
    const {settings} = yield take(actionTypes.SETTINGS_UPDATE.REQUEST);
    yield fork(updateSettings, settings);
  }
}

export {
  watchGetSettings,
  watchUpdateSettings
};
