import _reducerConstructor from './_reducerConstructor';
import { I18N_RECEIVE } from '../constants/actionTypes';
import initDictionary from '../constants/inits/dictionary';

const reducers = {
  [I18N_RECEIVE]: (currentState, action) => Object.assign({}, currentState, action.dictionary),
};

export default _reducerConstructor(initDictionary, reducers);
