// Assign global variables
var startBtn = document.querySelector("#start");
var resetBtn = document.querySelector("#reset");
var letters = 'abcdefghijklmnopqrstuvwxyz'
var wordOptions = ["javascript", "word", "zoom"]


//Function start game
  //Fetch random word
  //Start timer
  //listen for user input
      //check user input against word
      //record letters guessed
      //if user guesses word before timer ends win game
  //when timer ends game ends

//Function reset game

// User input
var length = Math.floor(prompt("Enter desired character length between 8 and 128\n note: the available range inculdes both 8 and 128"));
  if (length < 8 || length > 128) {
    length = Math.floor(prompt("Enter desired character length that is actually between 8 and 128"));
  } 
  if (length < 8 || length > 128) {
    length = Math.floor(prompt("You're being difficult. Either actually enter a number between 8 and 128 or suffer through this page reloading while you click through the prompts only to be brought back to this question again."));
  } 
  if (length < 8 || length > 128) {
    alert("Strike three. You're out.")
    location.reload()
  } 

lowBoo = confirm("Do you want lowercase letters?")  
upBoo = confirm("Do you want UPPERCASE LETTERS?")
speBoo = confirm("Do you want $peci@l ch@r@cter$?!?!!")
numBoo = confirm("Do you want numb3r5?")

if (lowBoo === false && upBoo === false && speBoo === false && numBoo === false) {
  alert("No characters were selected, all available characters will be included");
  lowBoo = true;
  upBoo = true;
  speBoo = true;
  numBoo = true;
}

// Creating array of available characters
if (lowBoo === true) {
  characters += lowers
} 
if (upBoo === true) {
  characters += uppers
}
if (speBoo === true) {
  characters += special
}
if (numBoo === true) {
  characters += numbers
}

console.log(characters)
characters = characters.split(
  ''
)
console.log(characters)


// Generating password
function generatePassword() {
  pw = ""
  for (var i = 0, n = characters.length; i < length; ++i) {
    pw += characters[Math.floor(Math.random()*n)];
  }
  return pw
  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Button generates password upon click
generateBtn.addEventListener("click", writePassword);
