/* MULTIPLICATION TABLES
 * FLOWCHART:https://lucid.app/lucidchart/3e0bd150-cafd-4a4b-a703-a1919eafbd7a/edit?page=GeKRoDTH-sii#
 */

/* Global Variables 
 * Set default values for low and high factors
 * Initialize mistakes array
 */
var high = 9;
var low = 3;


/* Function main() THIS REPLACES askQuestions(
 * Calls setup to change default values
 * Calls askQuestion with question number argument
 * Keeps score based on returned values from askQuestion
 * Calls showStats, which calls showTable 
 * @param: none
 * @return: none
 */
function main(){
    let score = 0;
    let questions = setUp();
    for (let question = 1; question <= questions; question++ ) {
        score += askQuestion(question);
    }
    showStats(score,questions);
}


/* Function setUp()
 * Asks if user wants to keep defaults for low, high, questions. 
 * If not default, prompts user to provide these values
 * @param: none
 * @return: {integer} questions
 */
function setUp(){
    let questions = 5;
    let defaults = confirm("Keep defaults?");
    if (defaults == false) {
        low = changeVar("low");
        high = changeVar("high");
        questions = changeVar("questions");
    }
    else alert("Defaults kept");
    return questions;
}

/* Function changeVar(variable)
 * Asks user which value to change variable to
 * Parses value as integer
 * @param: variable
 * @return: {integer} value 
 */
function changeVar(variable){
    let value = prompt("Choose your " + variable + " value");
    value = parseInt(value);
    return value;
}

/* Function askQuestion(question) 
 * Asks a multiplication question: 2 factors between low and high ranges
 * Provides feedback (correct?), returns true if correct, false if not 
 * Adds missed factors to mistakes array.
 * @param: {integer} question 
 * @return: boolean value 
 */
function askQuestion(question){
    let a = Math.floor(Math.random()*(high-low+1))+low;
    let b = Math.floor(Math.random()*(high-low+1))+low;
    let product = a * b;
    let equation = "Question " + question + ": " + a + " * " + b + " = ?";
    let answer = prompt(equation);
    if (answer == product) {
        alert("Correct!");
        return true;
    }
    else {
        alert("Incorrect.");
        return false;
    }
}

/* Function showStats()
 * Provides feedback on total correct out of total asked. 
 * If perfect score, displays "Perfection Badge"
 * If not perfect, displays how many right out of questions
 * Then calls showErrors sending number of errors as parameter. 
 * While user wants to study tables, calls showTable for a factor.
 * Prompt changes from "any tables" to "more tables" 
 * @param: score, questions
 * @return: none
 */
function showStats(score, questions){
    let tables = true;
    let factor = 0;
    let more = "any";
    if (score == questions) alert("Perfection badge!");
    else{
        alert("You got " + score + " out of " + questions + " right.");
    }
    while (tables == true) {
        let tables = confirm("Do you want to study " + more + " tables?");
        if (tables == true) {
            factor = prompt("Show table for which factor?");
            showTable(factor);
            more = "more";
        }
    }
}


/* Function showTable(factor)
 * Display the table for the factor passed as a parameter
 * Builds table line by line with a loop, then shows table 
 * One line for each factor value, low to high 
 * @param: factor
 * @return: none
 */
function showTable(factor){

}

/* Function showErrors(errors)
 * Provides feedback on errors by showing pairs of factors from the mistakes array (global).
 * statsAnalysis() shows the highest most frequent factor in mistakes[]  
 * @param: errors
 * @return: none
 */
function showErrors(errors){

}

