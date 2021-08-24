'use strict';
/*
const message = document.querySelector('.message');
console.log(message);
console.log(message.textContent);
message.textContent ='💥 Correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/
// document.querySelector('.check').addEventListener('click', function(){
//     document.querySelector('.message').textContent = document.querySelector('.guess').value; 
// })


let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);
    if(!guess){
        // document.querySelector('.message').textContent = '📛 No Number !';
        displayMessage('📛 No Number !');
    }
    else if(guess === secretNumber){
        displayMessage('💥 Correct Number !');
        // document.querySelector('.message').textContent = '💥 Correct Number !';
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore ;
        }
        score++;
    }
    else if(guess !== secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? '↗ Too High !' : '↘ Too Low !';
            score--;
            document.querySelector('.score').textContent = score;
            displayMessage(guess > secretNumber ? '↗ Too High !' : '↘ Too Low !');
        }
        else{
            displayMessage('🤐 You lost the game!');
            // document.querySelector('.message').textContent = '🤐 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    //Refactoring
    // else if(guess > secretNumber){
    //     if(score > 0){
    //         document.querySelector('.message').textContent = '↗ Too High !';
    //         score--;
    //         document.querySelector('.score').textContent = score;  
    //     }
    //     else{
    //         document.querySelector('.message').textContent = '😢 You lost the game !';
    //     }
    // }
    // else if(guess < secretNumber){
    //     if(score > 0){
    //         document.querySelector('.message').textContent = '↘ Too Low !';;
    //         score--;
    //         document.querySelector('.score').textContent = score;  
    //     }
    //     else{
    //         document.querySelector('.message').textContent = '😢 You lost the game !';
    //     }
    // }
    //Refactoring

});



    document.querySelector('.again').addEventListener('click', function(){
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20 + 1);
        console.log(secretNumber);
        displayMessage('Start guessing...');
        // document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = score;  
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';



    });

