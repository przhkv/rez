import { List, Map } from 'immutable';
import React, { PropTypes } from 'react';
import { BLANK } from '../../../constants/sequencer/channelLayoutTypes';
import { ADD_CHANNEL, DELETE_CHANNEL } from '../../../constants/sequencer/elements';
import ToolbarButton from '../sequencer/common/ToolbarButton';

const Toolbar = ({channels, editedChannelId, i18n, setMouseOut, setMouseOver, theme, updateProject}) => {
  const add = () =>
    updateProject(['channels'], channels.push(Map({
      i: channels.size,
      name: `channel ${channels.size + 1}`,
      type: BLANK
    })));

  const del = () => updateProject(['channels'], channels.filter(c => c.get('channelId') !== editedChannelId));

  const
    overAdd = () => setMouseOver(ADD_CHANNEL),
    overDel = () => setMouseOver(DELETE_CHANNEL);

  return (
    <div className={`flex-none order-2 w-100 bg-near-white ${theme.bg}`}>
      <div className="w5 fl">
        <div className="fl w-third tc">
          <ToolbarButton
            onClick={add}
            onMouseOut={setMouseOut}
            onMouseOver={overAdd}
            text={'+'}
            theme={theme}
          />
        </div>
        <div className="fl w-third">&nbsp;</div>
        <div className="fl w-third tc">
          <ToolbarButton
            disabled={editedChannelId.length === 0}
            onClick={del}
            onMouseOut={setMouseOut}
            onMouseOver={overDel}
            text={'-'}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  channels: PropTypes.instanceOf(List).isRequired,
  editedChannelId: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default Toolbar;
