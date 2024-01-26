const prompt = require("prompt-sync")();

// declaring variables for input and results
var Mathematics = parseFloat(prompt("What is Mathematics Mark? ")), 
    Biology = parseFloat(prompt("What is Mathematics Mark? ")), 
    Chemistry= parseFloat(prompt("What is Mathematics Mark? ")), 
    Physics = parseFloat(prompt("What is Mathematics Mark? ")), 
    Bangla = parseFloat(prompt("What is Mathematics Mark? ")), 
    total,
    avg;

// calculating results
total = (Mathematics + Biology + Chemistry + Physics + Bangla);
avg = (total/5).toFixed(2);

// displaying result
console.log(avg);