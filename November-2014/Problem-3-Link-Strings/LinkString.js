function solve (input) {
    input.forEach(function (line){
        var result = {};
        var resultAsString='';
        line = line.replace(/%20/g,' ');//convert %20 to whitespace
        line = line.replace(/\+/g, ' ');//convert + to whitespace
        line = line.replace(/\s+/g, ' ');//convert all whitespace to one
        line = line.split(/[&|?]/g); // split to pairs
        line.forEach(function(pair){
            pair = pair.split('=');
            if (pair.length===2){
                var key = pair[0].trim();
                var value = pair[1].trim();
                if(!result[key]){
                result[key]=[];
                }
                result[key].push(value);
            }
        });
        for (var index in result) {
            //resultAsString+=index +"=[" + result[index]+"]";

            var valuesAsString = result[index].join(', ');
            resultAsString+=index +"=[" + valuesAsString+"]";
        }
        console.log(resultAsString);
    })
}

solve ([
        'foo=%20foo&value=+val&foo+=5+%20+203',
'foo=poo%20&value=valley&dog=wow+',
'url=https://softuni.bg/trainings/coursesinstances/details/1070',
'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
]);