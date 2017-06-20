import _reducerConstructor from './_reducerConstructor';
import { PROJECT_LIST_RECEIVE } from '../constants/actionTypes';

const reducers = {
  [PROJECT_LIST_RECEIVE]: (current, action) => Object.assign([], current, action.projects),
};

export default _reducerConstructor([], reducers);
