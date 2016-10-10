import { PROJECT_LIST_RECEIVE } from '../constants/actionTypes';
import { _leaveStateUnchanged } from './_utils';

const reducers = {
  [PROJECT_LIST_RECEIVE]: (current, action) => Object.assign([], current, action.projects)
};

const projectListReducer = (state = [], action) => {
  let reducer = reducers[action.type] || _leaveStateUnchanged;
  return reducer(state, action);
};

export default projectListReducer;
