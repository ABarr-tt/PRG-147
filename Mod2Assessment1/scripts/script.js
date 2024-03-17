function calculateOrder() {
    var customerName = document.getElementById('customerName').value;
    var drinks = document.querySelectorAll('input[name="drinks"]:checked');
    var sandwiches = document.querySelectorAll('input[name="sandwiches"]:checked');
    var deserts = document.querySelectorAll('input[name="deserts"]:checked');
    
    var drinkCost = drinks.length * 1.5; // Assume each drink costs $1.50
    var sandwichCost = sandwiches.length * 5; // Assume each sandwich costs $5
    var desertCost = deserts.length * 2; // Assume each desert costs $2
    
    document.getElementById('drinkSummary').innerHTML = "Drinks: $" + drinkCost.toFixed(2);
    document.getElementById('sandwichSummary').innerHTML = "Sandwiches: $" + sandwichCost.toFixed(2);
    document.getElementById('desertSummary').innerHTML = "Deserts/Sides: $" + desertCost.toFixed(2);
    
    var totalCost = drinkCost + sandwichCost + desertCost;
    document.getElementById('totalCost').innerHTML = "Total: $" + totalCost.toFixed(2);
    
    document.getElementById('summary').style.display = "block";
  }