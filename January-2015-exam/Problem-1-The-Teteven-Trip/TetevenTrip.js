function solve(input){
        input.forEach(function(line){
        var line = line.split(' ');
                var car = line[0];
                var fuelType = line[1];
                var route = line[2];
                var lag = parseFloat(line[3]);
                var baseFuelConsumption = 10;
                var totalConsumption;
                var extraSnowConsumption;

                switch (fuelType){
                        case 'gas': baseFuelConsumption *=1.2; break;
                        case 'diesel': baseFuelConsumption *=0.8; break;
                }
                baseFuelConsumption += lag*0.01;
                extraSnowConsumption = 0.3*baseFuelConsumption;
                switch (route){
                        case '1':
                                totalConsumption = 110*(baseFuelConsumption/100);
                                totalConsumption += 10*(extraSnowConsumption/100);break;
                        case '2':
                                totalConsumption = 95*(baseFuelConsumption/100);
                                totalConsumption += 30*(extraSnowConsumption/100);break;
                }
                console.log(car+' '+fuelType+' '+ route+' '+ Math.round(totalConsumption));
        })
}


solve(
    ['BMW petrol 1 320.5',
        'Golf petrol 2 150.75',
        'Lada gas 1 202',
        'Mercedes diesel 2 312.54']

);