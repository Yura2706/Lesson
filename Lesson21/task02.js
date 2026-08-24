const arr = ['one', 'two', 'three', 'four', 'five', 'six', 
    'seven', 'eight', 'nine', 'ten','one', 'two', 'three', 
    'four', 'five'];
console.log("========IndexOf, LastIndexOf========");
console.log(arr.indexOf('three'));
console.log(arr.lastIndexOf('three'));
console.log("========includes========");
console.log(arr.includes('three'));
console.log(arr.includes('eleven'));
console.log("========find, findIndex========");
console.log(arr.find((item) => item.toLowerCase() === 'three'));
console.log(arr.findIndex((item) => item.toLowerCase() === 'three'));
console.log(arr.find((e, index) => index % 2 === 0 && e.length > 4));
console.log(arr.filter((e, index) => index % 2 === 0 && e.length > 4));
console.log("========ObjArray========");
const persons = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 }
];


console.log("========ForEach========");

persons.forEach((p) => console.log( `Name: ${p.name}, Age: ${p.age}`));
res = persons.forEach((p,i) => 
    console.log( `${i+1}: Name: ${p.name}, Age: ${p.age}`));
console.log(res);//undefined