let number = 2;
do {
    console.log(number);
    number *= 2;
} while (number < 2050);

console.log("--------1----------");  

let fruits=["banana","apple","orange"];
for (let i=0; i<fruits.length; i+=1){
    console.log(fruits[i]);
}

console.log("---------2---------");  

let fruts=["banana","apple","orange"];
for (let i=0; i<fruts.length; i+=1){
    fruts[i]=fruts[i]+"!";
    console.log(fruts[i]);
}

console.log("---------3---------"); 

// let counter=0;
// while (counter<fruts.length){
//     console.log(`${counter+1}. ${fruts[counter]}`);
//     counter+=1;
// }

console.log("---------4---------"); 

for (let frut of fruts){
    console.log(frut);
    fruts="kiwi"
}
console.log(fruts);//kiwi