let a = 3.14159;
let res = Math.floor(a);
console.log(res); //3
a = -3.999;
res = Math.floor(a);
console.log(res); //-4

a = 1.25;
res = Math.round(a);
console.log(res); //2

a = 1.11;
res = Math.round(a);
console.log(res); //1

a = -1.77;
res = Math.round(a);
console.log(res); //-2

a = 1.49;
res = Math.round(a);
console.log(res); //1

res = Math.PI;
console.log(res);

console.log(Math.random()); // [0,1)

a = 1.25;
res = Math.trunc(a);
console.log(res); //1

a = -1.95;
res = Math.trunc(a);
console.log(res); //-1

res = Math.PI;
res = res.toFixed(2);
console.log(res, typeof res);

// string

const str = "Hello java script!!!";
//           0      7 9
console.log(str.length);

res = str.charAt(19);
console.log(res);
res = str[19];
console.log(res);
for (s of str) {
  console.log(s);
}

res = str.indexOf("a");
console.log(res);

res = str.lastIndexOf("a");
console.log(res);

res = str.substring(4, 8); // s 4...8
console.log(res); // o Ja

res = str.slice(-4,-1);
console.log(res);

