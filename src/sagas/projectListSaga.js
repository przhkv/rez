import { throttle } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import * as projectListActions from '../actions/projectListActions';
import * as projectsApi from '../api/projectsApi';
import { PROJECT_LIST_LOAD } from '../constants/actionTypes';

function* getAllProjects() {
  const projects = yield call(projectsApi.fetchList);
  yield put(projectListActions.receive(projects));
}

function* watchGetProjectList() {
  yield* throttle(2000, PROJECT_LIST_LOAD, getAllProjects);
}

export {
  watchGetProjectList
};
