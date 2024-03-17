function calculate() {
    chi = '';
    myname = document.getElementById("fname").value;
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);
    year = parseInt(document.getElementById("year").value);

    switch (year % 12) {
        case 0:
            chi = "Monkey";
            break;
        case 1:
            chi = "Rooster";
            break;
        case 2:
            chi = "Dog";
            break;
        case 3:
            chi = "Pig";
            break;
        case 4:
            chi = "Rat";
            break;
        case 5:
            chi = "Ox";
            break;
        case 6:
            chi = "Tiger";
            break;
        case 7:
            chi = "Rabbit";
            break;
        case 8:
            chi = "Dragon";
            break;
        case 9:
            chi = "Snake";
            break;
        case 10:
            chi = "Horse";
            break;
        case 11:
            chi = "Goat";
            break;
        default:
            chi = "Invalid Year";
    }

    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
}
