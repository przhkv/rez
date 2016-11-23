import { createSelector } from 'reselect';
import { createDefaultProject } from '../utils/projects/defaults';

export const
  i18nSelector = state => state.i18n,
  pageSelector = state => state.page,
  projectListSelector = state => state.projectList,
  loadedProjectsIdsSelector = state => state.projects.map(p => p.get('id')),
  projectByIdSelector = (state, id) => state.projects.filter(p => p.get('id') === id),
  settingsSelector = state => state.settings,
  themeSelector = state => state.theme;

const getSelectedProjectSelector = (state, props) =>
  state.projects.find(p => p.get('idTitle') === props.params.id) || createDefaultProject(state.settings);

export const makeGetSelectedProject = () => {
  return createSelector(
    [getSelectedProjectSelector],
    selected => selected
  );
};
