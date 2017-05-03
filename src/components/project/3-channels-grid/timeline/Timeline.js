import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import ChannelTimeline from './ChannelTimeline';
import { isTrue } from '../../../../utils/stringBoolUtils';
import { findPlaybackPosition } from '../../../../utils/sequencer/zooming';
import { msToTimeString } from '../../../../utils/sequencer/timeFormat';

const chHeight = expanded => (isTrue(expanded) ? 75 : 53);

const drawChannelsGrid = (timelineHeight) => {
  const c = document.getElementById('channelsTimeline');
  c.width = window.innerWidth - 256;
  c.height = timelineHeight;
  const ctx = c.getContext('2d');
  ctx.strokeStyle = 'DimGray';
  for (let i = 0; i < 100; i++) {
    const x1 = (i * 40) + 0.5;
    ctx.moveTo(x1, 0);
    ctx.lineTo(x1, timelineHeight);
    ctx.stroke();
    const x2 = (i * 40) + 20.5;
    ctx.moveTo(x2, 0);
    ctx.lineTo(x2, timelineHeight);
    ctx.stroke();
  }
};

class Timeline extends React.Component {
  constructor() {
    super();
    this.state = {
      timelineHeight: 0,
      timelineWidth: 0,
    };
  }

  componentDidMount() {
    const setWidthDrawGrid = () => {
      const timelineHeight =
        this.props.project.get('channels')
          .map(ch => chHeight(ch.getIn(['payload', 'state', 'expanded'])))
          .reduce(((a, b) => a + b), 0);
      this.setState({
        timelineHeight,
        timelineWidth: window.innerWidth - 256,
      });
      drawChannelsGrid(timelineHeight);
    };

    window.addEventListener('resize', setWidthDrawGrid);
    setWidthDrawGrid();
  }

  render() {
    const { i18n, moment, project, setMouseOut, setMouseOver, theme, updateProject,
      zoom } = this.props;
    const { timelineHeight, timelineWidth } = this.state;


    const playbackX = findPlaybackPosition(moment, zoom);
    const timeStr = msToTimeString(moment);

    return (
      <div className="overflow-x-hidden nowrap">
        <canvas id="channelsTimeline" className="absolute o-20" />
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
