function solve (input) {
    var theDATE = new Date('1973, 05, 25');
    var fanYoungest = new Date('1973, 05, 25');
    var haterOldest = new Date('1973, 05, 25');
    var max = new Date('2015, 01, 01');
    var min = new Date('1900, 01, 01');

    var hasFan = false;
    var hasHater = false;
    input.forEach(function(line){
        line = line.split('.');
        var day = line[0];
        var month = line[1];
        var year = line[2];
        var date = new Date(year, month-1, day);
        if(date>min && date<max){
            if(date>=theDATE && date > fanYoungest){
                fanYoungest=date;
                hasFan=true;
            } else if (date<theDATE && date<haterOldest){
                haterOldest=date;
                hasHater=true;
            }
        }
    })
    if(hasFan){
        console.log('The biggest fan of ewoks was born on '+fanYoungest.toDateString());
    }
    if(hasHater){
        console.log('The biggest hater of ewoks was born on '+haterOldest.toDateString())
    }
    if (!hasFan && !hasHater){
        console.log('No result')
    }
}

solve([
    '22.03.2014',
    '17.05.1933',
    '10.10.1954'
]);