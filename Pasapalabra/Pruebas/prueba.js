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
  paused = true;

  elapsedTime = Date.now() - startTime;

  clearInterval(intervalId);
};

function updateTime() {
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);

  secs = pad(secs);

  mins = pad(mins);

  hrs = pad(hrs);

  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

  const pad = (num) => {
    return (num < 10 ? "0" : "") + num;
  };
}
