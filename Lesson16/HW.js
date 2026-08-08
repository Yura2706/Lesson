let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

numbers.unshift(0);
numbers.push(11);
console.log(numbers);

numbers.shift();
numbers.pop();
console.log(numbers);

numbers[2] = 99;
console.log(numbers);

console.log(numbers.length);


let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers1);

numbers1.splice(numbers1.length,0,11);
numbers1.splice(0,0,0);
console.log(numbers1);

numbers1.splice(0,1);
numbers1.splice(numbers1.length-1,1);
console.log(numbers1);

numbers1.splice(2,1,99);
console.log(numbers1);

console.log(numbers1.length);