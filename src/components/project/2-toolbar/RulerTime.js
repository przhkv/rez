import React from 'react';

class TimeRuler extends React.Component {
  componentDidMount() {
    const c = document.getElementById('timeRuler');
    c.height = 16;
    const spaceOnLeft = 256;
    c.width = window.innerWidth;
    const ctx = c.getContext('2d');
    ctx.strokeStyle = 'DimGray';
    for (let i = 0; i < 100; i++) {
      const coef = 90;
      const x1 = spaceOnLeft + (i * coef) + 0.5;
      ctx.moveTo(x1, 0);
      ctx.lineTo(x1, 6);
      ctx.stroke();
      const x2 = spaceOnLeft + (i * coef) + (coef / 2) + 0.5;
      ctx.moveTo(x2, 0);
      ctx.lineTo(x2, 4);
      ctx.stroke();

      ctx.font = '10px Arial';
      ctx.fillText(`${i}:00`, (i > 0) ? (x1 - 10) : x1, 12);
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

};

export default TimeRuler;