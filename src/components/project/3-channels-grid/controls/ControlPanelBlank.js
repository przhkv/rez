import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { EDIT } from '../../../../constants/sequencer/panelButtonTypes';
import ChannelButton from '../../0-common/ChannelButton';
import ChannelName from './ChannelName';

const ControlPanelBlank = ({
  channel, editedChannelId, i18n, index, setMouseOut, setMouseOver, theme,
  updateProject,
}) => {
  const chId = channel.get('channelId');
  const edited = (chId === editedChannelId);
  const clickEdited = () => updateProject(['editedChannelId'], edited ? '' : chId);
  const startEdit = () => {
    if (!edited)
      updateProject(['editedChannelId'], chId);
  };

  const overEdit = () => setMouseOver('');

  return (
    <div
      className={`bb b--light-gray ${edited ? theme.seqPanelSelected : theme.seqPanel}`}
      onClick={startEdit}
    >
      <div className="w-100">
        <div className="ph2 pv1 tc">
          <ChannelName
            channelName={channel.get('name')}
            index={index}
            setMouseOut={setMouseOut}
            setMouseOver={setMouseOver}
            theme={theme}
            updateProject={updateProject}
          />
        </div>
      </div>
      <div className="w-100 flex mv1">
        <div className="w-80">&nbsp;</div>
        <div className="w-10 tc">
          <ChannelButton
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

ControlPanelBlank.propTypes = {
  channel: PropTypes.instanceOf(Map).isRequired,
  editedChannelId: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired,
};

export default ControlPanelBlank;
