import * as types from '../constants/actionTypes';
import _a from './_actionConstructor';

export const navigate = page => _a(types.NAVIGATION_UPDATE, {page});
