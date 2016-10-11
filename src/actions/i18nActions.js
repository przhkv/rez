import * as types from '../constants/actionTypes';
import _a from './_actionConstructor';

export const
  load = lang => _a(types.I18N_LOAD, {lang}),
  receive = dictionary => _a(types.I18N_RECEIVE, {dictionary});
