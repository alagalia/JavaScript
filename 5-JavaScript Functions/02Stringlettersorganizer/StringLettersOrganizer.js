/*
 Write a JavaScript function sortLetters(string, boolean) that gets as an input a string and a boolean. The function sorts all letters in the string in alphabetical order and returns the newly formed string. The sorting is ascending if the boolean is true otherwise the sorting is in descending order.
 */
'use strict';

function sortLetters (someString, someBool){
    var array = someString.split("");
    array.sort(function(a,b){
       if(someBool){
           return a.toLowerCase() > b.toLowerCase();
       } else {
           return a.toLowerCase() < b.toLowerCase();
       }
    });
    console.log(array.join(''));
}

sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false);