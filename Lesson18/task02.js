function sayHello() {
  console.log("Hello");
}

sayHello();
sayHello();
sayHello();

console.log("\n==========1==========\n");
greet("John");
greet("Mike");

function greet(name) {
  console.log(`Hello ${name}!`);
}

console.log("\n==========2==========\n");

const result = getsum(5, 7);
console.log(result);
console.log(getsum(10, 20));
console.log(getsum());

function getsum(a, b) {
  return a + b;
}

console.log("\n==========3==========\n");

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cities = ["Moscow", "London", "New York", "Paris", "Berlin"];
function getLastElement(array) {
  return array[array.length - 1];
}
console.log(getLastElement(number));
console.log(getLastElement(cities));

console.log("\n==========4==========\n");

console.log(generateArray(15));

function generateArray(size) {
  const result = [];
  for (let i = 1; i <= size; i++) {
    result.push(i);
  }
  return result;
}

console.log("\n==========5========\n");

function greting1(name="Anonimus"){
    return ` Hello ${name}!`
}
console.log(greting1(`Vasya`));
console.log(greting1());

function greting1(name="Anonimus"){
    return ` Hello ${name}!!!!!!`
}
console.log(greting1());

console.log("\n==========6========\n");

const greet1 = function greet1Func(name = "Anonimus"){
    return `Hello ${name}`
}
console.log(greet1(`Petya`),typeof greet1);

const greet2 = function(name = "Unnoun"){
    return `Hello ${name}`
}
console.log(greet2(`Kolya`));

console.log("\n==========7========\n");

const greet3 = (name = `Vasya`) => {
    let abc= "abc";
    return `Hello ${name} ${abc}`
}

console.log(greet3(`Olya`));

const greet4 = name => `Hello ${name} !!!`
console.log(greet4(`Tolya`));

console.log("\n==========8========\n");

const greet5 = () => console.log("Hello world");
greet5()