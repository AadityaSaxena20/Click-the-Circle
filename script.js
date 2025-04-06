const circle = document.getElementById('circle');
const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start');

let score = 0;
let time = 25;
let gameInterval;
let moveInterval;

function moveCircle() {
  const x = Math.random() * (window.innerWidth - 60);
  const y = Math.random() * (window.innerHeight - 60);
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
}

circle.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveCircle();
});

startButton.addEventListener('click', () => {
  score = 0;
  time = 25;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;
  circle.style.display = 'block';
  moveCircle();

  gameInterval = setInterval(() => {
    time--;
    timeDisplay.textContent = time;
    if (time === 0) {
      clearInterval(gameInterval);
      clearInterval(moveInterval);
      circle.style.display = 'none';
      alert(`Time's up! Your score: ${score}`);
    }
  }, 1000);

  moveInterval = setInterval(moveCircle, 800);
});
