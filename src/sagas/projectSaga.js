/* eslint-disable import/default */
/* eslint-disable no-constant-condition */
import { call, fork, put, select, take } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import * as projectActions from '../actions/projectActions';
import * as actionTypes from '../constants/actionTypes';
import * as projectsApi from '../api/projectsApi';
import { projectByIdSelector } from '../selectors';

function* closeProject(payload, meta) {
  yield put(projectActions.unload(payload.projectId));
  meta.redirect();
}

function* loadById(payload, meta) {
  const project = yield call(projectsApi.fetchById, payload.projectId);
  yield put(projectActions.receive(fromJS(project)));
  meta.redirect();
}

function* resolveProject(payload, meta) {
  const projectInState = yield select(projectByIdSelector, payload.projectId);
  if (projectInState.length === 0)
    yield put(projectActions.load(payload, meta));
  else
    meta.redirect();
}

function* watchCloseProject() {
  while(true) {
    const {payload, meta} = yield take(actionTypes.PROJECT_CLOSE);
    yield fork(closeProject, payload, meta);
  }
}

function* watchLoadProjectById() {
  while(true) {
    const {payload, meta} = yield take(actionTypes.PROJECT_LOAD);
    yield fork(loadById, payload, meta);
  }
}

function* watchOpenProject() {
  while(true) {
    const {payload, meta} = yield take(actionTypes.PROJECT_OPEN);
    yield fork(resolveProject, payload, meta);
  }
}

export {
  watchCloseProject,
  watchLoadProjectById,
  watchOpenProject
};
