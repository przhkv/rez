import React from 'react';
import PropTypes from 'prop-types';

const drawChannelsGrid = (timelineHeight, bpm, measure, zoom) => {
  const WINDOW_WIDTH = window.innerWidth;
  const SPACE_ON_LEFT = 256;
  // set canvas size
  const c = document.getElementById('channelsTimeline');
  c.height = timelineHeight;
  c.width = WINDOW_WIDTH - SPACE_ON_LEFT;

  // draw the stripes
  const ctx = c.getContext('2d');
  ctx.strokeStyle = 'DimGray';
  for (let i = 0; i < 100; i++) {
    const beatWidth = (60 * zoom) / bpm;
    const x1 = (i * beatWidth * measure) + 0.5;

    ctx.moveTo(x1, 0);
    ctx.lineTo(x1, timelineHeight);
    ctx.stroke();
    /*  const x2 = (i * 40) + 20.5;
     ctx.moveTo(x2, 0);
     ctx.lineTo(x2, timelineHeight);
     ctx.stroke(); */
  }
};

class TimelineGrid extends React.Component {
  constructor() {
    super();
    this.setWidthDrawGrid = this.setWidthDrawGrid.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.setWidthDrawGrid);
    this.setWidthDrawGrid();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.bpm !== this.props.bpm ||
      prevProps.notes !== this.props.notes ||
      prevProps.timelineHeight !== this.props.timelineHeight ||
      prevProps.zoom !== this.props.zoom
    ) {
      this.setWidthDrawGrid();
    }
  }

  setWidthDrawGrid() {
    const { bpm, notes, measure, timelineHeight, zoom } = this.props;
    drawChannelsGrid(timelineHeight, bpm, measure, zoom);
  }

  render() {
    return (
      <canvas id="channelsTimeline" className="absolute o-20" />
    );
  }
}

TimelineGrid.propTypes = {
  bpm: PropTypes.number.isRequired,
  notes: PropTypes.number.isRequired,
  measure: PropTypes.number.isRequired,
  timelineHeight: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default TimelineGrid;
