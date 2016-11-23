import _a from './_actionConstructor';
import { THEME_LOAD, THEME_RECEIVE } from '../constants/actionTypes';

export const
  load = themeName => _a(THEME_LOAD, {themeName}),
  receive = theme => _a(THEME_RECEIVE, {theme});
