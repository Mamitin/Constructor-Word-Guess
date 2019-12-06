var Letter = require("./letter");

var Word = function (randomWord) {
    this.wordArray = randomWord.split("").map(function (char) {
        return new Letter(char)
    })

    this.display = function () {
        return this.wordArray.join(" ")
    }

    this.verify = function (guess) {
        for (var i = 0; i < this.wordArray.length; i++) {
            var letterObj = this.wordArray[i];
            if (guess === letterObj.char) {
                letterObj.guessed = true
            }

        }
    }


}

// var testWord = new Word("coffee")
// console.log(testWord);
// console.log(testWord.verify("o"));
// console.log(testWord);

module.exports = Word;