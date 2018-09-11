const setScore = document.querySelector('.input-score').value;
const displayScore = document.querySelector('.score-display');
const player1Btn = document.querySelector('.player-1-btn')
const player2Btn = document.querySelector('.player-2')
const player1Display = document.querySelector('.player-1-score')

let p1Score = 0;

player1Btn.addEventListener('click', function () {
  p1Score++;
  player1Display.textContent = p1Score;
});
