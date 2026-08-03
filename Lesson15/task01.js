// alt+shift+f - форматирование кода
//alt+shift+down - дублирование строки
//alt+shift+up - перемещение строки вверх
//ctrl+shift+f - поиск по проекту
//ctrl+shift+r - поиск и замена по проекту
//ctrl+shift+s -save all
//ctrl+shift+e - открыть проводник
//ctrl+shift+` - открыть терминал
//Ctrl+F5 - run without debugging

let user ={
    name: 'John',
    age: 30,
    isStudent: true,
    email: 'john@test.com',
    city: 'New York',
    "is a developer": true
}

console.log(user.name);
console.log(user.age);
console.log(user.isStudent);
console.log(user.email);
console.log(user.city);
console.log(user);

console.log(user["name"], user["age"], user["isStudent"]);

let fieldname = "age";
console.log(user[fieldname]);

user["second name"] = "Doe"; 
console.log(user["second name"]);

let userjson = JSON.stringify(user);
console.log(userjson);
console.log(typeof userjson);
console.log(userjson.name); // undefined
console.log(userjson["name"]); // undefined

let productjson = '{"name": "Laptop", "price": 1200, "isAvailable": true}';
let product = JSON.parse(productjson);
console.log(product);
console.log(typeof product);
console.log(product.name);




















