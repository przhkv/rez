import { SETTINGS_RECEIVE, SETTINGS_UPDATE } from '../constants/actionTypes';
import { _leaveStateUnchanged } from './_utils';
import initSettings from '../constants/inits/settings';

const reducers = {
  [SETTINGS_RECEIVE]: (currentState, action) => Object.assign({}, currentState, action.settings),
  [SETTINGS_UPDATE.SUCCESS]: (currentState, action) => Object.assign({}, currentState, action.settings, {modified: false}),
  [SETTINGS_UPDATE.ERROR]: (currentState, error) => Object.assign({}, currentState, {error})
};

const settingsReducer = (state = initSettings, action) => {
  let reducer = reducers[action.type] || _leaveStateUnchanged;
  return reducer(state, action);
};

export default settingsReducer;
