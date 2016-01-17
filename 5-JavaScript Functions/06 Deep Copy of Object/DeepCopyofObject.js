/*
 Write a JavaScript function clone(obj) that accepts as parameter an object of reference type.  The function should return a deep copy of the object. Write a second function compareObjects(obj, objCopy) that compare the two objects by reference (==) and print on the console the output given below.
 */
'use strict';

var a = {name: 'Pesho', age: 21}
var b = JSON.parse(JSON.stringify(a)); // a deep copy

function compareObjects(a, b){
    console.log(a +"=="+b +" --> " + (a===b));
}

compareObjects(a, b);

var c = {name: 'Pesho', age: 21};
var e = c;
compareObjects(c, e);

for (var i in arr) {

}