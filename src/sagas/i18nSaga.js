import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import * as i18nActions from '../actions/i18nActions';
import * as i18nApi from '../api/i18nApi';
import { I18N_LOAD } from '../constants/actionTypes';

function* getDictionary({lang}) {
  const dictionary = yield call(i18nApi.fetchDictionary, lang);
  yield put(i18nActions.receive(dictionary));
}

function* watchGetDictionary() {
  yield* takeEvery(I18N_LOAD, getDictionary);
}

export {
  watchGetDictionary,
};
