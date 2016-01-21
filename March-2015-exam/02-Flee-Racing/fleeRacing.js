function solve(input) {
    var jumpsAllowed = Number(input[0]);
    var trackLength = Number(input[1]);
    var fleas=[];
    var i;
    var winner = undefined;

    for (i = 2; i < input.length; i++) {
        var line = input[i].split(',').filter(function(elem){return elem});
        var flea = {
            name: line[0],
            jumpDistance : Number(line[1]),
            position: Number(0),
            sign: line[0].toUpperCase().charAt(0),
            index : i-2
        };
        fleas.push(flea);
    }

    for (i = 0; i < jumpsAllowed; i++) {
        fleas.every(function(flea){
            flea.position += flea.jumpDistance;
            if (flea.position >= trackLength-1) {
                winner = flea;
                flea.position = trackLength-1;
                return false;
            } else {
                return true;
            }
        });
        if (!winner) {
            var maxPositionInTrack = 0;
            fleas.forEach(function(flea) {
                if(flea.position >= maxPositionInTrack){
                    winner = flea;
                    maxPositionInTrack = flea.position;
                }
            })
        }
    }

    printResult(fleas);

    function printResult(){
        var audience = Array.apply(null, new Array(trackLength+1)).join('#');
        console.log(audience);
        console.log(audience);
        fleas.forEach(function(elem) {
            var status = Array.apply(null, new Array(trackLength)).map(function(){return ('.')});
            status[elem.position]= elem.sign;
            status = status.join('');
            console.log(status);
        })
        console.log(audience);
        console.log(audience);
        console.log('Winner: '+winner.name);
    }
}

solve([
    '10',
    '19',//length of track
    'angel, 9',
    'Boris, 10',
    'Georgi, 3',
    'Dimitar, 7'
])

solve([
   '3',
   '5',
   'cura, 1',
   'Pepi, 1',
   'UlTraFlea, 1',
   'BOIKO, 1'
])