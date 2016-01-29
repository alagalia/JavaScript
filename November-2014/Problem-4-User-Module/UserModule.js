function solve(input) {

    var students = [];
    var trainers = [];
    var sortedStudents=[];
    var sortedTrainers =[];

    for (var index in input) {
        var criter = input[0];
        var studCriter = criter.split('^')[0];

        if (index>0){
            var obj = JSON.parse(input[index]);
            if(obj.role==="student"){
                var grades = obj['grades'];
                var avg = calcAverageGrade(grades);
                obj['averageGrade'] = avg;
                students.push(obj);

            }else {
                trainers.push(obj)
            }
        }

    }

    sortStudent(studCriter);
    sortTrainers();

    students.forEach(function(s){
        sortedStudents.push({
            id: s.id,
            firstname: s.firstname,
            lastname: s.lastname,
            averageGrade: s.averageGrade,
            certificate: s.certificate
        });
    });

    trainers.forEach(function(t){
        sortedTrainers.push({
            id: t.id,
            firstname: t.firstname,
            lastname: t.lastname,
            courses: t.courses,
            lecturesPerDay: t.lecturesPerDay
        });
    });

    function calcAverageGrade(grades){
        var result = Number(0);
        grades.forEach(function(grade){
            result+=parseFloat(grade);
        });
        result /= grades.length;
        return result.toFixed(2);
    }

    function  sortTrainers(){
        trainers.sort(function(a,b){
            if(a.courses.length !== b.courses.length) {
                return a.courses.length - b.courses.length;
            }
             return a.lecturesPerDay - b.lecturesPerDay;
        })
    }

    function sortStudent(studCriter){
        if(studCriter==='name'){
          students.sort(function(a,b){
                if(a.firstname !== b.firstname) {
                    return a.firstname.localeCompare(b.firstname);
                }
                return a.lastname.localeCompare(b.lastname);
            })
        } else {
            students.sort(function(s1, s2) {
                if (s1.level === s2.level) {
                    return s1.id - s2.id;
                }
                return s1.level - s2.level;
            });
        }
    }

    var result = {
        students : sortedStudents,
        trainers: sortedTrainers
    };
    console.log(JSON.stringify(result));

}




solve([
    'level^courses',
    '{"id":0,"firstname":"Hristiqn","lastname":"Petrov","town":"Sofia","role":"student","grades":["4.06","5.17"],"level":5,"certificate":false}',
    '{"id":1,"firstname":"Angel","lastname":"Petrov","town":"Sofia","role":"trainer","courses":["Java","JS OOP"],"lecturesPerDay":6}',
    '{"id":2,"firstname":"Gergana","lastname":"Nakov","town":"Sliven","role":"trainer","courses":["Java","JS OOP","SDA"],"lecturesPerDay":5}',
    '{"id":3,"firstname":"Angel","lastname":"Nakova","town":"Burgas","role":"trainer","courses":["Database","JS OOP","JS","C#","iOS","HTML/CSS"],"lecturesPerDay":6}',
    '{"id":4,"firstname":"Petq","lastname":"Nakova","town":"Petrich","role":"student","grades":["5.14"],"level":4,"certificate":true}',
    '{"id":5,"firstname":"Julieta","lastname":"Petrov","town":"Svishtov","role":"trainer","courses":["iOS","OOP","JS","C#","Java"],"lecturesPerDay":6}',
    '{"id":6,"firstname":"Ivan","lastname":"Ivanov","town":"Stara Zagora","role":"student","grades":["5.28","2.15","4.25","4.95"],"level":2,"certificate":true}',
    '{"id":7,"firstname":"Gergana","lastname":"Daskalov","town":"Sofia","role":"trainer","courses":["PHP","ASP.NET","SDA"],"lecturesPerDay":5}',
    '{"id":8,"firstname":"Qvor","lastname":"Dimitrov","town":"Sevlievo","role":"student","grades":["4.30","3.14","4.09","4.08","2.25"],"level":5,"certificate":true}',
    '{"id":9,"firstname":"Petq","lastname":"Nakov","town":"Gabrovo","role":"trainer","courses":["JS Apps","Java","JS","iOS","SDA","HTML/CSS"],"lecturesPerDay":9}',
    '{"id":10,"firstname":"Bobi","lastname":"Nakov","town":"Gabrovo","role":"student","grades":["3.80"],"level":1,"certificate":false}'
])