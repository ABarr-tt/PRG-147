// declare and initialize arrays
let game = ["COBOL", "JAVA", "PYTHON", "JAVASCRIPT", "HTML", "CSS", "RUBY", "PHP", "C++", "SWIFT"];
let usedNumbers = [];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice].toUpperCase(); // Ensure the answer is converted to uppercase for consistency
let myLength = answer.length;
let display = new Array(myLength).fill("_");
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';

// game setup function
function setup() {
    alert(answer); // For testing purposes, remove this in the final version
    for (let i = 0; i < myLength; i++) {
        output += display[i] + ' ';
    }
    document.getElementById("word").innerHTML = output;
}

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value.toUpperCase();
    document.getElementById("guess").value = ''; // Reset input field value

    // Check if the guessed letter is in the answer
    for (let c = 0; c < myLength; c++) {
        if (userLetter === letters[c]) {
            display[c] = userLetter;
            win--;
        }
        output += display[c] + ' ';
    }

    document.getElementById("word").innerHTML = output;
    output = '';

    // Decrement attemptsLeft
    attemptsLeft--;

    // Update guesses left and check for win or loss
    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
});

// Load images
window.addEventListener('load', function () {
    const hangmanImage = document.getElementById('hangman');
    const imageNumber = attemptsLeft + 1; // Image number corresponds to attemptsLeft + 1
    hangmanImage.src = 'images/' + imageNumber.toString().padStart(2, '0') + '.png';
});
