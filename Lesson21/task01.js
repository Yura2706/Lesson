const number = [4,2,1,4,5,6,7,8,65,43,23,12,34,56,78,90,98,76,54,32,10,2,1,4];
console.log('---sort---')
console.log(number.sort((a,b)=>a-b));

number.sort((a,b)=>Math.random()-0.5);
console.log(number);

console.log('---findIndex---')

function myFindIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return i;
        }
    }
    return -1;
}
let res= myFindIndex(number, (item) => item === 22);
console.log(res);
function checkEven(item) {
    return item % 2 === 0;
}

console.log('========CheckEven========');
console.log(number);
let res2 = myFindIndex(number, checkEven);
console.log(res2);
console.log('========ObjectsSort========');
const persons = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 }
];
persons.sort((a, b) => {
    if (a.age === b.age) {
        return a.name.localeCompare(b.name);
    }
    return a.age - b.age;
});
console.log(persons);