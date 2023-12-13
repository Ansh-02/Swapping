function swapVariables() {
  var firstVariable = document.getElementById("firstVariable").value;
  var secondVariable = document.getElementById("secondVariable").value;

  var temp = firstVariable;
  firstVariable = secondVariable;
  secondVariable = temp;

  var resultElement = document.getElementById("result");
  resultElement.textContent =
    "Swapped Variables: Variable 1 = " +
    firstVariable +
    ", Variable 2 = " +
    secondVariable;
}
