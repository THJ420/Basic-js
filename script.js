var correctGuess = false;
var randomnumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomnumber ) {
  correctGuess = true;
} else if ( parseInt(guess) < randomnumber) {
  var guessmore = prompt('Try again. The number I am thinking of is more that ' + randomnumber + guess);
  if (parseInt(guessmore) === randomnumber) {
    correctGuess = true;

  }
} else if ( parseInt(guess) > randomnumber) {
  var guessLess = prompt('Try again, The number I am thinking is less than ' + guess);
  if (parseInt(guessLess) === randomnumber) {
    correctGuess = true;
  }

}
if ( correctGuess ) {
  document.write('<p>You gussed the number!</p>');
} else {
  document.write('<p>Sorry, The number was ' + randomnumber + '</p>');
}