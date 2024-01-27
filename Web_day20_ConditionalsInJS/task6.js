const prompt = require("prompt-sync")();

// declaring variables for input and results
var yourAge = parseInt(prompt("How old are you : "));

//Output

if(yourAge <= 10){
    console.log ("You will get a free ticket");
}
else if (yourAge > 10 && yourAge <= 30){
    console.log("You will get 50% discount")
}
else if (yourAge >= 60){
    console.log("You will get 15% discount")
}
else{
    console.log("Ticket fare 800 tk")
}
