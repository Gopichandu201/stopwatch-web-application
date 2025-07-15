let startTime = 0;
let intervalId;
let running = false;

function start() {
  if (!running) {
    running = true;
    startTime = Date.now() - (startTime || 0);
    intervalId = setInterval(updateTimer, 10);
  }
}

function pause() {
  if (running) {
    running = false;
    clearInterval(intervalId);
  }
}

function reset() {
  running = false;
  clearInterval(intervalId);
  startTime = 0;
  document.getElementById("timer").textContent = "00:00:00.000";
}

function updateTimer() {
  const elapsed = Date.now() - startTime;

  const hours = String(Math.floor(elapsed / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((elapsed % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((elapsed % 60000) / 1000)).padStart(2, '0');
  const milliseconds = String(elapsed % 1000).padStart(3, '0');

  document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
