let startTime = 0;
let timerActive = false;

const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const result = document.getElementById('result');
const scroll= document.getElementById('scroll');

startButton.addEventListener('click', () => {
  startTime = Date.now();
  timerActive = true;
  result.textContent = ""; // Clear previous result
  startButton.disabled = true;
  stopButton.disabled = false;
  scroll.textContent='⌛'

});

stopButton.addEventListener('click', () => {
  if (!timerActive) return;

  const elapsedTime = Date.now() - startTime;
  timerActive = false;
  stopButton.disabled = true;
  startButton.disabled = false;
  scroll.textContent = '';

  if (elapsedTime >= 5000 && elapsedTime < 6000) {
    result.textContent = `Congratulations 🎉! You stopped the timer at ${elapsedTime}ms.`;
    result.style.color = "green";
  } else {
    result.textContent = `Try again! You stopped at ${elapsedTime}ms.`;
    result.style.color = "red";
  }
});
