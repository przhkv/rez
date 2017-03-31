import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import { EDIT } from '../../../../constants/sequencer/panelButtonTypes';
import PanelButton from '../common/PanelButton';

const PanelBlank = ({ channel, editedChannelId, i18n, setMouseOut, setMouseOver, theme,
                      updateProject }) => {
  const chId = channel.get('channelId');
  const edited = (chId === editedChannelId);
  const clickEdited = () => updateProject(['editedChannelId'], edited ? '' : chId);

  const overEdit = () => setMouseOver('');

  return (
    <div className={`bb b--light-gray ${edited ? 'bg-washed-blue' : 'bg-near-white'}`}>
      <div className="w-100">
        <div className="ph2 pv1 tc">
          <span className={`i f6 tl ${theme.commonText}`}>{channel.get('name')}</span>
        </div>
      </div>
      <div className="w-100 flex mv1">
        <div className="w-80">&nbsp;</div>
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
        <div className="w-10">&nbsp;</div>
      </div>
    </div>
  );
};

PanelBlank.propTypes = {
  channel: PropTypes.instanceOf(Map).isRequired,
  editedChannelId: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default PanelBlank;
