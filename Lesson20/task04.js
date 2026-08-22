const numbers = [1, 5, 2, 9, 4];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Сумма чисел:", sum);

const multiply = numbers.reduce((acc, curr) => acc * curr, 1);
console.log("Произведение чисел:", multiply);

const multiply2 = numbers.reduce((acc, curr) => acc * curr);
console.log("Произведение чисел:", multiply2);

console.log("----Конкотинация----");

const concat = numbers.reduce((acc, curr) => acc + curr, "");
console.log("Строка с числами:", concat);

const concat2 = numbers.reduce((acc, curr) => acc + curr);
console.log("Строка с числами:", concat2);

console.log("----среднее значениче----");

const avgResult=numbers.reduce((acc,n) => acc + n, 0)/numbers.length;
console.log("Среднее арифметическое всех элементов массива:", avgResult);


