import _reducerConstructor from './_reducerConstructor';
import { NAVIGATION_UPDATE } from '../constants/actionTypes';
import { HOME } from '../constants/pages';

const reducers = {
  [NAVIGATION_UPDATE]: (currentState, action) => action.page,
};

export default _reducerConstructor(HOME, reducers);
