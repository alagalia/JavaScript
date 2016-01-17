/*Write a JavaScript function countDivs(html) to count the number of all DIVs in given HTML fragment passed as string. Write a JS program countOfDivs.js that invokes your function and prints the output at the console.
 */
'use strict';
function onlyUnique(elementFromArray, indexOfElementInArray, array) {
    return array.indexOf(elementFromArray) === indexOfElementInArray;//checks, if the given value is the first occurring.
    // If not, it must be a duplicate and will not be copied.
}
function countDivs(str){
    var match = str.match(/(<\w+.*?)/g),
        unique,
        result;
    if (match === null){
        result = 0;
    } else {

    unique = match.filter( onlyUnique );//function(element, index, array)
        result=unique.length;
    }
    document.getElementById('result').value=result;
};
