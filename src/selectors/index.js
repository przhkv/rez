import { createSelector } from 'reselect';

export const
  i18nSelector = state => state.i18n,
  pageSelector = state => state.page,
  projectListSelector = state => state.projectList,
  settingsSelector = state => state.settings;

/*export const getLang = createSelector(
  [ getSettings ],
  settings => settings.accountLang
);*/
