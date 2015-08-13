// Add an event listener to the calculate button on the basic calculator
var butBasicCalc = document.getElementById('basic-calc');
butBasicCalc.addEventListener('click', function() {
// Anonymous function that assigns the 2 numbers and operator to variables on click
  var basicNum1 = parseFloat(document.getElementById('basic-num-1').value);
  var basicNum2 = parseFloat(document.getElementById('basic-num-2').value);
  var basicOp = document.getElementById('basic-operation').value;
// Basic calculator logic

// Put the answer in the answer area and then reveal it
  document.getElementById('basic-answer-alert').innerHTML = basicNum1 + basicNum2;
  document.getElementById('basic-answer').setAttribute('class','show');
});