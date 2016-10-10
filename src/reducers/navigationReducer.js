import { NAVIGATION_UPDATE } from '../constants/actionTypes';
import * as pages from '../constants/pages';

export default (state = pages.HOME, action) => {
  switch (action.type) {
    case NAVIGATION_UPDATE:
      return action.page;
    default:
      return state;
  }
};
