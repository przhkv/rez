/* eslint-disable import/default */
/* eslint-disable no-constant-condition */
import { throttle } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import * as projectListActions from '../actions/projectListActions';
import * as actionTypes from '../constants/actionTypes';
import * as projectsApi from '../api/projectsApi';

function* getAllProjects() {
  const projects = yield call(projectsApi.fetchList);
  yield put(projectListActions.receive(projects));
}

function* watchGetProjectList() {
  yield* throttle(2000, actionTypes.PROJECT_LIST_LOAD, getAllProjects);
}

export {
  watchGetProjectList
};
