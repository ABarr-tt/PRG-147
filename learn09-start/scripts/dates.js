// Wait for the DOM content to be fully loaded before executing any JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Create a variable, assign it to a new date object
    var basicDate = new Date();
    // Display the variable in the basic paragraph
    document.getElementById("basic").textContent = "Basic Date Format: " + basicDate.toDateString();

    // Create a new date variable and load the information for today into it
    var todayDate = new Date();
    // Display the results in the today paragraph (Year, Month, Day)
    document.getElementById("today").textContent = "Today's Date: " + todayDate.getFullYear() + "-" + (todayDate.getMonth() + 1) + "-" + todayDate.getDate();

    // Create a new date variable based on the dateString and store your birthday in it
    var birthdayDate = new Date("1990-05-20");
    // Display the variable in the birthday paragraph
    document.getElementById("birthday").textContent = "Birthday: " + birthdayDate.toDateString();

    // Convert your basic date to the ISO string format and display the result
    var isoDate = basicDate.toISOString();
    document.getElementById("iso").textContent = "ISO Date Format: " + isoDate;

    // Demonstrate 3 date formats of your choice
    var date1 = todayDate.toLocaleString();
    var date2 = todayDate.toLocaleDateString();
    var date3 = todayDate.toTimeString();
    document.getElementById("date1").textContent = "Date Format 1: " + date1;
    document.getElementById("date2").textContent = "Date Format 2: " + date2;
    document.getElementById("date3").textContent = "Date Format 3: " + date3;

    // Demonstrate 4 get date methods of your choice
    document.getElementById("get1").textContent = "Full Year: " + todayDate.getFullYear();
    document.getElementById("get2").textContent = "Month: " + (todayDate.getMonth() + 1);
    document.getElementById("get3").textContent = "Day of Month: " + todayDate.getDate();
    document.getElementById("get4").textContent = "Day of Week: " + todayDate.getDay();

    // Demonstrate 4 set date methods of your choice
    var set1Date = new Date();
    set1Date.setFullYear(2025);
    document.getElementById("set1").textContent = "Set Full Year: " + set1Date.toDateString();

    var set2Date = new Date();
    set2Date.setMonth(6);
    document.getElementById("set2").textContent = "Set Month: " + set2Date.toDateString();

    var set3Date = new Date();
    set3Date.setDate(15);
    document.getElementById("set3").textContent = "Set Date: " + set3Date.toDateString();

    var set4Date = new Date();
    set4Date.setHours(10);
    document.getElementById("set4").textContent = "Set Hours: " + set4Date.toTimeString();
});

