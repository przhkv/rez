import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import ChannelTimeline from './ChannelTimeline';
import TimelineGrid from './TimelineGrid';
import { isTrue } from '../../../../utils/stringBoolUtils';
import { findPlaybackPosition } from '../../../../utils/sequencer/zooming';
import { msToTimeString } from '../../../../utils/sequencer/timeFormat';

const chHeight = expanded => (isTrue(expanded) ? 75 : 53);

class Timeline extends React.Component {
  constructor() {
    super();
    this.state = {
      timelineWidth: 0,
    };
  }

  componentDidMount() {
    const setTimelineSize = () => {
      this.setState({
        timelineWidth: window.innerWidth - 256,
      });
    };

    window.addEventListener('resize', setTimelineSize);
    setTimelineSize();
  }

  render() {
    const { i18n, moment, project, setMouseOut, setMouseOver, theme, updateProject,
      zoom } = this.props;
    const { timelineWidth } = this.state;
    const timelineHeight =
      this.props.project.get('channels')
        .map(ch => chHeight(ch.getIn(['payload', 'state', 'expanded'])))
        .reduce(((a, b) => a + b), 0);

    const playbackX = findPlaybackPosition(moment, zoom);
    const timeStr = msToTimeString(moment);

    return (
      <div className="overflow-x-hidden nowrap">
        <TimelineGrid
          bpm={Number(project.getIn(['common', 'bpm']))}
          measure={Number(project.getIn(['common', 'timeSignature', 'measure']))}
          notes={Number(project.getIn(['common', 'timeSignature', 'notes']))}
          timelineHeight={timelineHeight}
          zoom={zoom}
        />
        <div className="absolute" style={{ width: timelineWidth }}>
          {
            project.get('channels')
              .map(c => (
                <ChannelTimeline
                  key={c.get('channelId')}
                  channel={c}
                  channelHeight={chHeight(c.getIn(['payload', 'state', 'expanded']))}
                  editedChannelId={project.get('editedChannelId')}
                  i18n={i18n}
                  setMouseOut={setMouseOut}
                  setMouseOver={setMouseOver}
                  theme={theme}
                  updateProject={updateProject}
                />
              ))
          }
        </div>
        <svg
          className="absolute"
          height={timelineHeight}
          width={timelineWidth}
        >
          <line
            x1={playbackX}
            y1="0"
            x2={playbackX}
            y2={timelineHeight}
            style={{ stroke: '#555555', strokeWidth: 1 }}
          />
        </svg>
        <span className="o-20">{timeStr}</span>
      </div>
    );
  }
}

Timeline.propTypes = {
  i18n: PropTypes.object.isRequired,
  moment: PropTypes.number.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default Timeline;
