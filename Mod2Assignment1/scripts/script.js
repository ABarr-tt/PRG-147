// Generate a random number between 1 and 1000
const randomNumber = Math.floor(Math.random() * 1000) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const resultElement = document.getElementById('result');

    if (userGuess === randomNumber) {
        resultElement.innerHTML = '<p class="correct">Congratulations! You guessed the correct number!</p>';
    } else {
        const difference = Math.abs(randomNumber - userGuess);
        let feedback;
        
        if (difference <= 10) {
            feedback = 'Hot';
        } else if (difference <= 50) {
            feedback = 'Warm';
        } else {
            feedback = 'Cold';
        }

        resultElement.innerHTML = `<p class="${feedback.toLowerCase()}">You're ${feedback}!</p>`;
    }
}
