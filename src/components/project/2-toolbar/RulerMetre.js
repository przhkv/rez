import React from 'react';
import PropTypes from 'prop-types';

const drawTimeSignatureScale = (bpm, notes, measure, zoom) => {
  const WINDOW_WIDTH = window.innerWidth;
  const SPACE_ON_LEFT = 256;
  // set canvas size
  const c = document.getElementById('timeSignatureScale');
  c.height = 16;
  c.width = WINDOW_WIDTH - SPACE_ON_LEFT - 40;

  // draw the marks
  const ctx = c.getContext('2d');
  ctx.strokeStyle = 'DimGray';
  for (let i = 0; i < 100; i++) {
    const beatWidth = (60 * zoom) / bpm;
    const x1 = (i * beatWidth * notes) + 0.5;

    if (x1 > WINDOW_WIDTH) {
      break;
    }

    ctx.moveTo(x1, 12);
    ctx.lineTo(x1, 16);
    ctx.stroke();

    if ((i * measure) % notes !== 0) {
      const x2 = (i * beatWidth * measure);
      ctx.moveTo(x2, 14);
      ctx.lineTo(x2, 16);
      ctx.stroke();
    }
  }
};

class RulerMetre extends React.Component {
  componentDidMount() {
    const { bpm, notes, measure, zoom } = this.props;
    const draw = () => drawTimeSignatureScale(bpm, notes, measure, zoom);

    window.addEventListener('resize', draw);
    draw();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.bpm !== this.props.bpm ||
      nextProps.notes !== this.props.notes ||
      nextProps.measure !== this.props.measure ||
      nextProps.zoom !== this.props.zoom
    ) {
      drawTimeSignatureScale(nextProps.bpm, nextProps.notes, nextProps.measure, nextProps.zoom);
    }
  }

  render() {
    return (
      <canvas id="timeSignatureScale" />
    );
  }
}

RulerMetre.propTypes = {
  bpm: PropTypes.number.isRequired,
  notes: PropTypes.number.isRequired,
  measure: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default RulerMetre;
