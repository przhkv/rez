import { I18N_RECEIVE } from '../constants/actionTypes';
import { _leaveStateUnchanged } from './_utils';
import initDictionary from '../constants/inits/dictionary';

const reducers = {
  [I18N_RECEIVE]: (currentState, action) => Object.assign({}, currentState, action.dictionary),
};

const i18nReducer = (state = initDictionary, action) => {
  let reducer = reducers[action.type] || _leaveStateUnchanged;
  return reducer(state, action);
};

export default i18nReducer;
