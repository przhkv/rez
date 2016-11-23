import Immutable from 'immutable';
import defaultProject from '../../constants/inits/project';

export const createDefaultProject = (settings) => {
  const project = Object.assign(defaultProject, {bpm: settings.getIn(['general', 'defaultBPM'])});
  console.log('created');
  return Immutable.fromJS(project);
};
