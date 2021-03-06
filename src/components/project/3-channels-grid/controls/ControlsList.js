import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { elemScrollToBottom } from '../../../../utils/dom/scrolling';
import ControlPanelModule from './ControlPanelModule';
import ControlPanelBlank from './ControlPanelBlank';
import { BLANK } from '../../../../constants/sequencer/channelLayoutTypes';

class ChannelControlsList extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.project.get('channels').size < this.props.project.get('channels').size) {
      const channels = this.props.project.get('channels');
      const chId = channels.last().get('channelId');
      this.props.updateProject(['editedChannelId'], chId);
      elemScrollToBottom(document.getElementById('seq'), 300);
    }
  }

  render() {
    const { i18n, project, setMouseOut, setMouseOver, theme, updateProject } = this.props;

    return (
      <div className="w5 fl br b--light-gray">
        {project.get('channels').map((channel, i) =>
          ((channel.get('type') === BLANK) ? (
            <ControlPanelBlank
              key={channel.get('channelId')}
              channel={channel}
              editedChannelId={project.get('editedChannelId')}
              i18n={i18n}
              index={i}
              setMouseOut={setMouseOut}
              setMouseOver={setMouseOver}
              theme={theme}
              updateProject={updateProject}
            />
          ) : (
            <ControlPanelModule
              key={channel.get('channelId')}
              channel={channel}
              editedChannelId={project.get('editedChannelId')}
              i18n={i18n}
              index={i}
              setMouseOut={setMouseOut}
              setMouseOver={setMouseOver}
              soloChannelId={project.get('soloChannelId')}
              theme={theme}
              updateProject={updateProject}
            />
          )))}
      </div>
    );
  }
}

ChannelControlsList.propTypes = {
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired,
};

export default ChannelControlsList;
