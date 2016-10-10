import * as types from '../constants/actionTypes';
import _a from './_actionConstructor';

export const
  load = () => _a(types.PROJECT_LIST_LOAD),
  receive = projects => _a(types.PROJECT_LIST_RECEIVE, {projects}),
  addItem = listItem => _a(types.PROJECT_LIST_ADD_ITEM, {listItem}),
  closeItem = itemId => _a(types.PROJECT_LIST_CLOSE_ITEM, {itemId}),
  openItem = itemId => _a(types.PROJECT_LIST_OPEN_ITEM , {itemId}),
  removeItem = itemId => _a(types.PROJECT_LIST_REMOVE_ITEM , {itemId}),
  updateItem = listItem => _a(types.PROJECT_LIST_UPDATE_ITEM , {listItem});
