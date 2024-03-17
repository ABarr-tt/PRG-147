function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Aidan Barrett";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home."
    let lengthParagraph = document.getElementById("length");
        lengthParagraph.textContent = "Length of the string: " + myString.length;


    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let escapeSeq = "Be it \tever so \nhumble, there \"is\" no place like home. \\";
        let escapeParagraph = document.getElementById("escape");
        escapeParagraph.textContent = myString;


    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph
    let name = "Aidan Barrett"; 
        let firstName = name.slice(0, name.indexOf(" "));
        let firstNameParagraph = document.getElementById("firstNameParagraph");
        firstNameParagraph.textContent = "First Name: " + firstName;


    // Use the Javascript substring Method to display your middle name to the middle paragraph


    // Use the JavaScript subst Method to display your last name to the last paragraph



    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph
    let major = "I'm majoring in Physical Therapy at McHenry County College"


    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"


    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)


    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
}