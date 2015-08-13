// Add an event listener to the calculate button on the basic calculator
var butBasicCalc = document.getElementById('basic-calc');
butBasicCalc.addEventListener('click', function() {
// Anonymous function that assigns the 2 numbers and operator to variables on click
  var basicNum1 = parseFloat(document.getElementById('basic-num-1').value);
  var basicNum2 = parseFloat(document.getElementById('basic-num-2').value);
  var basicOp = document.getElementById('basic-operation').value;
// Basic calculator logic
  var basicAnswer;
  switch(basicOp) {
    case "+" :
    basicAnswer = basicNum1 + basicNum2;
    break;
    case "-" :
    basicAnswer = basicNum1 - basicNum2;
    break;
    case "*" :
    basicAnswer = basicNum1 * basicNum2;
    break;
    case "/" :
    basicAnswer = basicNum1 / basicNum2;
    break;
  };
// Put the answer in the answer area and then reveal it
  document.getElementById('basic-answer-alert').innerHTML = basicAnswer;
  document.getElementById('basic-answer').setAttribute('class','show');
});
// Add an event listener to the calculate button on the trip calculator
var butTripCalc = document.getElementById('trip-calc');
butTripCalc.addEventListener('click', function() {
// Get all the values from the trip calc
  var tripDist = parseFloat(document.getElementById('trip-distance').value);
  var tripMPG = parseFloat(document.getElementById('trip-mpg').value);
  var tripCost = parseFloat(document.getElementById('trip-cost').value);
  var tripSpeed = parseFloat(document.getElementById('trip-speed').value);
//Crunch the math
  var tripAnswer = "Your trip will take " + (tripDist / tripSpeed).toFixed(2) + " hour(s) and cost $" + (tripDist * tripMPG * tripCost).toFixed(2) + ".";
//Show the answer!
  document.getElementById('trip-answer-alert').innerHTML = tripAnswer;
  document.getElementById('trip-answer').setAttribute('class','show');
});