const leadZero = n => ((n < 10) ? `0${n}` : n.toString());

const msToTimeString = (moment) => {
  const seconds = Math.floor(moment / 1000);
  const minutes = (seconds < 60) ? 0 : Math.round(seconds / 60);
  const hours = (minutes < 60) ? 0 : Math.round(minutes / 60);

  const sec = leadZero(seconds % 60);
  const min = leadZero(minutes % 60);

  const hStr = (hours > 0) ? `${hours.toString()}:` : '';

  return `${hStr}${min}:${sec}`;
};

export {
  msToTimeString,
};
