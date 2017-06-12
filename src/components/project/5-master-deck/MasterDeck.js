/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { CHANGE_VOLUME, MUTE, PLAY, STOP, UNMUTE } from '../../../constants/sequencer/elements';
import { MUTE as buttonMute } from '../../../constants/sequencer/panelButtonTypes';
import { FILLER, NEUTRAL_LIGHT } from '../../../constants/components/buttonStyles';
import ChannelButton from '../0-common/ChannelButton';
import SubmitButton from '../../common/buttons/SubmitButton';

const MasterDeck = ({ clickPlay, gainNode, i18n, playing, project, save, setMouseOut,
                        setMouseOver, theme, updateProjectItem, updZoom, zoom }) => {
  const volume = project.getIn(['common', 'gain']);
  const muted = project.getIn(['common', 'muted']) === 'true';

  const
    setOnMouseOverPlay = () => setMouseOver(PLAY),
    setOnMouseOverStop = () => setMouseOver(STOP),
    setOnMouseOverMute = () => setMouseOver(MUTE),
    setOnMouseOverUnMute = () => setMouseOver(UNMUTE),
    setOnMouseOverChangeVolume = () => setMouseOver(CHANGE_VOLUME),
    setMouseOverDecreaseZoom = () => false,
    setMouseOverIncreaseZoom = () => false;

  const decreaseZoom = () => updZoom(zoom - 1);
  const increaseZoom = () => updZoom(zoom + 1);

  const mute = () => {
    if (muted) {
      gainNode.gain.value = volume;
      updateProjectItem(['common', 'muted'], 'false');
      setOnMouseOverMute();
    } else {
      gainNode.gain.value = 0;
      updateProjectItem(['common', 'muted'], 'true');
      setOnMouseOverUnMute();
    }
  };

  const play = () => {
    (playing ? setOnMouseOverPlay : setOnMouseOverStop)();
    clickPlay();
  };

  const changeVolume = (e) => {
    updateProjectItem(['common', 'gain'], e.target.value);
    if (!muted)
      gainNode.gain.value = e.target.value;
  };

  return (
    <div className={`flex-none order-5 ${theme.bg}`}>
      <div className="fl w-100">
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
              <ChannelButton
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
                min="0"
                max="1"
                step=".02"
                type="range"
                value={volume}
              />
            </div>
            <div className="w-20">&nbsp;</div>
          </div>
        </div>
        <div>
          <div className="w-100 w-50-ns db dtc-ns v-mid tc">
            <SubmitButton
              buttonStyle={NEUTRAL_LIGHT}
              disabled={zoom <= 1}
              inline={Boolean(true)}
              onClick={decreaseZoom}
              onMouseOut={setMouseOut}
              onMouseOver={setMouseOverDecreaseZoom}
              text="-"
              theme={theme}
            />
            <SubmitButton
              buttonStyle={NEUTRAL_LIGHT}
              disabled={zoom >= 60}
              inline={Boolean(true)}
              onClick={increaseZoom}
              onMouseOut={setMouseOut}
              onMouseOver={setMouseOverIncreaseZoom}
              text="+"
              theme={theme}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

MasterDeck.propTypes = {
  clickPlay: PropTypes.func.isRequired,
  gainNode: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  playing: PropTypes.bool.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  save: PropTypes.func.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProjectItem: PropTypes.func.isRequired,
  updZoom: PropTypes.func.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default MasterDeck;
