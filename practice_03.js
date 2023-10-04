"use strict"

// j a y e s h
// 0 1 2 3 4 5

let firstName = "jayesh";
console.log(firstName[1]);

console.log(firstName.length);
// print whole string length
console.log(firstName[firstName.length-1]) 
// output will be last number 
// if we put space on string then they also count in the string 

let name = "   Pandey   ";
console.log(name.length)
name.trim();
console.log(name);
// not work buz string are immutable
console.log(name.length);

let newname = name.trim();
console.log(newname);
// print whole length of the string after trim() means remove extra space on the string
//or

name = name.trim();
console.log(name);

// uppar case

console.log(name.toUpperCase()) 
// note that toupparcase not work

console.log(name.toLowerCase());

let newString = name.slice(0,4); 
// slice opperator use for range 
console.log(newString);
console.log(name.slice(1));
console.log(name.slice(-1));
