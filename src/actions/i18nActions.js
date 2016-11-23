import _a from './_actionConstructor';
import { I18N_LOAD, I18N_RECEIVE } from '../constants/actionTypes';

export const
  load = lang => _a(I18N_LOAD, {lang}),
  receive = dictionary => _a(I18N_RECEIVE, {dictionary});
