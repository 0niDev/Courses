const score = document.getElementById("score");
const alphabet = document.getElementById("alphabet");
const input = document.getElementById("input");
const timer = document.getElementById("timer");
const restartBtn = document.getElementById("restart");

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let countdown = 3;
let timerId;
let start = false;

input.disabled = true;

input.addEventListener("input", check);
restartBtn.addEventListener("click", restart);

function startTimer() {
  timerId = setInterval(() => {
    countdown--;
    timer.innerHTML = countdown;
    if (countdown === 0) {
      endGame();
    }
  }, 1000);
}

function check() {
  target = alphabet.innerHTML;
  if (input.value.toUpperCase() === target) {
    score.innerHTML++;
    let count = 0;
    for (let i = 0; i < letters.length; i++) {
      if (input.value.toUpperCase() === letters[i].toUpperCase()) {
        count++;
        if (count > 2) {
          letters.splice(i, 1); // Remove the item from the array
          break;
        }
      }
    }
    genRan();
  } else {
    wrong();
  }
}

function genRan() {
  input.value = "";
  let ran = "";
  ran += letters[Math.floor(Math.random() * letters.length)].toUpperCase();
  ran === alphabet.innerHTML ? genRan() : (alphabet.innerHTML = ran);
}

function wrong() {
  input.value = "";
  letters.push(alphabet.innerHTML.toLowerCase());
  score.innerHTML--;
}

function endGame() {
  clearInterval(timerId);
  input.disabled = true;
  restartBtn.style.display = "inline-block";
}

function restart() {
  countdown = 30;
  timer.innerHTML = countdown;
  score.innerHTML = 0;
  letters.splice(0, letters.length);
  letters.push(
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  );
  input.disabled = false;
  restartBtn.style.display = "none";
  genRan();
  startTimer();
  input.focus();
}
