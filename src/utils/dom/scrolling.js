/* eslint-disable no-mixed-operators, no-param-reassign */

// source: https://github.com/hsnaydd/moveTo
const easeOutQuart = (t, b, c, d) => {
  t /= d;
  t--;
  return -c * (t * t * t * t - 1) + b;
};

const elemScrollToBottom = (elem, duration) => {
  let startTime = null;
  const from = elem.scrollTop;
  const to = elem.scrollHeight - elem.clientHeight;
  const change = to - from;

  const step = (currentTime) => {
    if (!startTime) {
      startTime = currentTime - 1;
    }
    const progress = currentTime - startTime;
    elem.scrollTop = easeOutQuart(progress, from, change, duration);
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

export {
  elemScrollToBottom,
};
