function start() {

    // Print your name to the name heading
    document.getElementById("name").innerHTML = "Your Name Here";

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
       We will focus on the things with numbers that are significantly
       different than Python. Please read the page linked to above before 
       completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    var num = 10;
    var str = "5";
    var result = num + str;
    document.getElementById("add").innerHTML = num + " + " + str + " = " + result;

    /*
       JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    var number = 123;
    document.getElementById("to-string").innerHTML = number.toString();

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    var exponential = 12345.6789;
    document.getElementById("exponent").innerHTML = exponential.toExponential();

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    var fixedNumber = 123.456;
    document.getElementById("fixed").innerHTML = fixedNumber.toFixed(2);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    var precisionNumber = 12345.6789;
    document.getElementById("precision").innerHTML = precisionNumber.toPrecision(4);

    // Demonstrate the use of parseFloat() and print to the float paragraph
    var floatString = "3.14";
    document.getElementById("float").innerHTML = parseFloat(floatString);

    // Demonstrate the use of parseInt() and print to the int paragraph
    var intString = "10";
    document.getElementById("int").innerHTML = parseInt(intString);

    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474
    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */

    // Arithmetic and Logical Operators:
    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    /* In the logic paragraph, describe the order of precedence for and / or operators */

    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474

    // Write code to demonstrate the use of the switch statement and display results to switch paragraph
    var fruit = "Apple";
    var output;
    switch (fruit) {
        case "Apple":
            output = "It's an apple.";
            break;
        case "Banana":
            output = "It's a banana.";
            break;
        default:
            output = "It's something else.";
    }
    document.getElementById("switch").innerHTML = output;

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    var age = 20;
    var eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
    document.getElementById("ternary").innerHTML = eligibility;

}
