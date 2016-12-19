import Immutable from 'immutable';
import React, { PropTypes } from 'react';
import { CHANGE_VOLUME, MUTE, PLAY, STOP, UNMUTE } from '../../../constants/sequencer/elements';

const MainControls = ({clickPlay, gainNode, i18n, playing, project, setMouseOut, setMouseOver, theme, updateProject}) => {
  const volume = project.getIn(['common', 'gain']);
  const muted = project.getIn(['common', 'muted']) === 'true';

  const
    setOnMouseOverPlay = () => setMouseOver(PLAY),
    setOnMouseOverStop = () => setMouseOver(STOP),
    setOnMouseOverMute = () => setMouseOver(MUTE),
    setOnMouseOverUnMute = () => setMouseOver(UNMUTE),
    setOnMouseOverChangeVolume = () => setMouseOver(CHANGE_VOLUME);

  const mute = () => {
    if (muted) {
      gainNode.gain.value = volume;
      updateProject(['common', 'muted'], 'false');
      setOnMouseOverMute();
    } else {
      gainNode.gain.value = 0;
      updateProject(['common', 'muted'], 'true');
      setOnMouseOverUnMute();
    }
  };

  const play = () => {
    playing ? setOnMouseOverPlay() : setOnMouseOverStop();
    clickPlay();
  };

  const changeVolume = e => {
    updateProject(['common', 'gain'], e.target.value);
    if (!muted)
      gainNode.gain.value = e.target.value;
  };

  return (
    <div className={`flex-none order-4 ${theme.bg}`}>
      <input
        onClick={play}
        onMouseOut={setMouseOut}
        onMouseOver={playing ? setOnMouseOverStop : setOnMouseOverPlay}
        type="button"
        value={playing ? 'stop' : 'play'}
      />
      <input
        onClick={mute}
        onMouseOut={setMouseOut}
        onMouseOver={muted ? setOnMouseOverUnMute : setOnMouseOverMute}
        type="button"
        value={muted ? i18n.seq.controls.unmute : i18n.seq.controls.mute}
      />
      <div className="w-10">
        <input
          className="rez-gain-volume"
          onChange={changeVolume}
          onMouseOut={setMouseOut}
          onMouseOver={setOnMouseOverChangeVolume}
          min="0" max="1"
          step=".02"
          type="range"
          value={volume}
        />
      </div>
    </div>
  );
};

MainControls.propTypes = {
  clickPlay: PropTypes.func.isRequired,
  gainNode: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  playing: PropTypes.bool.isRequired,
  project: PropTypes.instanceOf(Immutable.Map).isRequired,
  save: PropTypes.func.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default MainControls;
