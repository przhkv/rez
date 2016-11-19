import { fromJS } from 'immutable';
import _reducerConstructor from './_reducerConstructor';
import { SETTINGS_RECEIVE, SETTINGS_UPDATE } from '../constants/actionTypes';
import initSettings from '../constants/inits/settings';

const initState = fromJS(initSettings);

const reducers = {
  [SETTINGS_RECEIVE]:
    (currentState, action) => currentState.merge(action.settings),//Object.assign({}, currentState, action.settings),//
  [SETTINGS_UPDATE.SUCCESS]:
    (currentState, action) => currentState.merge(action.settings, {modified: false}),//Object.assign({}, currentState, action.settings, {modified: false}),
  [SETTINGS_UPDATE.ERROR]:
    (currentState, error) => currentState.merge(currentState, {error})//Object.assign({}, currentState, {error})
};

export default _reducerConstructor(initState, reducers);
