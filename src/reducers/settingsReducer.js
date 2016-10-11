import _reducerConstructor from './_reducerConstructor';
import { SETTINGS_RECEIVE, SETTINGS_UPDATE } from '../constants/actionTypes';
import initSettings from '../constants/inits/settings';

const reducers = {
  [SETTINGS_RECEIVE]:
    (currentState, action) => Object.assign({}, currentState, action.settings),
  [SETTINGS_UPDATE.SUCCESS]:
    (currentState, action) => Object.assign({}, currentState, action.settings, {modified: false}),
  [SETTINGS_UPDATE.ERROR]:
    (currentState, error) => Object.assign({}, currentState, {error})
};

export default _reducerConstructor(initSettings, reducers);
