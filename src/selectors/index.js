import { createSelector } from 'reselect';

export const
  i18nSelector = state => state.i18n,
  pageSelector = state => state.page,
  projectListSelector = state => state.projectList,
  projectByIdSelector = (state, id) => state.projects.filter(p => p.id === id),
  settingsSelector = state => state.settings;

const getSelectedProjectSelector = (state, props) => state.projects.find(p => p.id === props.params.id); //todo idTitle

export const makeGetSelectedProject = () => {
  return createSelector(
    [getSelectedProjectSelector],
    selected => selected
  );
};
