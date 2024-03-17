function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs

    // Example usage of Math methods
    let num = 3.14;
    let roundedNum = Math.round(num);
    let ceiledNum = Math.ceil(num);
    let flooredNum = Math.floor(num);
    let truncatedNum = Math.trunc(num);
    let signNum = Math.sign(num);
    let powNum = Math.pow(2, 3);
    let minNum = Math.min(5, 10);
    let randomNum = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100

    // Display the results in appropriate paragraphs
    document.getElementById("round").innerText = "Round: " + roundedNum;
    document.getElementById("ceil").innerText = "Ceil: " + ceiledNum;
    document.getElementById("floor").innerText = "Floor: " + flooredNum;
    document.getElementById("trunc").innerText = "Trunc: " + truncatedNum;
    document.getElementById("sign").innerText = "Sign: " + signNum;
    document.getElementById("pow").innerText = "Pow: " + powNum;
    document.getElementById("min").innerText = "Min: " + minNum;
    document.getElementById("random").innerText = "Random: " + randomNum;

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerText = "Random2: " + Math.floor(Math.random() * 100) + 1;

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // Example usage of Booleans
    let x = 5;
    let y = 10;
    let z = x > y;

    // Display the boolean result in the appropriate paragraph
    document.getElementById("boolean").innerText = "Boolean: " + z;

    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    document.getElementById("comparisons").innerText = "The == operator checks for equality of value, whereas the === operator checks for equality of both value and type.";

    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
    // You can add your own examples of conditions here
}
