/* eslint-disable no-constant-condition */
import { takeEvery } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import * as projectActions from '../actions/projectActions';
import * as actionTypes from '../constants/actionTypes';
import * as api from '../api/projectsApi';

export function* getAllProjects() {
  const projects = yield call(api.fetchProjectList);
  yield put(projectActions.receiveProjectList(projects));
}

export function* watchGetProjectList() {
  /*
   takeEvery will fork a new `checkout` task on each GET_ALL_PRODUCTS actions
   i.e. concurrent GET_ALL_PRODUCTS actions are allowed
   */
  yield* takeEvery(actionTypes.LOAD_PROJECT_LIST, getAllProjects);
}

export default function* root() {
  yield [
    fork(watchGetProjectList)
  ];
}
