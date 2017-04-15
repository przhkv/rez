import { fromJS } from 'immutable';
import { uuid } from '../generatorUtils';
import { BLANK } from '../../constants/sequencer/channelLayoutTypes';

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
  },
  editedChannelId: '',
  soloChannelId: ''
});

const createNewChannel = channelsSize => fromJS({
  channelId: uuid(),
  pos: (channelsSize + 1).toString(),
  name: 'untitled',
  type: BLANK,
  payload: {
    output: 'master',
    state: {
      expanded: 'false',
      muted: 'false'
    },
    gain: '1',
    pan: '0'
  }
});

export {
  createNewChannel,
  createDefaultProject
};
