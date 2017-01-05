import { fromJS, List, Map } from 'immutable';
import React, { PropTypes } from 'react';
import { uuid } from '../../../utils/generatorUtils';
import { BLANK } from '../../../constants/sequencer/channelLayoutTypes';
import { ADD_CHANNEL, DELETE_CHANNEL } from '../../../constants/sequencer/elements';
import ToolbarButton from '../sequencer/common/ToolbarButton';

const Toolbar = ({channels, editedChannelId, i18n, setMouseOut, setMouseOver, theme, updateProject, updateProjectFields}) => {
  const add = () =>
    updateProject(['channels'], channels.push(fromJS({
      channelId: uuid(),
      pos: (channels.size + 1).toString(),
      name: 'untitled',
      type: BLANK,
      payload: {
        output: 'master',
        state: {
          expanded: 'false',
          muted: 'false'
        }
      }
    })));

  const del = () => {
    //find deleted channel index and position
    const deletedChannelIndex = channels.findIndex(c => c.get('channelId') === editedChannelId);
    const deletedChannelPosition = Number(channels.getIn([deletedChannelIndex, 'pos']));
    let newChannels = channels.filter(c => c.get('channelId') !== editedChannelId);
    //find id of ch. that took position of deleted + decrement positions of channels after the deleted ch.
    let newEditedChannelId;
    newChannels.forEach(c => {
      const currentPos = Number(c.get('pos'));
      if ((currentPos - 1) === deletedChannelPosition)
        newEditedChannelId = c.get('channelId');
    });
    newChannels = newChannels.map(c => {
      const currentPos = Number(c.get('pos'));
      return (currentPos > deletedChannelPosition) ? c.update('pos', () => (currentPos - 1).toString()) : c;
    });
    if (!newEditedChannelId) {
      if (newChannels.size > 0)
        newEditedChannelId = newChannels.maxBy(c => Number(c.get('pos'))).get('channelId');
      else
        newEditedChannelId = '';
    }

    updateProjectFields(Map({editedChannelId: newEditedChannelId, channels: newChannels}));
  };

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
  updateProject: PropTypes.func.isRequired,
  updateProjectFields: PropTypes.func.isRequired
};

export default Toolbar;
