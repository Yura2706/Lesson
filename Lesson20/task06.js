const cats = [
    {name: "Mr. Cat", age: 8, weight: 9.5, color:'white'},
    {name: "Garfield", age: 5, weight: 7, color:'brown'},
    {name: "Mr. Cat", age: 8, weight: 9, color:'white'},
    {name: "Whiskers", age: 2, weight: 5, color:'black'},
    {name: "Garfield", age: 5, weight: 7, color:'brown'},
];

const isHeavyCat = cats.some(cat => cat.weight > 6.0);
if (isHeavyCat) {
    console.log("Найден кот весом больше 6.0");
}else {
    console.log("Не найден кот весом больше 6.0");
}

const isKittenPresent = cats.some(cat=>cat.age <= 5);
if (isKittenPresent) {
    console.log("Найден кот старше 5");
}else {
    console.log("Не найден кот старше 5");
}   

const allCatsAreGrey = cats.every(cat => cat.color === 'grey');
if (allCatsAreGrey) {
    console.log("Все коты серые");
}else {
    console.log("Все коты не серые");
}

const allCatsAreFat = cats.every((cat) => cat.weight > 3.0);
if (allCatsAreFat) {
  console.log("Все коты весят больше 3 кг.");
} else {
  console.log("Не все коты весят больше 3 кг.");
}



