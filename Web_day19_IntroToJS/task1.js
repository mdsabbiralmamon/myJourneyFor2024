const prompt = require("prompt-sync")();

// declaring variables for input and results
var input1 = parseFloat(prompt("Amount of money you have : ")), 
    input2 = parseFloat(prompt("Amount of product you bought : ")), 
    result;

// calculating results
result = (input1-input2).toFixed(2);

// displaying result
console.log('amount of money shopkeeper will pay you back: ' + result);