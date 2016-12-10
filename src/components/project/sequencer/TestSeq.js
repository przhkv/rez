import Immutable from 'immutable';
import React, { PropTypes } from 'react';
import { initAudioContext } from '../../../utils/audio/inits';
import TestSample from './TestSample';
import * as urls from './../../../assets/sounds/soundUrls';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      muted: false,
      volume: .6//todo use props later
    };
    this.audioCtx = initAudioContext();
    this.gainNode = this.audioCtx.createGain();
    this.gainNode.connect(this.audioCtx.destination);
    this.gainNode.gain.value = .6;//todo use props later
  }

  render() {
    const {i18n, project, theme} = this.props;
    const {muted, volume} = this.state;
    const {audioCtx, gainNode} = this;

    // Stereo
    const channels = 2;
    // Create an empty two second stereo buffer at the sample rate of the AudioContext
    const frameCount = audioCtx.sampleRate * 2.0;

    const myAudioBuffer = audioCtx.createBuffer(channels, frameCount, audioCtx.sampleRate);

    const click = () => {
      // Fill the buffer with white noise;
      //just random values between -1.0 and 1.0
      for (let channel = 0; channel < channels; channel++) {
        // This gives us the actual ArrayBuffer that contains the data
        const nowBuffering = myAudioBuffer.getChannelData(channel);
        for (let i = 0; i < frameCount; i++) {
          // Math.random() is in [0; 1.0]
          // audio needs to be in [-1.0; 1.0]
          nowBuffering[i] = Math.random() * 2 - 1;
        }
      }

      // Get an AudioBufferSourceNode.
      // This is the AudioNode to use when we want to play an AudioBuffer
      const source = audioCtx.createBufferSource();
      // set the buffer in the AudioBufferSourceNode
      source.buffer = myAudioBuffer;
      // connect the AudioBufferSourceNode to the
      // destination so we can hear the sound

      //source.connect(audioCtx.destination); //fixed - connect to gain instead
      source.connect(gainNode);

      // start the source playing
      source.start();
    };

    const mute = () => {
      if (!muted)
        gainNode.gain.value = 0;
      else
        gainNode.gain.value = volume;
      this.setState({muted: !muted});
    };

    const changeVolume = e => {
      this.setState({volume: e.target.value});
      if (!muted)
        gainNode.gain.value = e.target.value;
    };

    return (
      <div id="grid">

        <TestSample audioCtx={this.audioCtx} gainNode={this.gainNode} name={'hi hat'} url={urls.atom} />
        <br/>
        <input type="button" onClick={click} value={'play loud noise for 2 seconds'} />
        <br/>
        <input type="button" onClick={mute} value={muted ? 'unmute' : 'mute'} />
        <div className="w-10">
          <input type="range" onChange={changeVolume} value={this.state.volume} min="0" max="1" step={.02} />
        </div>
      </div>
    );
  }
}

Demo.propTypes = {
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Immutable.Map).isRequired,
  theme: PropTypes.object.isRequired
};

export default Demo;