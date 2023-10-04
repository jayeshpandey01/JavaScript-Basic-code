"use strict"

// data types(primitive data types)

let age = 22;
let firstName = "jayesh";
console.log(typeof age);
console.log(typeof firstName);

console.log(age + "")
age = age + "";
console.log(typeof age)// conver age as a number to string

// convert string to number
let num = +"jayesh";
console.log(num);
console.log(typeof num);// typeof are to check the type of the variable


// string concatenation
let string1 = "jayesh";
let string2 = "pandey";
let newString = string1 + string2;
console.log(newString)


let num1 = "10";
let num2 = "20";// integer are define as a string
let newNum = +num1 + +num2;// +num1 are use to conve string to integer
console.log(newNum);// convert number to string than then they add two given number