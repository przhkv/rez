/* eslint-disable import/default */
/* eslint-disable no-constant-condition */
import { takeEvery } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import * as i18nActions from '../actions/i18nActions';
import * as settingsActions from '../actions/settingsActions';
import * as actionTypes from '../constants/actionTypes';
import * as settingsApi from '../api/settingsApi';
import { settingsSelector } from '../selectors';

function* triggerLangSwitch(newLang) {
  const settings = yield select(settingsSelector);
  const accountLang = settings.getIn(['general', 'accountLang']);
  if (accountLang !== newLang)
    yield put(i18nActions.load(newLang));
}

function* getSettings() {
  const settings = yield call(settingsApi.fetchSettings);
  yield fork(triggerLangSwitch, settings.general.accountLang);
  yield put(settingsActions.receive(fromJS(settings)));
}

function* updateSettings(settings) {
  try {
    yield call(settingsApi.changeSettings, settings.toJS());
    yield fork(triggerLangSwitch, settings.getIn(['general', 'accountLang']));
    yield put(settingsActions.updateSuccess(settings));
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
