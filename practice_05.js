"use strict"

let age = 18;
let name = "jayesh";

let info = "my name is " + name +" and my age is "+ age;
console.log(info);

info = `my name is ${name} and my age is ${age}`; //${} are use define a string or integer inside the whole string nut we want to use (``) to writting a string
console.log(info);

let firstName;
console.log(firstName);
firstName = "jayesh";
console.log(typeof firstName, firstName);

firstName = null;
console.log(firstName);
console.log(typeof firstName);
console.log(typeof null); // null is a data type it is a bug on javascript 
 
// BigInt in 2020
let myNumber = 123;
console.log(myNumber);

// check how many digit number we can store 
console.log(Number.MAX_SAFE_INTEGER);

let num1 = BigInt(1651984634161);// without using n
let num2 = 156463135n;// with using n 

console.log(num1 + num2)

// let num3 = 10;
// let num4 = 20n;
// console.log(num3 + num4); // show error because BigInt number add with only BigInt number  

