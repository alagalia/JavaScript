var arr = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];
var frequentNum;

// filters only numbers
var nums = arr.filter(function(num) {
    return !isNaN(num) &&
        parseInt(Number(num)) == num &&
        !isNaN(parseInt(num, 10));
})

// sort descending  order
nums.sort(function(b, a) {
    return a - b;
});

frequent(nums);

// Find the most frequent number in array
function frequent (nums) {
    var max=1;
    var counter=1;
    for (var i = 0; i < nums.length-1; i++) {
        if(nums[i] == nums[i+1]){
            counter++;
            if (counter>max){
                max=counter;
                frequentNum=nums[i];
            }
        } else {
            counter=1;
        }
    }
}


console.log("Min number: "+Math.min.apply(Math, nums));
console.log("Max number: "+Math.max.apply(Math, nums));
console.log("Most frequent number: "+ frequentNum);
console.log(nums);