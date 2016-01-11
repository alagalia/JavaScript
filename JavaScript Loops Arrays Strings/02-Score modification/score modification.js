var arr = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

//filter out all valid exam scores (between 0 and 400)
var filtered = arr.filter( function (num){
    return num>=0 && num<=400;
})

//downwards by removing 20% out of each score.
var reduced = filtered.map(function reduce (item) {
    return item -= item*0.2;
})

// sort ascending  order
reduced.sort(function(a, b){
    return a-b;
})
console.log(reduced);