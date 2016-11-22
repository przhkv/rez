import { createSelector } from 'reselect';

export const
  i18nSelector = state => state.i18n,
  pageSelector = state => state.page,
  projectListSelector = state => state.projectList,
  loadedProjectsIdsSelector = state => state.projects.map(p => p.id),
  projectByIdSelector = (state, id) => state.projects.filter(p => p.id === id),
  settingsSelector = state => state.settings;

const getSelectedProjectSelector = (state, props) => state.projects.find(p => p.idTitle === props.params.id);

export const makeGetSelectedProject = () => {
  return createSelector(
    [getSelectedProjectSelector],
    selected => selected
  );
};
