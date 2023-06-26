let display = document.getElementById("display");

function Value(value) {
  display.value += value;
}

function Operator(operator) {
  display.value += operator;
}

function hasil() {
  let result = eval(display.value);
  display.value = result;
}

function clearDisplay() {
  display.value = "";
}
