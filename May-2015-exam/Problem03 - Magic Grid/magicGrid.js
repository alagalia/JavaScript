function solve(input){
    var msg = input[0].split('');
    var sum = Number(input[1]);
    var matrix = [];
    var x, y, x1,y1;
    var result='';

    for (var i = 2; i < input.length; i++) {
        var obj = input[i].split(' ');
        matrix.push(obj);
    }
    findNums();
    var key= x+y+x1+y1;


    for (i = 0; i < msg.length; i++) {
        var char = msg[i];
        if (i%2==-0){
            result +=String.fromCharCode(char.charCodeAt(0)+key);
        } else {
            result +=String.fromCharCode(char.charCodeAt(0)-key);
        }
    }

    console.log(result);


    function findNums(){
        for (var row = 0; row < matrix.length; row++) {
            for (var col = 0; col < matrix[row].length; col++) {
                var num1 = parseInt(matrix[row][col]);
                var col1 = col+1;
                for (var row1 = row; row1 < matrix.length; row1++) {
                    while (col1 < matrix[row1].length) {
                        var num2 = parseInt(matrix[row1][col1]);
                        if(num1+num2===sum){
                            x = row; y =col; x1 = row1; y1 = col1;
                        }
                        col1++;
                    }
                    col1 = 0;
                }
            }
        }
    }
}
solve (
    [
        'QqdvSpg',
        '400',
        '100 200 120',
        '120 300 310',
        '150 290 370'
    ]
);
