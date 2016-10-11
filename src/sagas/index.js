import { fork } from 'redux-saga/effects';
import { watchGetDictionary } from './i18nSaga';
import { watchGetProjectList } from './projectListSaga';
import { watchGetSettings, watchUpdateSettings } from './settingsSaga';

export default function* root() {
  yield [
    fork(watchGetDictionary),
    fork(watchGetSettings),
    fork(watchGetProjectList),
    fork(watchUpdateSettings)
  ];
}
