function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "Error: division by zero!";
  }
  return a / b;
}
function calculator(num1,num2,operation){
    return operation (num1,num2);
}



console.log(calculator(10,5,add));        // 15
console.log(calculator(10, 5, subtract)); // 5
console.log(calculator(10, 5, multiply)); // 50
console.log(calculator(10, 5, divide));   //2
