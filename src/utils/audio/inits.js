const initAudioContext = () => new (window.AudioContext || window.webkitAudioContext)();

export {
  initAudioContext
};
