import * as types from '../constants/actionTypes';
import _a from './_actionConstructor';

export const
  load = () => _a(types.SETTINGS_LOAD),
  receive = settings => _a(types.SETTINGS_RECEIVE, {settings}),
  updateRequest = settings => _a(types.SETTINGS_UPDATE.REQUEST, {settings}),
  updateSuccess = settings => _a(types.SETTINGS_UPDATE.SUCCESS, {settings}),
  updateFailure = (settings, error) => _a(types.SETTINGS_UPDATE.FAILURE, {settings, error});
