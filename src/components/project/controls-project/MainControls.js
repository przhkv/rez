import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import { CHANGE_VOLUME, MUTE, PLAY, STOP, UNMUTE } from '../../../constants/sequencer/elements';
import { MUTE as buttonMute } from '../../../constants/sequencer/panelButtonTypes';
import { FILLER } from '../../../constants/components/buttonStyles';
import PanelButton from '../sequencer/common/PanelButton';
import SubmitButton from '../../common/buttons/SubmitButton';

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
    <div className={`flex-none order-5 ${theme.bg}`}>
      <div className="w5 fl">
        <div className="w-100 flex pv2">
          <div className="w-10">&nbsp;</div>
          <div className="w-80 h2">
            <SubmitButton
              buttonStyle={FILLER}
              inline={Boolean(true)}
              onClick={play}
              onMouseOut={setMouseOut}
              onMouseOver={playing ? setOnMouseOverStop : setOnMouseOverPlay}
              text={playing ? '■' : '►'}
              theme={theme}
            />
          </div>
          <div className="w-10">&nbsp;</div>
        </div>
        <div className="w-100 flex pb2">
          <div className="w-10">&nbsp;</div>
          <div className="w-10">
            <PanelButton
              active={muted}
              onClick={mute}
              onMouseOut={setMouseOut}
              onMouseOver={muted ? setOnMouseOverUnMute : setOnMouseOverMute}
              theme={theme}
              type={buttonMute}
            />
          </div>
          <div className="w-60 ph1">
            <input
              className="module-vol v-mid"
              onChange={changeVolume}
              onMouseOut={setMouseOut}
              onMouseOver={setOnMouseOverChangeVolume}
              min="0" max="1"
              step=".02"
              type="range"
              value={volume}
            />
          </div>
          <div className="w-20">&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

MainControls.propTypes = {
  clickPlay: PropTypes.func.isRequired,
  gainNode: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  playing: PropTypes.bool.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  save: PropTypes.func.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default MainControls;
