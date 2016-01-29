function solve (input) {
    var output = {};
    var filterInfo = input[input.length - 1];

    for (var row = 0; row < input.length - 1; row++) {
        var line = input[row].replace(/(\.+)/g, '.');
        line = line.split(/\.*\*\.*/g);
        var name = line[0];
        //if is last line

        var lagType = line[1];
        var isFood = line[2];
        var isDrink = line[3];
        var isFragile = line[4];
        var kg = parseFloat(line[5]);
        var transferredWith = line[6];

        if (!output[name]) {
            output[name] = {};
        }

        //if food if drink if other
        var type = '';
        if (isFood === 'true') {
            type = 'food';
        } else if (isDrink === 'true') {
            type = 'drink';
        } else {
            type = 'other';
        }


        output[name][lagType] = {
            kg: kg, fragile: isFragile==='true',
            type: type, transferredWith: transferredWith
        };
    }
    if (filterInfo === 'weight') {
        var outputKgSort = {};

        Object.keys(output).forEach(function (key) {

            outputKgSort[key] = {};

            var a  = Object.keys(output[key]).sort(function (a, b) {
                return output[key][a].kg - output[key][b].kg;
            });

            a.forEach(function (value) {
                outputKgSort[key][value] = output[key][value];
            })
        });
        console.log(JSON.stringify(outputKgSort))
    }else if (filterInfo === 'luggage name') {
        var outputNameSort = {};
        Object.keys(output).forEach(function(key) {
            outputNameSort[key]={};
            var sortedInnerKeys = Object.keys(output[key]).sort();

            sortedInnerKeys.forEach(function (innerkey) {
                outputNameSort[key][innerkey] = output[key][innerkey];
            })
        });
        console.log(JSON.stringify(outputNameSort));
    } else {
        console.log(JSON.stringify(output));
    }
}

solve([

'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
'luggage name'
]);