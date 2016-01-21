function solve (args) {
    var resultCoins=0;
    args.forEach(function(line){
        var items = line.split(' ');
        var isCoin = (items[0].toLowerCase()==='coin');
        var isNum = !isNaN(items[1]);
        if ( isCoin && isNum ) {
            var isZeroFraction = (Number(items[1]) %1 === 0);
            var isPozitive = (Number(items[1])>0);
            if(isZeroFraction  && isPozitive){
                resultCoins +=parseInt(items[1]);
            }
        }
    })
    var gold = parseInt(resultCoins /100);
    var silver = parseInt((resultCoins % 100)/10);
    var bronze = parseInt((resultCoins % 100) %10);
    console.log('gold : ' + gold);
    console.log('silver : ' + silver);
    console.log('bronze : ' + bronze);
}

solve(['COIN 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1']);