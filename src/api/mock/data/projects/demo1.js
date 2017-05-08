export default {
  id: '57da5269-a564-48dc-bdbe-7032180e8b9a',
  idTitle: 'at-the-marble-bar',
  title: 'At The Marble Bar',
  created: '2016-10-04 02:12:39',
  updated: '2016-10-04 02:12:39',
  credits: {
    originalArtists: ['Death Comet Crew'],
  },
  view: {
    timeScale: 'true',
  },
  channels: [
    {
      channelId: '2F68DA16B2454A0D866966955F284C73',
      pos: '1',
      name: 'hi hat',
      type: 'file',
      payload: {
        output: 'master',
        src: {
          lib: 'def',
          name: 'atom_hh.wav',
        },
        state: {
          expanded: 'false',
          muted: 'false',
        },
        gain: '1',
        pan: '0',
      },
    },
    {
      channelId: 'A3A7669BE6B0473D83BEB07ABBB6D3E7',
      pos: '2',
      name: 'white noise',
      type: 'noise',
      payload: {
        output: 'master',
        state: {
          expanded: 'true',
          muted: 'true',
        },
        gain: '1',
        pan: '.6',
      },
    },
  ],
  common: {
    bpm: '118',
    gain: '0.6',
    moment: '0',
    muted: 'false',
    timeSignature: {
      notes: '4',
      measure: '4',
    },
    zoom: '15',
  },
  editedChannelId: 'A3A7669BE6B0473D83BEB07ABBB6D3E7',
  soloChannelId: '2F68DA16B2454A0D866966955F284C73',
};
