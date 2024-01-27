const prompt = require("prompt-sync")();

// declaring variables for input and results
var input1 = parseFloat(prompt("Input your product value : "));

// calculating results
if(input1 >= 500){
    console.log("collect your free drinks from cash");
}
else{
    console.log("You have to pay 30 TK for coke")
}