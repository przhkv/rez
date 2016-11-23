import { fork } from 'redux-saga/effects';
import { watchGetDictionary } from './i18nSaga';
import { watchGetProjectList } from './projectListSaga';
import { watchCloseProject, watchLoadProjectById, watchOpenProject } from './projectSaga';
import { watchGetSettings, watchUpdateSettings } from './settingsSaga';
import { watchGetTheme } from './themeSaga';

export default function* root() {
  yield [
    fork(watchGetDictionary),
    fork(watchGetProjectList),
    fork(watchGetTheme),
    fork(watchCloseProject),
    fork(watchLoadProjectById),
    fork(watchOpenProject),
    fork(watchGetSettings),
    fork(watchUpdateSettings)
  ];
}
