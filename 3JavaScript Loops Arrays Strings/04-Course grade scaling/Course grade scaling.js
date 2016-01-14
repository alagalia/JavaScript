/* You are given a JSON string containing an array of Students (Objects). Your task is to scale their scores upwards by increasing them with 10%. After that you should add a field that shows whether the student has passed or failed the exam (passed exam means 100 or more points at the exam). Finally you should filter out only the students that have passed the exam and print them out sorted alphabetically.
  */

var arr  =  [
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
]

//scale scores by increasing them with 10%.
//add a field that shows whether the student has passed or failed the exam
arr.map(function(obj){
    obj.score += obj.score*0.1;
    obj.hasPassed = (obj.score>=100);
});

//filter out only the students that have passed the exam
var filtered = arr.filter(function(obj){
    return obj.hasPassed;
});

//sorted alphabetically
var sorted = filtered.sort(function(a,b) {
    var nameA = a.name;
    var nameB = b.name;
    return nameA > nameB;
})

console.log (sorted);