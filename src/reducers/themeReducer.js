import _reducerConstructor from './_reducerConstructor';
import { THEME_RECEIVE } from '../constants/actionTypes';
import initTheme from '../constants/inits/theme';

const reducers = {
  [THEME_RECEIVE]: (currentState, action) => Object.assign({}, currentState, action.theme),
};

export default _reducerConstructor(initTheme, reducers);
