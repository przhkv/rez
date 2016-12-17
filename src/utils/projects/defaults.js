import { fromJS } from 'immutable';

const createDefaultProject = settings => fromJS({
  id: '',
  idTitle: '',
  title: 'Untitled',
  credits: {
    originalArtists: []
  },
  channels: [],
  common: {
    bpm: settings.getIn(['seq', 'defaultBPM']),
    gain: '0.8',
    muted: 'false'
  }
});

export {
  createDefaultProject
};
