function clock() {
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById('clock').innerHTML= time.toString();
}
setInterval('clock()', 1000);

