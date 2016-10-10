import { fork } from 'redux-saga/effects';
import { watchGetProjectList } from './projectListSaga';
import { watchGetSettings, watchUpdateSettings } from './settingsSaga';

export default function* root() {
  yield [
    fork(watchGetSettings),
    fork(watchGetProjectList),
    fork(watchUpdateSettings)
  ];
}
