//Team MS Paint: Dennis Chen Imad Belkebir
//SoftDev pd7
//K #02: Connecting the Dots
//2/1/19

var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');
var clear = document.getElementById("clear");
clear.addEventListener('click', function(e){
    ctx.clearRect(0,0,canvas.width,canvas.height);
})
canvas.addEventListener('click', function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.beginPath();
    ctx.ellipse(x, y, 50, 50, 0, 0, 2 * Math.PI);
    ctx.moveTo(x,y);
    ctx.lineTo(x,y);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
})
