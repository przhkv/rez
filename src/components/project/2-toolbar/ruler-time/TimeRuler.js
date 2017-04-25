import React from 'react';

class TimeRuler extends React.Component {
  componentDidMount() {
    const c = document.getElementById('timeRuler');
    c.height = 16;
    c.width = window.innerWidth - 256;
    const ctx = c.getContext('2d');
    ctx.strokeStyle = 'DimGray';
    for (let i = 0; i < 100; i++) {
      const coef = 70;
      const x1 = (i * coef) + 0.5;
      ctx.moveTo(x1, 0);
      ctx.lineTo(x1, 6);
      ctx.stroke();
      const x2 = (i * coef) + (coef / 2) + 0.5;
      ctx.moveTo(x2, 0);
      ctx.lineTo(x2, 4);
      ctx.stroke();

      ctx.font = '10px Arial';
      ctx.fillText(`${i}:00`, (i > 0) ? (x1 - 10) : x1, 12);
    }
  }

  render() {
    return (
      <div className="bg-white-60 w-100">
        <div className="w5 fl">time</div>
        <canvas id="timeRuler" />
      </div>
    );
  }
}

TimeRuler.propTypes = {

};

export default TimeRuler;
