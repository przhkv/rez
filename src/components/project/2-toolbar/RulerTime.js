import React from 'react';
import PropTypes from 'prop-types';

const drawTimeScale = (zoom) => {
  const WINDOW_WIDTH = window.innerWidth;
  const SPACE_ON_LEFT = 256;
  // set canvas size
  const c = document.getElementById('timeRuler');
  c.height = 16;
  c.width = WINDOW_WIDTH;

  // draw the marks
  const ctx = c.getContext('2d');
  ctx.strokeStyle = 'DimGray';
  for (let i = 0; i < 100; i++) {
    const minuteWidth = 60 * zoom;
    const x1 = SPACE_ON_LEFT + (i * minuteWidth) + 0.5;

    if (x1 > WINDOW_WIDTH) {
      break;
    }

    // minute zero
    ctx.moveTo(x1, 0);
    ctx.lineTo(x1, 6);
    ctx.stroke();
    ctx.font = '10px Arial';
    ctx.fillText(`${i}:00`, (i > 0) ? (x1 - 10) : x1, 16);

    // half minute
    const x2 = SPACE_ON_LEFT + (i * minuteWidth) + (minuteWidth / 2) + 0.5;
    ctx.moveTo(x2, 0);
    ctx.lineTo(x2, 4);
    ctx.stroke();
    if (zoom > 2) {
      ctx.fillText(`${i}:30`, x2 - 10, 16);
    }

    if (zoom > 3) {
      for (let k = 0; k < 10; k++) {
        if (k !== 0 || k !== 5) {
          const xk = SPACE_ON_LEFT + (i * minuteWidth) + ((minuteWidth * k) / 10) + 0.5;
          ctx.moveTo(xk, 0);
          ctx.lineTo(xk, 2);
          ctx.stroke();
        }
      }
    }
  }
};

class TimeRuler extends React.Component {
  componentDidMount() {
    const draw = () => drawTimeScale(this.props.zoom);

    window.addEventListener('resize', draw);
    draw();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.zoom !== this.props.zoom) {
      drawTimeScale(nextProps.zoom);
    }
  }

  render() {
    return (
      <div className="w-100">
        <canvas id="timeRuler" />
      </div>
    );
  }
}

TimeRuler.propTypes = {
  zoom: PropTypes.number.isRequired,
};

export default TimeRuler;
