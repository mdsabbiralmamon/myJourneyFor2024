const prompt = require("prompt-sync")();

// declaring variables for input and results
var yourScore = parseFloat(prompt("Input your mark out of 100 : "));

//Output
if(yourScore >= 80){
    var yourFriendsScore = parseFloat(prompt("Input your friend's mark out of 100 : "));
    if(yourFriendsScore >= 80){
        console.log("go for a lunch")
    }
    else if(yourFriendsScore >= 60 && yourFriendsScore < 80){
        console.log("good luck next time")
    }
    else if(yourFriendsScore >= 40 && yourFriendsScore < 60){
        console.log("keep your friend's message unseen")
    }
    else{
        console.log("block your friend")
    }
}
else{
    console.log("go to home and sleep and act sad")
}