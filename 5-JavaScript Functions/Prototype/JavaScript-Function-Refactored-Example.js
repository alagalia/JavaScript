String.prototype.repeat = function stringRepeat(count) {
    var result='';
    for (var i = 0; i<count ; i++) {
        result +=this[0];
    }
    return result;
}

function solve(input) {
    for (var i=0; i<input/2; i++) {
        var line = '.'.repeat(i)+'*'.repeat(input-i*2)+'.'.repeat(i);
        console.log(line);
    }
    for (var i=2; i>=0; i--) {
        var line = '.'.repeat(i)+'*'.repeat(input-2*i)+'.'.repeat(i);
        console.log(line);
    }
};
solve(7);