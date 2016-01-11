function calcX () {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;

    var result;
    var dis = Math.pow(b,2)-4*a*c;
    if (dis < 0) {
        result = "No real rots";
    } else if (dis === 0) {
        var x = -(b/(2*a));
        result ="X = " + x;

    } else {
        var x1 = (-b-Math.sqrt(dis))/(2*a);
        var x2 = (-b+Math.sqrt(dis))/(2*a);
        result = "X1 = " + x1 +"\n" + "X2 = " + x2;

    }
    document.getElementById('result').value = result;
}
