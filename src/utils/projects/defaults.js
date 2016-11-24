import { fromJS } from 'immutable';

const createDefaultProject = settings => fromJS({
  id: '',
  idTitle: '',
  title: 'Untitled',
  credits: {
    originalArtists: []
  },
  common: {
    bpm: settings.getIn(['seq', 'defaultBPM'])
  }
});

export {
  createDefaultProject
};
