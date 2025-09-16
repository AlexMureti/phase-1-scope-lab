// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
//declaring a variable in global scope while inside a function

function setBestCustomer(){
    window.bestCustomer = 'not bob';
}

//consequently, we can overwrite the variable in the global scope
function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}

//declaring a global constant then trying to change it inside a function
const leastFavoriteCustomer = "definately not bob"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "someone else";
}