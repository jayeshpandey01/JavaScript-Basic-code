"use strict"
// "use strick" are use to does not make mistake in code like (line:29)

console.log("hello world");
// console.log("...") 
// are use to print string or object
console.log('hello world');
console.log(`hello world`);

// we can write string in three following type
// printing the data on the variable we can-not use any string sign like ("",'',``)

// If we not semicolon(';') then also code will be run and does not show error
console.log("Not using semicolon")
//but it is wrong way to represent the code

// variable
// variable are use to store information like string,integer,boolean,etc
// we can that information later also
// decalare variable by use var 

var Myname = "jayesh";
// var are the variable in javascript and name are are data on the variable(means variable ka name decale kiya ja raha hai by using 'name')
// In the name of the variable myname and Myname are the two different variable name 
console.log(Myname);

// Rule for naming variable
// we cannot start with number
// eg 1value (invalid); but value1 (valid)
// var 1value = "hello world";
// console.log(1value); //show error
// we can use underscore or dollor sign in starting but we cannot use (!, @, #, %, ^, &, *) or
// space (my name) show error instant of that we can use came case writting (myName)
var _value = "helllo world";
console.log(_value);
//or
var value_1 = "hello world";
console.log(value_1);

var $value = "hello world";
var value$1 = "hello world";
console.log($value + " "+ value$1);


var age = "18";
// for integer also we can use var 
console.log(age);

// by getting power value of any number 
console.log(age **8)

name = "kanishk";
age = 500;

// surname = "pandey"
//show error because var are not use on that

console.log(name +" "+ age);
