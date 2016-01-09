function calcCircleArea() {
    var radius = prompt('Enter a radius');
    var area = Math.PI*Math.pow(radius,2);
    document.writeln("r = " + radius+"; area = "+ area.toString());
}

calcCircleArea();