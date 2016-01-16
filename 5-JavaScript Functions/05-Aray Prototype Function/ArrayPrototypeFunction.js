/*
 Write a JavaScript function removeItem(value) that accept as parameter a number or string. The function should remove all elements with the given value from an array. Attach the function to the Array type. You may need to read about prototypes in JavaScript and how to attach methods to object types. You should return as a result the modified array.
 */
'use strict';

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
var arr1 = ['hi', 'bye', 'hello' ];

Array.prototype.removeItem =  function(value){
    var filtered;
    filtered = this.filter(function (elem) {
        return (elem != value) || (typeof elem != typeof value);
    });
    return filtered;
};
var result = arr.removeItem(1);
var result1 = arr1.removeItem('bye');

console.log(result);
console.log(result1);