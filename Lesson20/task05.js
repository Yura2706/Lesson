const cats = [
    {name: "Mr. Cat", age: 8, weight: 9, color:'white'},
    {name: "Garfield", age: 5, weight: 7, color:'brown'},
    {name: "Mr. Cat", age: 8, weight: 9, color:'white'},
    {name: "Whiskers", age: 2, weight: 5, color:'black'},
    {name: "Garfield", age: 5, weight: 7, color:'brown'},
];

const totalWeight = cats.reduce((acc, curr) => acc + curr.weight, 0);
console.log("Сумма весов котов:", totalWeight);

const catWithAge2 = cats.find(cat => cat.age === 2);
// console.log("Кот возрастом 2 года:", catWithAge2);
if (catWithAge2) {
  console.log("Кот возрастом 2 года:", catWithAge2);
}else {
  console.log("Кот возрастом 2 года не найден.");
};
console.log("Кот возрастом 2 года:", 
    catWithAge2 ? catWithAge2 : "не найден.");