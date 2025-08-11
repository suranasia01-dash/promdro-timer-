const start = document.getElementById("start");
const stop = document.getElementById("stop");
const restart = document.getElementById("restart");
const timer = document.getElementById("timer");

let timeleft = 1500;
let interval;

const updateTimer = () => {
  const minutes = Math.floor(timeleft / 60);
  const seconds = timeleft % 60;

  timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
const startTimer = () => {
  if (interval) return; // prevents multiple intervals from stacking

  interval = setInterval(() => {
    if (timeleft <= 0) {
      clearInterval(interval);
      interval = null;
      return;
    }

    timeleft--;
    updateTimer();
  }, 1000);
};
