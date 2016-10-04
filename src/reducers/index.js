import { combineReducers } from 'redux';
import projectList from './projectListReducer';

const rootReducer = combineReducers({
  projectList
});

export default rootReducer;
