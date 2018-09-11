const setScore = document.querySelector('.input-score').value;
const displayScore = document.querySelector('.score-display');
const player1Btn = document.querySelector('.player-1-btn')
const player2Btn = document.querySelector('.player-2-btn')
const player1Display = document.querySelector('.player-1-score')
const player2Display = document.querySelector('.player-2-score')
let gameOver = false;
const winningScore = 5;

let p1Score = 0;
let p2Score = 0;

player1Btn.addEventListener('click', function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      player1Display.classList.add('winner');
    }
    player1Display.textContent = p1Score;

  }
});

player2Btn.addEventListener('click', function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
    }
    player2Display.textContent = p2Score;
  }
});
