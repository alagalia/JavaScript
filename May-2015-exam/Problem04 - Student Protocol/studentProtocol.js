function solve(input){
    var output = {};
    input.forEach(function(line){

        var studentInfo = line.replace(/\s+/g, ' ').split('-');
        var name = studentInfo[0].trim();
        var exam = studentInfo[1].split(':')[0].trim();
        var score = parseInt(studentInfo[1].split(':')[1].trim());

        if(score<= 400){
            //проверка дали в масива има такъв изпит, ако няма го правим с празен масив
            if (!output[exam]) {
                output[exam] = [];
            }

            //проверка дали съществува студент с такова име на този изпит
            var studentExist = output[exam].filter(function(stud){
                return stud.name===name})[0]; //връща масив затова с индех [0]
            if(!studentExist){
                var studentRow = Student(name, score, 0);
                output[exam].push(studentRow);//и ако няма това име в този изпит го добавяме в масива
            } else {
                studentExist.makeUpExams++;
                if(studentExist.result < score){ //иначе променяме по условие
                    studentExist.result = score;
                }
            }
        }
    });
    for ( var elem in output){
        output[elem].sort(function(a, b){
            if(a.result !== b.result) {
                return b.result - a.result;//descending order by results
            }
            if(a.makeUpExams !== b.makeUpExams) {//ascending order by number of makeUps
                return a.makeUpExams - b.makeUpExams;
            }
            return a.name.localeCompare(b.name);//alphabetically order

        });
    }
    console.log(JSON.stringify(output));

    function Student (name,  score, makeup){
        return {
                name : name,
                result : score,
                makeUpExams: makeup
        }
    }
}
solve([
'Mila Kunis - C# : 200',
'Mila Kunis - Java : 100',
'Mila Kunis                          -PHP : 350',
'Mila Kunis-HTML & CSS:400',
'Jessica Clement - C# : 200',
'Jessica Clement - Java : 100',
'Jessica Clement - Java : 100',
'Jessica Clement-PHP:300'
]);

//solve(
//    [
//'Simon Cowell - PHP : 100',
//'Simon Cowell-PHP: 500',
//'Peter Jackson - PHP: 350',
//'Simon Cowell - PHP : 400'
//]
//);