/* eslint-disable import/default */
/* eslint-disable no-constant-condition */
import { takeEvery } from 'redux-saga';
import { take, put, call, fork } from 'redux-saga/effects';
import * as settingsActions from '../actions/settingsActions';
import * as actionTypes from '../constants/actionTypes';
import * as settingsApi from '../api/settingsApi';

function* getSettings() {
  const settings = yield call(settingsApi.fetchSettings);
  yield put(settingsActions.receive(settings));
}

function* updateSettings(settings) {
  try {
    const s = yield call(settingsApi.changeSettings, settings);
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
