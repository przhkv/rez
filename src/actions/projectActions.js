import * as types from '../constants/actionTypes';
import _a from './_actionConstructor';

export const close = (payload, meta) => _a(types.PROJECT_CLOSE, {payload, meta});
export const load = (payload, meta) => _a(types.PROJECT_LOAD, {payload, meta});
export const open = (payload, meta) => _a(types.PROJECT_OPEN, {payload, meta});
export const purge = (payload, meta) => _a(types.PROJECT_DELETE.REQUEST, {payload, meta});
export const receive = project => _a(types.PROJECT_RECEIVE, {project});
export const save = (payload, meta) => _a(types.PROJECT_SAVE.REQUEST, {payload, meta});
export const unload = projectId => _a(types.PROJECT_UNLOAD, {projectId});
