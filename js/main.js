var butBasicCalc = document.getElementById('basic-calc');
butBasicCalc.addEventListener('click', function() {
  var basicNum1 = document.getElementById('basic-num-1').value;
  var basicNum2 = document.getElementById('basic-num-2').value;
  var basicOp = document.getElementById('basic-operation').value;
  document.getElementById('basic-answer').setAttribute('class','show');
  document.getElementById('basic-answer-alert').innerHTML = parseFloat(basicNum1) + parseFloat(basicNum2);
});