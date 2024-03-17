// Define holidays for each month
const holidays = {
    January: ["New Year's Day", "Martin Luther King Jr. Day"],
    February: ["Valentine's Day", "Presidents' Day"],
    March: ["St. Patrick's Day", "International Women's Day"],
    April: ["April Fools' Day", "Earth Day"],
    May: ["Mother's Day", "Memorial Day"],
    June: ["Father's Day", "World Environment Day"],
    July: ["Independence Day", "World Population Day"],
    August: ["International Youth Day", "World Humanitarian Day"],
    September: ["Labor Day", "International Day of Peace"],
    October: ["Halloween", "World Food Day"],
    November: ["Veterans Day", "Thanksgiving Day"],
    December: ["Christmas Day", "New Year's Eve"]
  };
  
  // Function to display holidays for a given month
  function displayHolidays(month) {
    const holidaysContainer = document.getElementById('holidays-container');
    holidaysContainer.innerHTML = ''; // Clear previous content
    
    const monthName = Object.keys(holidays)[month - 1];
    const monthHolidays = holidays[monthName];
  
    const heading = document.createElement('h2');
    heading.textContent = `Holidays in ${monthName}`;
    holidaysContainer.appendChild(heading);
  
    const list = document.createElement('ul');
    monthHolidays.forEach(holiday => {
      const listItem = document.createElement('li');
      listItem.textContent = holiday;
      list.appendChild(listItem);
    });
    holidaysContainer.appendChild(list);
  }
  
  // Event listener for dropdown change
  document.getElementById('months').addEventListener('change', function() {
    const selectedMonth = parseInt(this.value);
    displayHolidays(selectedMonth);
  });
  
  // Initially display holidays for January
  displayHolidays(1);
  