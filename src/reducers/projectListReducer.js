import { RECEIVE_PROJECTS } from '../constants/actionTypes';

const reducers = {
  [RECEIVE_PROJECTS]: (current, action) => Object.assign([], current, action.projects)
};

const leaveStateUnchanged = state => state;

const projectListReducer = (state = [], action) => {
  let reducer = reducers[action.type] || leaveStateUnchanged;
  return reducer(state, action);
};

export default projectListReducer;
