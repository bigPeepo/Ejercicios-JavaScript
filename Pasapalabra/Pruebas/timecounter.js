let SECONDS_ASSIGNED = 140;
let timeAssigned = SECONDS_ASSIGNED * 1000;
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let secs = 0;

const startTimer = () => {
  if (paused) {
    paused = false;

    startTime = Date.now() - elapsedTime;

    intervalId = setInterval(updateTime, 1000);
  }
};

const pauseTimer = () => {
  console.clear();
  console.log("Time is paused");

  paused = true;

  elapsedTime = Date.now() - startTime;

  clearInterval(intervalId);
};

const time0padding = (num) => {
  return (num < 10 ? "0" : "") + num;
};

function updateTime() {
  console.clear();

  elapsedTime = timeAssigned - (Date.now() - startTime);

  secs = Math.floor(elapsedTime / 1000);

  secs = time0padding(secs);

  if (Math.floor(elapsedTime / 1000) <= 0) {
    console.log("Out of time!");
    pauseTimer();
  } else {
    console.log(secs);
  }
}

const resetTimer = () => {
  SECONDS_ASSIGNED = 140;
  timeAssigned = SECONDS_ASSIGNED * 1000;
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  paused = true;
  intervalId;
  secs = 0;
  startTimer();
};

startTimer();
