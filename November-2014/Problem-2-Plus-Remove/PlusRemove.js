function solve (input) {
    var matrix = [];
    var matrixOrign = [];
    var bools = [];
    input.forEach(function(line){
        matrix.push(line.toLowerCase());
        matrixOrign.push(line);
        var boolLine = Array.apply(null, new Array(line.length))
            .map(function(){return (false)});
        bools.push(boolLine);
    })

    for (var row = 1; row < matrix.length-1; row++) {
        for (var col = 1; col < matrix[row].length-1; col++) {
            if (matrix[row][col] === matrix[row-1][col] &&
                    matrix[row-1][col] === matrix[row+1][col] &&
                    matrix[row+1][col] ===  matrix[row][col-1] &&
                    matrix[row][col-1]=== matrix[row][col+1]

            ){
                bools[row][col]  =true;
                bools[row-1][col]= true;
                bools[row+1][col]= true;
                bools[row][col-1] = true;
                bools[row][col+1] = true;
            }
        }
    }

    //clear matrix
    for (var row = 0; row < matrix.length; row++) {
        var lineForPrint ='';
        for (var col = 0; col < matrix[row].length; col++) {
            if(!bools[row][col]){
               lineForPrint+=matrixOrign[row][col];
            }
        }
        console.log(lineForPrint)
    }
}

solve ([
'ab**l5',
'bBb*555',
'absh*5',
'ttHHH',
'ttth'
]);