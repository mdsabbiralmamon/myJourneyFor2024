const prompt = require("prompt-sync")();

// declaring variables for input and results
var weight = parseFloat(prompt("Input your Weight in kg : ")),
    height = parseFloat(prompt("Input your Height in m : ")),
    BMI;

// calculating BMI
BMI = weight/(height)**2

//Output
if(BMI < 18.5){
    console.log("you are underweight.");
}
else if(BMI >= 18.5 && BMI <=24.9){
    console.log("you are normal.");
}
else if(BMI >=25 && BMI <= 29.9){
    console.log("you are overweight.");
}
else{
    console.log("you are obese.")
}