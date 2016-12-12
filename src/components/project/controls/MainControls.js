import Immutable from 'immutable';
import React, { PropTypes } from 'react';

class MainControls extends React.Component {
  constructor() {
    super();
    this.state = {
      muted: false,
      volume: .6//todo use props later
    };
  }
  render() {
    const {audioCtx, gainNode, i18n, project, setMouseOut, setMouseOver, theme} = this.props;
    const {muted, volume} = this.state;

    const mute = () => {
      gainNode.gain.value = !muted ? 0 : volume;
      this.setState({muted: !muted});
    };

    const changeVolume = e => {
      this.setState({volume: e.target.value});
      if (!muted)
        gainNode.gain.value = e.target.value;
    };

    return (
      <div>
        <input type="button" onClick={mute} value={muted ? 'unmute' : 'mute'} />
        <div className="w-10">
          <input type="range" onChange={changeVolume} value={volume} min="0" max="1" step={.02} />
        </div>
      </div>
    );
  }
}

MainControls.propTypes = {
  audioCtx: PropTypes.object.isRequired,
  gainNode: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Immutable.Map).isRequired,
  save: PropTypes.func.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default MainControls;
