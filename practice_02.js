// let keyworld
// let also a variable 


/*
storing value with assignment operator 

*/

/*
This is 
a multiline commment

Data type in javascript:
undefine, null, boolean, string, symbol, number and object

variable:
there are three way to decal a variable 
1. var ==> var use in whole program, it will change after declaring a variable
2. let ==> only use in the scope where we decalare that, it will also change after declaring a variable
3. contant ==> constant use for definning a constant value in javascript, it never change
*/

var myName = "Jayesh";
myName = 18;
console.log(myName);

let ourname = "Jayesh pandey";
ourname = "Pandey Jayesh";
console.log(ourname);

// assigment operator
var age = 18;
console.log(age)

ourname = age;
console.log(ourname)
// in that ourename assign value is equal to the age

const constantValue = "hello constant";
console.log(constantValue);
// constantValue = "hello jayesh" // it's show error

// initialize value
var value = 10
console.log(value)

// uninitialize value 
var newvalue;
newvalue = " This is new value";

var stringAndNum = value + newvalue;
console.log(stringAndNum)

// increament number
value++;
console.log(value)
// value of the "value = 11" because of the increment it means that "value = value + 1"

// let's decrement the value of "value"
value--;
console.log(value)
// value of the "value = 10" because of the decrement it means that "value = value - 1"

// decimal number float, double 

var floatInJs_01 = 5.0789;
console.log(floatInJs_01);

var floatInJs_02 = 3.14;
console.log(floatInJs_02)

// multiplication of the two float number in javascript is same as a integer
console.log(floatInJs_01 * floatInJs_02)


// finding reminder
var remValue1 = 11;
var remValue2 = 5;
console.log(remValue1%remValue2);
