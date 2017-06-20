import { combineReducers } from 'redux';
import i18n from './i18nReducer';
import page from './navigationReducer';
import projects from './projectReducer';
import projectList from './projectListReducer';
import settings from './settingsReducer';
import theme from './themeReducer';

const rootReducer = combineReducers({
  i18n,
  page,
  projects,
  projectList,
  settings,
  theme,
});

export default rootReducer;
