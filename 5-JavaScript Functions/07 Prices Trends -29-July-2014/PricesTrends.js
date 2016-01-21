function solve(args) {
    var numbers = args.map(Number);
    var prevValue = numbers[0].toFixed(2);
    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    var status;

    numbers.forEach(function(line){
        var currentValue = line.toFixed(2);
        if(currentValue<prevValue) {
            status = 'down.png';
        } else if (currentValue>prevValue) {
            status='up.png';
        } else {
                status='fixed.png';
        }
        prevValue = currentValue;
        console.log('<tr><td>' + currentValue + '</td><td><img src=\"' + status + '\"/></td></td>')
    });
    console.log('</table>');
}

//solve([
//    '36.33',
//    '36.5',
//    '37.019',
//    '35.4',
//    '35',
//    '35.001',
//    '36.225'
//]);
