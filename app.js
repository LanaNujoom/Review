'use strict';

var hoursArray = ['6 am','7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm','7 pm' ];

// GlobalRandom Function to take a random value every hour 

function getRandomIntInclusive(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    var result =  Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    return result;
  }



//   Creating 5  Objects 


  var seattle = {

       minCustomerPerHour : 23,
       maxCustomerPerHour : 65,
       avgCookiesPerCustomer :  6.3,
       name : 'seattle',
       total : 0,
       cookiesPerHour : function () {

        var cookiesHour = Math.floor(getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour)*this.avgCookiesPerCustomer);
        this.total = this.total + cookiesHour;
    
        return cookiesHour;
         
           
       }

       
 

  };


  console.log(seattle.cookiesPerHour());
  console.log(seattle.name);


  var tokyo = {

    minCustomerPerHour : 3,
    maxCustomerPerHour : 24,
    avgCookiesPerCustomer :  1.2,
    name : 'tokyo',
    total : 0,
    cookiesPerHour : function () {
        var cookiesHour = Math.floor(getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour)*this.avgCookiesPerCustomer);
        this.total = this.total + cookiesHour;
        return cookiesHour;
        
        
    }

    


};


console.log(tokyo.cookiesPerHour());



var dubai = {

    minCustomerPerHour : 11,
    maxCustomerPerHour : 38,
    avgCookiesPerCustomer : 3.7,
    name : 'dubai',
    total : 0,
    cookiesPerHour : function () {
        var cookiesHour = Math.floor(getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour)*this.avgCookiesPerCustomer);
        this.total = this.total + cookiesHour;
        return cookiesHour;
        
        
    }

    


};


console.log(dubai.cookiesPerHour());


var paris = {

    minCustomerPerHour : 20,
    maxCustomerPerHour : 38,
    avgCookiesPerCustomer : 2.3,
    name : 'paris',
    total : 0,
    cookiesPerHour : function () {
        var cookiesHour = Math.floor(getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour)*this.avgCookiesPerCustomer);
        this.total = this.total + cookiesHour;
        return cookiesHour;
        
        
    }

    


};


console.log(paris.cookiesPerHour());



var lima = {

    minCustomerPerHour : 2,
    maxCustomerPerHour : 16,
    avgCookiesPerCustomer : 4.6,
    name : 'lima',
    total : 0,
    cookiesPerHour : function () {
        var cookiesHour = Math.floor(getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour)*this.avgCookiesPerCustomer);
        this.total = this.total + cookiesHour;
        return cookiesHour;
        
        
    }

    


};


console.log(lima.cookiesPerHour());




// Rendering Every Branch :



var arrayObjects = [seattle,tokyo, dubai,paris, lima];

// console.log(arrayObjects[1]);



var parentElement = document.getElementById("branches");

// var h2 = document.createElement('h2');
// h2.textContent = 'Lana';
// parentElement.appendChild(h2);




for (let index = 0; index < arrayObjects.length; index++) {
   var branchName = document.createElement('h2');
   branchName.textContent = arrayObjects[index].name;
   parentElement.appendChild(branchName);


   var listHours = document.createElement('ul');
   parentElement.appendChild(listHours);

   
   for (let j = 0; j < hoursArray.length; j++) {
    var hours = document.createElement('li');
    hours.textContent = hoursArray[j] + ':' + arrayObjects[index].cookiesPerHour();
    listHours.appendChild(hours);


       
   }



   var total = document.createElement('li');
   total.textContent =  'total : ' + arrayObjects[index].total;
   listHours.appendChild(total);




    
}




