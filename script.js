var mistakes = [5,8,6,8,6,9,4,9,7,8,6,4];
function main() {
    showStats(4, 10);
}
function showStats(score, questions) {
let tables = true;
let more = "any";
if(score == questions){
  alert("Perfect!");
}
else{
  alert("You got " + score + " out of " + questions + " right.");
  let errors = questions - score;
  alert(showErrors(errors));
}
while(tables == true){
  tables = confirm("Would you like to study " + more + " tables?")
  if(tables == true){
     let factor = parseInt(prompt("Show table for which factor?"))
    showTable(factor);
    more = "more";
  }
}
}

function showErrors(errors) {
   let feedback = "Here were your errors: " + "\n";
  for(let error = 0; error < mistakes.length; error += 2){
    feedback += mistakes[error] + " x " + mistakes[error+1] + "\n";
  }
  feedback += "The highest factor with the most errors was " + statsAnalysis() + ". Study tables for it!"
return feedback;
}

function statsAnalysis() {

}

function showTable(factor){
alert(factor);
}
