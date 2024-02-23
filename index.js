// Declare customerName in global scope
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Set bestCustomer without declaring it with var, let, or const to make it global
function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Attempting to change a constant should throw an error
const leastFavoriteCustomer = 'initial value';
function changeLeastFavoriteCustomer() {
    // This will indeed throw a TypeError, which is expected and correct
    leastFavoriteCustomer = 'new value';
}
