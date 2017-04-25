import React from 'react';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';
import { createNewChannel } from '../../../utils/projects/defaults';
import { ADD_CHANNEL, DELETE_CHANNEL } from '../../../constants/sequencer/elements';
import TinyButton from './TinyButton';

class AddRemoveChannel extends React.Component {
  constructor() {
    super();
    this.state = {
      isDeleting: false, // todo confirmation modal
    };
    this.addChannel = this.addChannel.bind(this);
    this.deleteChannel = this.deleteChannel.bind(this);
  }

  addChannel() {
    const { channels, updateProjectItem } = this.props;
    updateProjectItem(['channels'], channels.push(createNewChannel(channels.size)));
  }

  deleteChannel() {
    const { editedChannelId, channels, updateProjectMerge } = this.props;

    // find deleted channel index and position
    const deletedChannelIndex = channels.findIndex(c => c.get('channelId') === editedChannelId);
    const deletedChannelPosition = Number(channels.getIn([deletedChannelIndex, 'pos']));

    let newChannels = channels.filter(c => c.get('channelId') !== editedChannelId);

    // find id of ch. that took position of deleted, decrement positions after deleted ch.
    let newEditedChannelId;
    newChannels.forEach((c) => {
      const currentPos = Number(c.get('pos'));
      if ((currentPos - 1) === deletedChannelPosition)
        newEditedChannelId = c.get('channelId');
    });
    newChannels = newChannels.map((c) => {
      const currentPos = Number(c.get('pos'));
      return (currentPos > deletedChannelPosition) ?
        c.update('pos', () => (currentPos - 1).toString()) :
        c;
    });
    if (!newEditedChannelId) {
      if (newChannels.size > 0)
        newEditedChannelId = newChannels.maxBy(c => Number(c.get('pos'))).get('channelId');
      else
        newEditedChannelId = '';
    }

    updateProjectMerge(Map({editedChannelId: newEditedChannelId, channels: newChannels}));
  }

  render() {
    const { editedChannelId, setMouseOut, setMouseOver, theme } = this.props;
    const
      overAdd = () => setMouseOver(ADD_CHANNEL),
      overDel = () => setMouseOver(DELETE_CHANNEL);

    return (
      <div className="w5 fl">
        <div className="fl w-third tc">
          <TinyButton
            onClick={this.addChannel}
            onMouseOut={setMouseOut}
            onMouseOver={overAdd}
            text={'+'}
            theme={theme}
          />
        </div>
        <div className="fl w-third">&nbsp;</div>
        <div className="fl w-third tc">
          <TinyButton
            disabled={editedChannelId.length === 0}
            onClick={this.deleteChannel}
            onMouseOut={setMouseOut}
            onMouseOver={overDel}
            text={'-'}
            theme={theme}
          />
        </div>
      </div>
    );
  }
}

AddRemoveChannel.propTypes = {
  channels: PropTypes.instanceOf(List).isRequired,
  editedChannelId: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProjectItem: PropTypes.func.isRequired,
  updateProjectMerge: PropTypes.func.isRequired,
};

export default AddRemoveChannel;
