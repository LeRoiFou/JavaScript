/*
Lien : https://www.youtube.com/watch?v=U9D6thLppSA&list=PLCC34OHNcOtoL9GBolQKRq9RiA6PxSqMd&index=20
Cours : Math Flashcards Pt1 - Javascript Programming 19

00:12:45

Date : 11-03-24
*/

// Create 2 random numbers
let number1 = Math.floor(Math.random() * 10) + 1;
let number2 = Math.floor(Math.random() * 10) + 1;

// Get the answer
let theAnswer = number1 + number2;

// Do Answer Stuff
function answer() {
  // get the answerr the user typed in
  let ourAnswer = document.getElementById("ourAnswer").value;

  // determine if the answer is a number
  if (isNaN(ourAnswer)) {
    // Not a number
    document.getElementById("output").innerHTML =
      "Hey! " + ourAnswer + " is not a number! Try Again!";
  } else {
    // Is a number
    if (ourAnswer == theAnswer) {
      // We win!
      document.getElementById("output").innerHTML =
        "Correct! " + number1 + " + " + number2 + " = " + ourAnswer;
    } else {
      // Wrong answer
      document.getElementById("output").innerHTML =
        "Wrong! " + number1 + " + " + number2 + " doesn't equal " + ourAnswer;
    }
  }
}

// Clear the form and stuf
function clearForm() {
  document.getElementById("myForm").reset();
  document.getElementById("output").innerHTML = "";
}

// Play Again - Reset
function restart() {
  // reset the form
  document.getElementById("myForm").reset();

  // reload the page
  location.reload();
}
