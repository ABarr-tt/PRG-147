// 99 bottles of beer on the wall using a for loop
let beerLyrics = "";
for (let i = 99; i > 0; i--) {
    // Building the lyrics for each iteration
    beerLyrics += i + " bottles of beer on the wall, " + i + " bottles of beer.<br>";
    beerLyrics += "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.<br><br>";
}
// Displaying the lyrics in the corresponding paragraph
document.getElementById("beer").innerHTML = beerLyrics;

// Create an array of months and use the for in loop to print them
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthsOutput = "";
for (let index in months) {
    // Building the output string for each month
    monthsOutput += months[index] + "<br>";
}
// Displaying the months in the corresponding paragraph
document.getElementById("for-in").innerHTML = monthsOutput;

// Use For Of to print letters from a string
const myString = "Hello";
let lettersOutput = "";
for (let letter of myString) {
    // Building the output string for each letter
    lettersOutput += letter + "<br>";
}
// Displaying the letters in the corresponding paragraph
document.getElementById("for-of").innerHTML = lettersOutput;

// Create a while loop to print the numbers 1 to 50
let count = 1;
let numbersOutput = "";
while (count <= 50) {
    // Building the output string for each number
    numbersOutput += count + "<br>";
    count++;
}
// Displaying the numbers in the corresponding paragraph
document.getElementById("while").innerHTML = numbersOutput;
