function calcCylinderVol(radius, height) {
    var volume = Math.PI* Math.pow(radius,2)*height;
    console.log(Math.round(volume*1000)/1000);
}

calcCylinderVol(2,4);
calcCylinderVol(5,8);
calcCylinderVol(12,3);