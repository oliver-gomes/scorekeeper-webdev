const setScore = document.querySelector('.input-score').value;
const displayScore = document.querySelector('.score-display');
const player1Btn = document.querySelector('.player-1-btn')
const player2Btn = document.querySelector('.player-2')
const player1Display = document.querySelector('.player-1-score')

let score1 = 0;

player1Btn.addEventListener('click', function () {
  player1Display.textContent = 0;
});
