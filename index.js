var inquirer = require("inquirer");
var Word = require("./Word");


var randomWord = ["coffee", "dog", "cat"]
console.log(randomWord[~~(randomWord.length * Math.random())]);

var newWord = new Word((randomWord[~~(randomWord.length * Math.random())]));
console.log(newWord);

console.log(*-----------Start Game-------------");
console.log("Guess a letter");
var guesses = 10

//game outlines