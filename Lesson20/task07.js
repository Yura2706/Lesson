const cats = [
  { name: 'Whiskers', age: 2, color: 'gray' , weight: 4.5},
  { name: 'Fluffy', age: 5, color: 'white' , weight: 6.0},
  { name: 'Mittens', age: 3, color: 'black' , weight: 5.2},
  { name: 'Shadow', age: 4, color: 'gray' , weight: 5.8},
  { name: 'Simba', age: 1, color: 'orange' , weight: 3.9}
];

let sortedCats = cats.sort((cat1, cat2) => cat1.age - cat2.age);
console.log("Сортированные коты:", sortedCats);



const sortedCatsByName = cats.sort((cat1, cat2) => cat1.name.localeCompare(cat2.name));
console.log("Сортированные коты по имени:", sortedCatsByName);

const sortedCatsByAgeAndWeight = cats.sort((cat1, cat2) => {
    if (a.age === b.age) {
        return a.weight - b.weight;
    }
    return a.age - b.age;
});
console.log("Сортированные коты по возрасту и весу:", sortedCatsByAgeAndWeight);
