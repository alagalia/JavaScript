function solve(input){
    var goshko = {
        row :0,
        col :0,
        eat : {
            "&" : 0, //lettuce
            "*" : 0, //cabbage
            "#" : 0, //turnip
            "!" : 0, //carrots
            "wall hits" : 0

        }
    };

    var directions = input[0].split(',');
    var visitedCells =[];
    var matrix = [];
    var currentCel='';

    for (var i = 1; i < input.length; i++) {
        var line = input[i].split(',');
        matrix.push(line);
    }

    for (var step = 0; step < directions.length; step++) {
        switch (directions[step].trim()) {
            case 'right':
                if(goshko.col+1<matrix[goshko.row].length){
                    currentCel = matrix[goshko.row][++goshko.col];
                    visitedCells.push(collectVegetables(currentCel));
                } else {
                    goshko.eat['wall hits']++;
                }
               break;
            case 'up':
                if(goshko.row-1>=0){
                    currentCel = matrix[--goshko.row][goshko.col];
                    visitedCells.push(collectVegetables(currentCel));
                } else {
                    goshko.eat['wall hits']++;
                }
                break;
            case 'down':
                if(goshko.row+1<matrix.length){
                    currentCel = matrix[++goshko.row][goshko.col];
                    visitedCells.push(collectVegetables(currentCel));
                } else {
                    goshko.eat['wall hits']++;
                }
                break;
            case 'left':
                if(goshko.col-1>=0){
                    currentCel = matrix[goshko.row][--goshko.col];
                    visitedCells.push(collectVegetables(currentCel));
                } else {
                    goshko.eat['wall hits']++;
                }
                break;
        }
    }

    function collectVegetables(str){
        str = str.replace(/\{([!*&#])\}/g, function(match, group) {
            goshko.eat[group]+=1;
            return '@';
        } );
        return str.trim();
    }

    console.log(JSON.stringify(goshko.eat));
    if (visitedCells.length!=0){
        console.log(visitedCells.join('|'));
    } else {
        console.log('no');
    }
}

solve(
    ['right, up, up, down',
    'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj',
    'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip',
    'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne']
)