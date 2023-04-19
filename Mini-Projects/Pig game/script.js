'use strict';


//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting condition

let scores, currScore, activePlayer, playing;
const init = function(){
    
    scores = [0,0];
    currScore = 0;
    activePlayer = 0;
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

//Rolling dice functionality
btnRoll.addEventListener('click',function(){

    if(playing){
    // 1 generating a random dice roll
    const dice = Math.trunc(Math.random() * 6 ) + 1;
    // 2 display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3 check for rolled 1 : if true, switch to anothe player
    if(dice !== 1){
        currScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currScore;
    }else{
        switchPlayer();
    }
}
});

btnHold.addEventListener('click',function(){

    if(playing){
    //1 add current score to the active player's total score
    scores[activePlayer] += currScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //2 check if acitve player's score is >= 100
    // finish the game
    if(scores[activePlayer] >= 100){
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    }else{
    //3 switch to another player
    switchPlayer();
    }
}
});

btnNew.addEventListener('click',init);
