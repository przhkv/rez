import React from 'react';

class TimelineRuler extends React.Component {
  componentDidMount() {
    const c = document.getElementById('timelineScale');
    c.height = 16;
    c.width = window.innerWidth - 256;
    const ctx = c.getContext('2d');
    ctx.strokeStyle = 'DimGray';
    for (let i = 0; i < 100; i++) {
      const x1 = (i * 40) + (i % 2 ? 0.5 : 0.9);
      ctx.moveTo(x1, 12);
      ctx.lineTo(x1, 16);
      ctx.stroke();
      const x2 = (i * 40) + 20.5;
      ctx.moveTo(x2, 14);
      ctx.lineTo(x2, 16);
      ctx.stroke();
    }
  }

  render() {
    return (
      <canvas id="timelineScale" />
    );
  }
}

export default TimelineRuler;
