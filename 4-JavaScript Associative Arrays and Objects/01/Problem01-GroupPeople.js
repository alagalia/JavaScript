/*
 Write a JavaScript function groupBy('criteria') that groups an array of people by age, first or last name. Create a Person constructor to add every person in the person array. The groupBy('criteria') function must return an object, with keys – the groups (age, firstName and lastName) and values – arrays with people in this group. Print on the console every entry of the returned object. Use function overloading (i.e. just one function).
 You may need to find how to use constructors
 */
var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Johns", 57),
    new Person("Jon", "Skeet", 38)
];
function Person (firstName, lastName, age) {
    return {
        firstName : firstName,
        lastName : lastName,
        age : age,
        toStr : function() {
           return this.firstName+' '+this.lastName +'(age '+this.age+')';
        }
    }
}
function printResult(result) {
    for (var i in result) {
        console.log('Group '+ i + ' : '+ '['+ result[i].join(', ') + ']');
    }
}


function groupBy(myKey) {
    var result = [];
    var key;
    people.forEach(function (element) {
        key = element[myKey];
        if (result[key] == undefined) {
            result[key] = [];
        }
        result[key].push(element.toStr());
    });
    printResult(result);
}

groupBy('age');
console.log('-----------------------------');
groupBy('firstName');
console.log('-----------------------------');
groupBy('lastName');
