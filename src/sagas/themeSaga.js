import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import * as themeActions from '../actions/themeActions';
import * as themeApi from '../api/themeApi';
import { THEME_LOAD } from '../constants/actionTypes';

function* getTheme({themeName}) {
  const theme = yield call(themeApi.fetchTheme, themeName);
  yield put(themeActions.receive(theme));
}

function* watchGetTheme() {
  yield* takeEvery(THEME_LOAD, getTheme);
}

export {
  watchGetTheme
};
