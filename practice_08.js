"use strict"
// truth and falsy statement

// false value

// function
function wordblank(myNoun, myadjactive, myVerb, myAdverb) {
    var result = "";
    result = "The " + myadjactive + myNoun + myVerb + "to the store "+ myAdverb
    return result;
}
console.log(wordblank("dog ","big ","ran ","quickly "))

console.log(wordblank("bike ","race ","ran ","fastest "))

// array
var ourArray = ["jayesh", 18]
console.log(ourArray[1])

// nested array
var nestedArray = [["jayesh",18], ["pandey", 18]]
// acess array
console.log(ourArray[0], ourArray[1])

// modify data in array
ourArray[1] = "pandey"
console.log(ourArray)

var multArray = [[10, 12, 13],[20, 5, 8],[30, 15, 16, 18],[8.56, 1.645, 10, 5],[[10,5,6], 12.64, [3.14, 6.28]]]
console.log(multArray.length); // it will print 4 buz it has four array inside that nested array are define

console.log(multArray[0][0]);
// it means that 0th index of multArray and 0th index of the nested index

console.log(multArray[3][1]);

console.log(multArray[4][2][1]);

// push()

var ourArrayValue = ["jayesh", "pandey", 18];
console.log(ourArrayValue.length) // length start with 1 2 3 4 5 6...
console.log(ourArrayValue)
ourArrayValue.push(["HOFEHS"])
console.log(ourArrayValue[3]) // indexing start with 0 1 2 3 4 5 6...
console.log(ourArrayValue.length) 

