import * as types from '../constants/actionTypes';
import _a from './_actionConstructor';

export const load = () => _a(types.SETTINGS_LOAD);
export const receive = settings => _a(types.SETTINGS_RECEIVE, {settings});
export const updateRequest = settings => _a(types.SETTINGS_UPDATE.REQUEST, {settings});
export const updateSuccess = settings => _a(types.SETTINGS_UPDATE.SUCCESS, {settings});
export const updateFailure = (settings, error) => _a(types.SETTINGS_UPDATE.FAILURE, {settings, error});
