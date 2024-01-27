const prompt = require("prompt-sync")();

// declaring variables for input and results
var score = parseFloat(prompt("Input your mark out of 100 : "));

//Output
if(score < 59){
    console.log("F");
}
else if(score >= 60 && score <=69){
    console.log("D");
}
else if(score >= 70 && score <=79){
    console.log("C");
}
else if(score >= 80 && score <=89){
    console.log("B");
}
else{
    console.log("A")
}