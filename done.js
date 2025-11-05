/* MULTIPLICATION SIMPLE
 * This program should ask multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */

/* Global Variables */
var questions = 5;
var low = 3;
var high = 9;
var errors = [];
var errorCount = [];

/* main controls the program. 
 * Store the number of questions to ask in a variable called questions.
 * Call askQuestions, sending questions as an argument, which returns the number right. 
 * Give feedback depending on the number right returned: Either "Perfect!" or say 
 * how many right out of the number asked (questions). 
 * @param none
 * @return none
 */


function main(){
// errors = [];
let wizard = confirm("Would you like to use the setup wizard?")
    if (wizard) setUp();
    let right = askQuestions(questions);
        if (right == questions) alert("Perfect!");

        else {
            alert("You got " + right + " out of " + questions + ".")
            countErrors();
            alert("These are your errors: " + errors.toString()); 
            let tables = confirm("would you like to study with a table?");
            if(tables) showTables();
}
}

/* setUp lets the student customize the multiplication game
* specify the range of factors and let the student decide what they should be
* specify how many questions the student wants and what those should be, this should be done through assigning an existing GLOBAL variable
* @param none
* @return none
*/
function setUp() {
   let first = parseInt(prompt("What's the minimum factor you'd like to use"));
    let second = parseInt(prompt("What's the maximum factor you'd like to use?"));

    // Check for valid number input AND correct range
    if (isNaN(first) || isNaN(second) || first < 0 || second < 0 || first > second) {
        alert("You've input an invalid range. Please try again.");
        // Use recursion to re-prompt for the settings
        setUp(); 
    } else {
        // Only update globals when input is valid
        low = first;
        high = second;
    }

let strQ = prompt("How many questions do you want to answer?");
questions = parseInt(strQ);

 while (Number.isNaN(questions) || questions < 0) {
  questions = prompt("Please enter a positive number:");
} 
}

/* askQuestions calls askQuestion() questions times (for loop), sending the question number as an argument. 
 * It counts the number right returned, and returns number right to main() for feedback.
 * @param: {integer} questions 
 * @return: {integer} right (0-questions)
 */
function askQuestions(questions) {
    let right = 0;
    for (let question = 1; question <= questions; question++){
        right += askQuestion(question);
    }
    return right;
}




/* askQuestion asks a multiplication question, using the question parameter to say which
 * question is being asked.  It returns 1 if correct, 0 if incorrect.
 * @param: {integer} question (1 - questions)
 * @return: {integer} correct (0 or 1) or {boolean} correct
*/
function askQuestion(question){
    let a = Math.floor(Math.random() * (high - low + 1)) + low; 
    let b = Math.floor(Math.random() * (high - low + 1)) + low;
    let product = a * b;
    let equation = "Question " + question + ": " + a + " * " + b + " = ?";
    let answer = prompt(equation);
        if (answer == product){ 
            alert("Correct!")
            return true;
        }
        else{
            errors.push(a, b)
            alert("Sorry, but that's incorrect.")
            return false;
        }
}

/* Function showTable()
 * Display a multiplication table for a factor
 * Builds table line by line with a loop, then shows table * One line for each factor value. low to high 
 * @param: none
 * @return: none
 */

function showTables() {
    let another = confirm("Would you like to review on your own now?");
    let factor = prompt("Which factor would you like to see a table for?");
    table = "Times table for " + factor + "\n";
        for(let i = low; i <= high; i++){
            table += i + " * " + factor + " = " + factor*i + "\n";
        }
        alert(table);
    another = confirm("another table?");
    if(another) showTables();
}


function countErrors(){
    for(f=0; f < errors.length; f++){

    if (errorCount[errors[f]] === undefined) {
    errorCount[errors[f]] = 0;
  }
       errorCount[errors[f]]++;
    }
    // alert("TESTING: " + errorCount.toString());
    let frequency = 0;
    let factor = 0;
    for (let i = 0; i < errorCount.length; i++){
        if (errorCount[i] >= frequency){
            frequency = errorCount[i];
            factor = i;
        }
    }
    alert("The factor with the largest frequency was " + factor + ":" + frequency);
}
/* to-do later
* specify how many questions the student wants and what those should be, this should be done through assigning an existing GLOBAL variable
* setting where they can keep guessing until they've gotten the correct answer
*/



    // alert("Let's review factors you got wrong.");
    // for(let i = 0; i = errors.length; i++){
    //     let table = "Times table for " + errors[i] + "\n";
    //     for(let i = low; i <= high; i++){
    //         table += i + " * " +  + " = " + errors[i]*i + "\n";
    //     }
    //     alert(table);
    // }