import * as types from '../constants/actionTypes';
import _a from './_actionConstructor';

export const
  load = () => _a(types.PROJECT_LIST_LOAD),
  receive = projects => _a(types.PROJECT_LIST_RECEIVE, {projects}),
  addItem = listItem => _a(types.PROJECT_LIST_ADD_ITEM, {listItem}),
  removeItem = itemId => _a(types.PROJECT_LIST_REMOVE_ITEM , {itemId}),
  updateItem = listItem => _a(types.PROJECT_LIST_UPDATE_ITEM , {listItem});
