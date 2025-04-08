let newGame = document.getElementById("newGame");
let rollDice = document.getElementById("rollDice");
let Hold = document.getElementById("Hold");
let currentScore1 = document.getElementById("currentScore1");
let currentScore2 = document.getElementById("currentScore2");
let totalScore1 = document.getElementById("totalScore1");
let totalScore2 = document.getElementById("totalScore2");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let winner = document.getElementById("winner");
let Dice = document.getElementById("Dice");
let whoWin = document.getElementById("whoWin");
let reload = document.getElementById("reload");
player1.classList.add("chosenPlayer");

function refreshPage() {
  location.reload();
  player1.classList.add("chosenPlayer");
}
reload.onclick = refreshPage;
newGame.onclick = refreshPage;

function randomNumber() {
  let num = Math.floor(Math.random() * 6) + 1;
  if (num == 1) {
    Dice.innerHTML = "<i class='fa-solid fa-dice-one'></i>";
  }
  if (num == 2) {
    Dice.innerHTML = "<i class='fa-solid fa-dice-two'></i>";
  }
  if (num == 3) {
    Dice.innerHTML = "<i class='fa-solid fa-dice-three'></i>";
  }
  if (num == 4) {
    Dice.innerHTML = "<i class='fa-solid fa-dice-four'></i>";
  }
  if (num == 5) {
    Dice.innerHTML = "<i class='fa-solid fa-dice-five'></i>";
  }
  if (num == 6) {
    Dice.innerHTML = "<i class='fa-solid fa-dice-six'></i>";
  }
  return num;
}
player1Turn();
function player1Turn() {
  rollDice.onclick = function () {
    let oldCurrentScore1 = Number(currentScore1.innerText);
    let randomNum = randomNumber();
    currentScore1.innerText = oldCurrentScore1 + randomNum;
    if (randomNum == 1) {
      player1.classList.remove("chosenPlayer");
      player2.classList.add("chosenPlayer");
      currentScore1.innerText = 0;
      player2Turn();
    }
    Hold.onclick = function () {
      let oldTotalScore1 = Number(totalScore1.innerText);
      totalScore1.innerText = oldTotalScore1 + +currentScore1.innerText;
      player1.classList.remove("chosenPlayer");
      player2.classList.add("chosenPlayer");
      currentScore1.innerText = 0;
      player2Turn();
      if (totalScore1.innerText > 30) {
        //winner
        winner.style.display = "flex";
        whoWin.innerText = "Player1 Winner";
      }
    };
  };
}

function player2Turn() {
  rollDice.onclick = function () {
    let oldCurrentScore2 = Number(currentScore2.innerText);
    let randomNum = randomNumber();
    currentScore2.innerText = oldCurrentScore2 + randomNum;
    if (randomNum == 1) {
      player2.classList.remove("chosenPlayer");
      player1.classList.add("chosenPlayer");
      currentScore2.innerText = 0;
      player1Turn();
    }
    Hold.onclick = function () {
      let oldTotalScore2 = Number(totalScore2.innerText);
      totalScore2.innerText = oldTotalScore2 + +currentScore2.innerText;
      player2.classList.remove("chosenPlayer");
      player1.classList.add("chosenPlayer");
      player1Turn();
      currentScore2.innerText = 0;
      if (totalScore2.innerText > 30) {
        //winner
        winner.style.display = "flex";
        whoWin.innerText = "Player2 Winner";
      }
    };
  };
}
