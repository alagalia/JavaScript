/*
 Write a JavaScript function findYoungestPerson(array) that accepts as parameter an array of people, finds the youngest person that has a smartphone and returns his full name. Write a JS program youngestPerson.js to execute your function for the below examples and print the result at the console.
 */
'use strict';

var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

findYoungestPerson(people);

function findYoungestPerson(array) {
    var youngest = {firstname:'', lastname: '', age: Number.MAX_VALUE};
    array.forEach(function(elem) {
        if (elem.age<youngest.age && elem.hasSmartphone){
            youngest.age=elem.age;
            youngest.firstname=elem.firstname;
            youngest.lastname=elem.lastname;
        }
    })
    console.log('The youngest person is '+  youngest.firstname+' '+youngest.lastname);
}

