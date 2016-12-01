import React, { PropTypes } from 'react';

class TestSample extends React.Component {
  constructor(props) {
    super(props);
    this.source = null;
    this.audioBuffer = null;
    this.initSource();
  }

  initSource() {
    const {audioCtx, url} = this.props;
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
    request.onload = () =>
      audioCtx.decodeAudioData(request.response)
        .then(buffer => this.audioBuffer = buffer);
    request.send();
  }

  render() {
    const {name, url} = this.props;

    const play = () => {
      if (this.source)
        this.source.stop(0);

      this.source = this.props.audioCtx.createBufferSource();
      this.source.buffer = this.audioBuffer;
      this.source.connect(this.props.gainNode);
      //this.source.loop = true;
      this.source.start(0);
    };
    const stop = () => this.source ? this.source.stop(0) : false;
    const pause = () => this.source ? this.source.pause(0) : false;

    return (
      <div>
        <h3>{name}</h3>
        <br/>
        <input type="button" onClick={play} value={'play'}/>
        <input type="button" onClick={stop} value={'stop'}/>
      </div>
    );
  }
}

TestSample.propTypes = {
  audioCtx: PropTypes.object.isRequired,
  gainNode: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default TestSample;
