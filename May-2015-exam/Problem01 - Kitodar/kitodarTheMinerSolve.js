function solve (input) {
        var silver = 0;
        var gold = 0;
        var diamonds = 0;
        input.forEach(function(line){
                line = line.replace(/\s+/g,' ');
                var left = line.split('-')[0];
                var right =line.split('-')[1];
                if (left && right){
                        var mine = left.split(' ')[0].trim();
                        if(mine === 'mine'){
                                var ore = right.split(':')[0].toLowerCase().trim();
                                var quantityStr = right.split(':')[1];
                               if (quantityStr){
                                       var quantity = parseInt(quantityStr.match(/\d+/)[0]);
                                       addOre(ore, quantity);
                               }
                        }
                }
        });

        console.log('*Silver: '+silver);
        console.log('*Gold: '+gold);
        console.log('*Diamonds: '+diamonds);

        function addOre(ore, quantity){
                switch (ore){
                        case 'silver': silver += quantity; break;
                        case 'gold': gold += quantity; break;
                        case 'diamonds': diamonds += quantity; break;
                }
        }
}
//"mine {mineName} - {оre} : {quantity}".
//("mine - {оre} : {quantity}"
//solve (
//    [
//        'mine bobovDol - gold: 10"',
//        'mine medenRudnik - silver:22"',
//        'mine chernoMore - shrimps : 24"',
//        'gold: 50']
//);

solve(
    [
'mine mina - gold - 5',
'mine mina - silver - 5',
'mine mina - diamonds : 5',
'mine mina - gold:5'
    ]
)