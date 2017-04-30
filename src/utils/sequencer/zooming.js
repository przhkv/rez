// default pixels per second
const dpps = 10;

const findPlaybackPosition = (moment, zoom) => (moment / 1000) * dpps * zoom;

export {
  findPlaybackPosition,
};
