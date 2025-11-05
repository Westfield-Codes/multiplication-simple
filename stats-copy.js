var low = 3;
var high = 9;
var mistakes = [];
var message = "";
var perfect = false;

// Main function
function main() {
  let questions = setUp();
  let score = 0;


  for (let i = 1; i <= questions; i++) {
    let correct = askQuestion(i);
    if (correct) score++;
  }


  showStats(score, questions);
}



// Function setUp()
function setUp() {
  let keepDefaults = confirm(
    "Would you like to keep the default min and max ranges of " + low + " to " + high + "?"
  );


  if (keepDefaults !== true) {
    low = changeVar("minimum value");
    high = changeVar("maximum value");
  }


  let defaultQuestions = 5;
  let keepQuestions = confirm(
    "Would you like to keep the default number of questions (" + defaultQuestions + ")?"
  );


  if (keepQuestions !== true) {
    defaultQuestions = changeVar("number of questions");
  }


  return defaultQuestions;
}


// Function changeVar(variable)
function changeVar(variable) {
  let value = parseInt(prompt("Enter the new " + variable + ":"));
  while (isNaN(value) || value <= 0) {
    value = parseInt(prompt("Invalid input. Enter the new " + variable + " again:"));
  }
  return value;
}


// Function askQuestion(question)
function askQuestion(question) {
  let num1 = Math.floor(Math.random() * (high - low + 1)) + low;
  let num2 = Math.floor(Math.random() * (high - low + 1)) + low;
  let answer = parseInt(prompt("Question " + question + ": What is " + num1 + " x " + num2 + "?"));


  if (answer === num1 * num2) {
    alert("Correct!");
    return true;
  } else {
    alert("Incorrect. The correct answer was " + (num1 * num2));
    mistakes.push([num1, num2]);
    return false;
  }
}

// Function showErrors(errors)
function showErrors(errors) {
  message = "you missed these problems:\n";
  for (let i = 0; i < errors.length; i++) {
    message += errors[i][0] + " x " + errors[i][1] + " = " + (errors[i][0] * errors[i][1]) + "\n";
  }
}

// Function showStats()
function showStats(score, questions) {
  if (score === questions) {
    perfect = true;
    alert("Perfect score! You earned the Perfection Badge!");
  } else {
    alert("You got " + score + " out of " + questions + " correct.");
    if (mistakes.length > 0) {
      showErrors(mistakes);
    }
  }
let more = confirm("Would you like to study any tables? (yes/no)");
  while (more == true) {
    if(perfect != true){
let factor = parseInt(prompt("Enter the factor you'd like to study... NOTE: " + message));
    showTable(factor);
    }
    else{
      let factor = parseInt(prompt("Enter the factor you'd like to study:"));
    showTable(factor);
  }
      more = confirm("Would you like to study more tables? (yes/no)");
}
alert("Thanks for playing!");
}




// Function showTable(factor)
function showTable(factor) {
  let table = "Multiplication Table for " + factor + ":\n";
  for (let i = low; i <= high; i++) {
    table += factor + " x " + i + " = " + (factor * i) + "\n";
  }
  alert(table);
}



