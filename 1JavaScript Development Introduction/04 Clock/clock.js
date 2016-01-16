function clock() {
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById('clock').innerHTML= time.toString();
}
setInterval('clock()', 1000);

window.setInterval(function(){
    var time =  new Date();

    document.getElementById("timer").innerText = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}, 1);