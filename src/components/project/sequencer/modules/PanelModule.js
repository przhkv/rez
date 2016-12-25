import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import { isTrue, reverse } from '../../../../utils/stringBoolUtils';
import { CHANGE_VOLUME, EDIT_CHANNEL, EXPAND_CHANNEL, MINIMIZE_CHANNEL, MUTE_CHANNEL, SOLO_OFF, SOLO_ON, UNMUTE_CHANNEL }
from '../../../../constants/sequencer/elements';
import { EDIT, EXPAND, MUTE, SOLO } from '../../../../constants/sequencer/panelButtonTypes';
import PanelButton from '../common/PanelButton';


const PanelModule = ({channel, editedChannelId, i18n, index, setMouseOut, setMouseOver, soloChannelId, theme, updateProject}) => {
  const chId = channel.get('channelId');
  const {expanded, muted} = channel.getIn(['payload', 'state']).toJS();
  const edited = (chId === editedChannelId);
  const solo = (chId === soloChannelId);

  const clickEdited = e => updateProject(['editedChannelId'], edited ? '' : chId);
  const clickExpanded = () => {
    if (isTrue(expanded))
      overExpand();
    else
      overMinimize();
    updateProject(['channels', index, 'payload', 'state', 'expanded'], reverse(expanded));
  };
  const clickMute = () => {
    if (isTrue(muted))
      overMute();
    else
      overUnmute();
    updateProject(['channels', index, 'payload', 'state', 'muted'], reverse(muted));
  };
  const clickSolo = () => {
    if (solo)
      overSoloOn();
    else
      overSoloOff();
    updateProject(['soloChannelId'], solo ? '': chId);
  };

  const
    overChangeVolume = () => setMouseOver(CHANGE_VOLUME),
    overEdit = () => setMouseOver(EDIT_CHANNEL),
    overExpand = () => setMouseOver(EXPAND_CHANNEL),
    overMinimize = () => setMouseOver(MINIMIZE_CHANNEL),
    overMute = () => setMouseOver(MUTE_CHANNEL),
    overSoloOff = () => setMouseOver(SOLO_OFF),
    overSoloOn = () => setMouseOver(SOLO_ON),
    overUnmute = () => setMouseOver(UNMUTE_CHANNEL);

  return (
    <div className={`bb b--light-gray ${edited ? 'bg-washed-blue' : 'bg-near-white'}`}>
      <div className="w-100">
        <div className="ph2 pv1 tc">
          <span className={`i f6 tl ${theme.commonText}`}>{channel.get('name')}</span>
        </div>
      </div>
      <div className="w-100 flex mv1">
        <div className="w-10 tc">
          <PanelButton
            active={solo}
            onClick={clickSolo}
            onMouseOut={setMouseOut}
            onMouseOver={solo ? overSoloOff : overSoloOn}
            theme={theme}
            type={SOLO}
          />
        </div>
        <div className="w-10 tc">
          <PanelButton
            active={isTrue(muted)}
            onClick={clickMute}
            onMouseOut={setMouseOut}
            onMouseOver={isTrue(muted) ? overUnmute : overMute}
            theme={theme}
            type={MUTE}
          />
        </div>
        <div className="w-60 ph1">
          <input
            className="module-vol v-mid"
            type="range"
            onMouseOut={setMouseOut}
            onMouseOver={overChangeVolume}
          />
        </div>
        <div className="w-10 tc">
          <PanelButton
            active={edited}
            onClick={clickEdited}
            onMouseOut={setMouseOut}
            onMouseOver={overEdit}
            theme={theme}
            type={EDIT}
          />
        </div>
        <div className="w-10 tc">
          <PanelButton
            active={isTrue(expanded)}
            onClick={clickExpanded}
            onMouseOut={setMouseOut}
            onMouseOver={isTrue(expanded) ? overMinimize : overExpand}
            theme={theme}
            type={EXPAND}
          />
        </div>
      </div>
    </div>
  );
};

PanelModule.propTypes = {
  channel: PropTypes.instanceOf(Map).isRequired,
  editedChannelId: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  soloChannelId: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default PanelModule;
