for (let i=0; i<5; i++){
    console.log("Hello");
}

let n=5;
n=n+2;
console.log(n);//7

n+=2;
console.log(n);//9

n++;// increment
console.log(n);//10
n--;// decrement
console.log(n);//9
console.log(n++);//9
console.log(n);//10

console.log("------------------");
for ( ; ; ){
    console.log("Hello");
    break;
}

for (let j=0; j<5; j+=1){
    console.log(j);
}

for (let j=2; j<2050; j*=2){
    console.log(j);
}