class PlaybackControl {
  constructor(changeProjectMoment, moment) {
    this.changeProjectMoment = changeProjectMoment;
    this.moment = moment;
  }

  setMoment(moment) {
    this.moment = moment;
  }

  start() {
    const delay = 40; // 25 times per second
    this.intervalId = setInterval(() => {
      this.moment += delay;
      this.changeProjectMoment(this.moment);
    }, delay);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.changeProjectMoment(0);
    this.moment = 0;
  }
}

export default PlaybackControl;
