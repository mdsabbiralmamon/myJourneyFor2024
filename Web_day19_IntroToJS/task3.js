const prompt = require("prompt-sync")();

// declaring variables for input and results
var input1 = parseInt(prompt("Input the number you want to find the remainder when divided by 5 : ")),
    result;

// calculating results
result = input1%5;

// displaying result
console.log('Remainder is : ' + result);