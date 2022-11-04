'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current_0_El = document.querySelector('#current--0');
const current_1_El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const NewGame = document.querySelector('.btn--new');
const HoldDice = document.querySelector('.btn--hold');

let currentScore = 0;
let activePlayer = 0;
let flag = true;
let score = [];
function init() {
  flag = true;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  currentScore = 0;
  score = [0, 0];
  current_0_El.textContent = 0;
  current_1_El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
}
init();
const SwitchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

rollDice.addEventListener('click', function () {
  if (flag) {
    diceEl.classList.remove('hidden');
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;
    if (dice != 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      SwitchPlayer();
    }
  }
});
HoldDice.addEventListener('click', function () {
  if (flag) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
      flag = false;
    } else {
      SwitchPlayer();
    }
  }
});

NewGame.addEventListener('click', function () {
  init();
});
