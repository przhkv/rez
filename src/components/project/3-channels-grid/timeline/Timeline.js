import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import ChannelTimeline from './ChannelTimeline';
import { isTrue } from '../../../../utils/stringBoolUtils';

const chHeight = expanded => (isTrue(expanded) ? 75 : 53);

class Timeline extends React.Component {
  constructor() {
    super();
    this.timelineWidth = 0;
  }

  componentDidMount() {
    this.timelineWidth = window.innerWidth - 256; // recalculate on resize

    const c = document.getElementById('channelsTimeline');
    c.width = this.timelineWidth;
    const canvasHeight =
      this.props.project.get('channels')
        .map(ch => chHeight(ch.getIn(['payload', 'state', 'expanded'])))
        .reduce(((a, b) => a + b), 0);
    c.height = canvasHeight;
    const ctx = c.getContext('2d');
    ctx.strokeStyle = 'DimGray';
    for (let i = 0; i < 100; i++) {
      const x1 = (i * 40) + 0.5;
      ctx.moveTo(x1, 0);
      ctx.lineTo(x1, canvasHeight);
      ctx.stroke();
      const x2 = (i * 40) + 20.5;
      ctx.moveTo(x2, 0);
      ctx.lineTo(x2, canvasHeight);
      ctx.stroke();
    }
  }

  render() {
    const { i18n, project, setMouseOut, setMouseOver, theme, updateProject } = this.props;

    return (
      <div className="overflow-x-hidden nowrap">
        <canvas id="channelsTimeline" className="absolute o-20" />
        <div className="absolute" style={{ width: this.timelineWidth }}>
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
      </div>
    );
  }
}

Timeline.propTypes = {
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default Timeline;
