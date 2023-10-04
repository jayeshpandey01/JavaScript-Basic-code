"use strict"

// bolleans and comparison opreration 
// bolleans are true or false

let num1 = 10;
let num2 = 20;
console.log(num1>num2);// show false we can aslo use (<=, >=, >, <, ==, ===, !=);

console.log(num1!=num2);

let num3 = 15;
let num4 = "10";
console.log(num3>num4); // show true because comparison operator are check value not data type means that they check both as a number not a string

console.log(num3!=num4)

num3 = 12;
num4 = "12";
console.log(num3 === num4); // show false because === are check data type also
console.log(num3 == num4);// does not check data type
console.log(num3!=num4);// does not check data type
console.log(num3!==num4);// in that it is also check data type also
