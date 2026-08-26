
// 1.

// a) Создайте несколько объектов-продуктов. В каждом объекте 
// должно быть поле name (название), description(описание), price(цена), 
// info (функция, которая формирует строку вида:
// `товар: notebook lenovo thinkpad; цена: 1283 описание: cpu intel core7, ram:16gb ...`

// b) создайте конструктор для создания объектов-товаров. 
// Создайте несколько товаров

// с) Создайте массив из товаров. Напишите функцию, которая
// выводит в консоль информацию о всех товарах в виде:
// ```
// Tовар 1
//     name: notebook lenovo thinkpad
//     price: 1283
//     description: .....
//     info: ....
// ```  
// т.е. `поле: значение` При этом: поля, которые являются 
// функциями, нужно выводить результат работы функции 
// (не текст функции)

const product1 = {
    name: 'notebook lenovo thinkpad',
    price: 1283,
    description: 'cpu intel core7, ram:16gb',
    info() {
        return `Prodact: ${this.name}; Price: ${this.price}; description: ${this.description}`;
    }
}

const product2 = {
  name: 'smartphone samsung galaxy',
  price: 850,
  description: 'display 6.7, 128gb, camera 50mp',
  info() {
    return `Prodact: ${this.name}; Price: ${this.price}; description: ${this.description}`;
    }
};

function product(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.info = function () {
        return `Prodact: ${this.name}; Price: ${this.price}; description: ${this.description}`;
    }
}


const products = [product,product1, product2,];
console.log(products);




