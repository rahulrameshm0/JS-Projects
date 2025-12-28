const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const button = document.querySelector('button');
const player1 = document.querySelector('.player-1');
const computer = document.querySelector('.computer');
const winner = document.querySelector('.winner');
const user = document.querySelector('.user');
const machine = document.querySelector('.machine');

let choice = ['rock', 'paper', 'scissors'];
let player = [rock, paper, scissors];

let playerScore = 0;
let computerScore = 0;

player1.value = playerScore;
computer.value = computerScore;

player1.textContent = playerScore;
computer.textContent = computerScore;

rock.addEventListener('click', function(){
    let computer_choice = choice[Math.floor(Math.random() * choice.length)];
    if (computer_choice === 'paper'){
        playerScore++
        player1.textContent = playerScore;
    }else if (computer_choice === 'scissors'){
        computerScore++;
        computer.textContent = computerScore;
    }else{
        alert('It is draw!');
    }
    checkWinner()
});

paper.addEventListener('click', function(){
    let computer_choice = choice[Math.floor(Math.random() * choice.length)];
    if (computer_choice === 'rock'){
        playerScore++;
        player1.textContent = playerScore;
    }else if (computer_choice === 'scissors'){
        computerScore++;
        computer.textContent = computerScore;
    }else{
        console.log('draw');
    }
    checkWinner()
});

scissors.addEventListener('click', function(){
    let computer_choice = choice[Math.floor(Math.random() * choice.length)];
    if (computer_choice === 'paper'){
        playerScore++;
        player1.textContent = playerScore;
    }else if (computer_choice === 'rock'){
        computerScore++;
        computer.textContent = computerScore;
    }else{
        console.log('draw');
    }
    checkWinner()

});

function checkWinner(){
    if (playerScore === 10){
        winner.textContent = `Player has won the game`;
        winner.style.color = 'green';
        setTimeout(resetGame, 2000);
    }else if (computerScore === 10){
        winner.textContent = `Computer has won the game`;
        winner.style.color = 'green';
        setTimeout(resetGame, 2000);
    };

};

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    player1.textContent = playerScore;
    computer.textContent = computerScore;
}