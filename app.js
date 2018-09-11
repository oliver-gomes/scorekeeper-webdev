const numInput = document.querySelector(".input-score");
const winDisplay = document.querySelector(".score-display");
const player1Btn = document.querySelector(".player-1-btn");
const player2Btn = document.querySelector(".player-2-btn");
const player1Display = document.querySelector(".player-1-score");
const player2Display = document.querySelector(".player-2-score");
const resetButton = document.querySelector(".reset");
let gameOver = false;
let winningScore = 5;

let p1Score = 0;
let p2Score = 0;

player1Btn.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      player1Display.classList.add("winner");
    }
    player1Display.textContent = p1Score;
  }
});

player2Btn.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      player2Display.classList.add("winner");
    }
    player2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function() {
  p1Score = 0;
  p2Score = 0;
  player1Display.textContent = 0;
  player2Display.textContent = 0;
  player1Display.classList.remove("winner");
  player2Display.classList.remove("winner");
  gameOver = false;
});

numInput.addEventListener("change", function() {
  winDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
});
