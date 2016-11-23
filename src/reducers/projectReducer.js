import _reducerConstructor from './_reducerConstructor';
import { PROJECT_RECEIVE, PROJECT_UNLOAD } from '../constants/actionTypes';

const reducers = {
  [PROJECT_RECEIVE]: (current, action) => [...current, action.project],
  [PROJECT_UNLOAD]: (current, action) => [...current.filter(p => p.get('id') !== action.projectId)]
};

export default _reducerConstructor([], reducers);
