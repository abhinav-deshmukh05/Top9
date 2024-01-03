let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
//console.log(startOver);
 

const p =document.createElement('p');

let prevGuess=[]
let numGuess=1 

let playGame=true;  

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()// prevent isiliye ki khi get post ni kre
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
// simply check the value will be 1 to 100
    if(isNaN(guess)){
        alert('please enter a valid number');
    }else if(guess < 1){
        alert('please enter a number more than 1');
    }else if(guess>100){
        alert('please enter a number less than 100')
    }else {
        prevGuess.push(guess);
        if(numGuess===11){
            CleanupGuess(guess)
            displayMessage(`Game over,Random number was ${randomNumber}`)
            endGame()
        }else {
            CleanupGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    //print message that everything is okk
    if(guess === randomNumber){
        displayMessage(`you guessed it right`);
        endGame();
    }else if(guess <randomNumber){
        displayMessage(`Number is TOO low`);
    }else if(guess > randomNumber){
        displayMessage(`Number is TOO high`)
    }

}

function CleanupGuess(guess){
//update the array of previous guesses
userInput.value=''
guessSlot.innerHTML+=`${guess} `;
numGuess++;
remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
// display message
lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
userInput.value=''
userInput.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
startOver.appendChild(p)
playGame=false;
newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });


}