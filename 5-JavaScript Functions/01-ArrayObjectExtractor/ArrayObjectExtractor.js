/*
 Write a JavaScript function extractObjects(array). As a function argument you are given an array of different objects with different data types . Your task is to write the JavaScript function that filters out the Objects (all primitive data type objects and arrays are filtered) and returns a new array with the extracted elements.
 */
'use strict';
var input = [
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
];

function extractObjects(input) {
    var filtered=[];
    input.forEach(function(element){
        var type = typeof element;
        var isObject = (type === 'object');
        var isArray = element instanceof Array;
        if (isObject && !isArray) {
            filtered.push(element);
        }
    })
    print(filtered);
};

function print (filtered){
    filtered.forEach(function(element){
        console.log(element);
    })
};

extractObjects(input);