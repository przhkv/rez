import React, { PropTypes } from 'react';

const ControlsNoise = ({audioCtx, gainNode, i18n, indexOfChannel, setMouseOut, setMouseOver, theme, updateProject}) => {
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

    const splitter = audioCtx.createChannelSplitter(2);
    source.connect(splitter);
    const merger = audioCtx.createChannelMerger(2);

    // Reduce the volume of the left channel only
    const lGainNode = audioCtx.createGain();
    lGainNode.gain.value = 1;
    splitter.connect(lGainNode, 0);
    lGainNode.connect(merger, 0, 0);

    const rGainNode = audioCtx.createGain();
    rGainNode.gain.value = .1;
    splitter.connect(rGainNode, 1);
    rGainNode.connect(merger, 0, 1);

    // connect the AudioBufferSourceNode to the master gainNode
    merger.connect(gainNode);

    // start the source playing
    source.start();
  };

  return (
    <div className="w-100">
      <input type="button" onClick={click} value={'play loud noise for 2 seconds'} />
    </div>
  );
};

ControlsNoise.propTypes = {
  audioCtx: PropTypes.object.isRequired,
  gainNode: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  indexOfChannel: PropTypes.number.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default ControlsNoise;
