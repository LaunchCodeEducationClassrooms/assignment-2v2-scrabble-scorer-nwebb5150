// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

function simpleScore(word){
return word.length
};


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


function initialPrompt() {
   word = input.question("Let's play some scrabble!\n\nPlease enter a word to score: ");
   return word;
   
};


function vowelBonusScore(word){
	word = word.toUpperCase();
	let letterPoints = 0;
  let vowels = ['A', 'E', 'I', 'O', 'U']
 
	for (let i = 0; i < word.length; i++) {
 
	  if (vowels.includes(word[i])){
			letterPoints += 3 
      } else { 
        letterPoints++
      }
        return letterPoints;
      }

let scrabbleScore;

const scoringAlgorithms = [];

function scorerPrompt() {
  console.log("\nWhich scoring algorithm would you like to use?\n\n\t0 - Simple: One point per character\n\t1 - Vowel Bonus: Vowels are worth 3 points\n\t2 - Scrabble: Uses scrabble point system)\n");
  let scoringAlgorithm = input.question("Enter 0, 1, or 2: ")
}

function transform(oldPointStructure) {

};

let newPointStructure;


function runProgram() {
   word = initialPrompt();
   scoringAlgorithm = scorerPrompt();
   console.log(oldScrabbleScorer(word));
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

