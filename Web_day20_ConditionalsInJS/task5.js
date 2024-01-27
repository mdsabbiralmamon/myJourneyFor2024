const prompt = require("prompt-sync")();

// declaring variables for input and results
var num1 = parseFloat(prompt("Input a number : ")),
    num2 = parseFloat(prompt("Input another number : ")),
    result;

//Output
if(num1 > num2){
    result = 2*num1;
    console.log("result = " + result);
}
else{
    result = num1 + num2;
    console.log("result = " + result);
}