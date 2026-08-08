let temperanura = 18;
if (temperanura < 0) {
  console.log("Очень холодно");
} else if (temperanura >= 0 && temperanura < 20) {
  console.log("Холодно");
} else if (temperanura >= 20 && temperanura < 30) {
  console.log("Тепло");
} else {
  console.log("Очень жарко");
}

if (temperanura < 0) {
  console.log("Очень холодно");
} else if (temperanura < 20) {
  console.log("Холодно");
} else if (temperanura < 30) {
  console.log("Тепло");
} else {
  console.log("Очень жарко");
}

let number = 5;
console.log(number % 2 === 0 ? "Положительное число" : "Отрицательное число");

let age = 25;
let isAdult = age >= 18 ? "Совершеннолетний" : "Несовершеннолетний";
console.log(isAdult);

number = 5;
switch (number) {
  case 1:
    console.log("mondey");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
    case 5:
    console.log("friday");
    break;
    case 6:
    console.log("saturday");
    break;  
    case 7:
    console.log("sunday");
    break;  
    default:
    console.log("Unknown day");
}

number = 6;
switch (number) {
  case 1:
    console.log("mondey");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
    case 5:
    console.log("friday");
    break;
    case 6:  
    case 7:
    console.log("Weekend");
    break;  
    default:
    console.log("Unknown day");
}

let myName = "John";
let result = myName?? "Unknown";
console.log(result);

let price = 25.5;
console.log(price ?? "Price not available");

