const prompt = require("prompt-sync")();

var books = ["book1", "book2", "book3"];

var searchBook = prompt("Input a book name to search : ");

if(books.includes(searchBook)){
    console.log("book is available");
}
else{
    console.log("book is not available");
}