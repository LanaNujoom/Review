'use strict';

var hoursArray = ['6 am','7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ];
var arrayObjects = [];

// GlobalRandom Function to take a random value every hour 

function getRandomIntInclusive(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    var result =  Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    return result;
  }


  function Branch(name,minCustomerPerHour,maxCustomerPerHour,avgCookiesPerCustomer){

    this.name = name;
    this.minCustomerPerHour = minCustomerPerHour; 
    this.maxCustomerPerHour = maxCustomerPerHour;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.total = 0;
    arrayObjects.push(this);
    this.resultPerHour = [];




  }



  Branch.prototype.cookiesPerHour = function(){

    var cookiesHour = Math.floor(getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour)*this.avgCookiesPerCustomer);
    this.total = this.total + cookiesHour;
    this.resultPerHour.push(cookiesHour);
    return cookiesHour;


  }


  var seattle = new Branch ('seattle',23,65,6.3);
//   seattle.cookiesPerHour();
console.log(seattle.resultPerHour);


  var tokyo = new Branch ('tokyo',3,24, 1.2);

  var dubai = new Branch ('dubai',11,38, 3.7);

  var paris = new Branch ('paris',20,38, 2.3);

  var lima = new Branch ('lima',2,16, 4.6);






// Rendering Every Branch :



var parentElement = document.getElementById("branches");
var table = document.createElement('table');

parentElement.appendChild(table);



var headerRow = document.createElement('tr');
table.appendChild(headerRow);

var emptyCell = document.createElement('td');
headerRow.appendChild(emptyCell);


for (let i = 0; i < hoursArray.length; i++) {
    var tableHeader = document.createElement('th')
    tableHeader.textContent= hoursArray[i];
    headerRow.appendChild(tableHeader);


}

var totalHeader = document.createElement('th');
totalHeader.textContent = 'Daily Location Total';
headerRow.appendChild(totalHeader);




for (let index = 0; index < arrayObjects.length; index++) {
   
    
    var branchRow = document.createElement('tr');
    table.appendChild(branchRow);


    var branchName = document.createElement('td');
    branchName.textContent = arrayObjects[index].name;
    branchRow.appendChild(branchName);


 
    
    for (let j = 0; j < hoursArray.length; j++) {

   
     var dataCell = document.createElement('td');
     dataCell.textContent =arrayObjects[index].cookiesPerHour();
     branchRow.appendChild(dataCell);
 
 
        
    }

    var dailyTotal = document.createElement('td');
    dailyTotal.textContent = arrayObjects[index].total;
    branchRow.appendChild(dailyTotal);


 
 
 
     
 }

 var totalRow = document.createElement('tr');
 table.appendChild(totalRow);

 var totalCell = document.createElement('td');
 totalCell.textContent= 'Totals';
 totalRow.appendChild(totalCell);

 



var hourlyTotalsArray=[];



 for (let i = 0; i < hoursArray.length; i++) {

    var hourlyTotals = document.createElement('td');

    var hourlyTotalsVar = 0;


    for (let index = 0; index < arrayObjects.length; index++) {

         
         hourlyTotalsVar = hourlyTotalsVar + arrayObjects[index].resultPerHour[i];
        
      
        
    }
    hourlyTotalsArray.push(hourlyTotalsVar);

    hourlyTotals.textContent= hourlyTotalsArray[i];

    
    totalRow.appendChild(hourlyTotals);
   
  


}

var totalOfTotals = 0;
for (let index = 0; index < hourlyTotalsArray.length; index++) {

    totalOfTotals = totalOfTotals + hourlyTotalsArray[index];
   
}


//  console.log(totalOfTotals);
 
 var totalOfTotalsCell = document.createElement('td');
 totalOfTotalsCell.textContent = totalOfTotals;

 totalRow.appendChild(totalOfTotalsCell);

 
 
 