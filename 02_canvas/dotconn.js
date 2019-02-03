//Team MS Paint: Dennis Chen Imad Belkebir
//SoftDev pd7
//K #02: Connecting the Dots
//2/1/19

var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');
var clear = document.getElementById("clear");
clear.addEventListener('click', function(e){
    //clears the rectangle and starts a new path so that a line isn't created on the 1st ellipse
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
})
canvas.addEventListener('click', function(e){
    //gets the x and y value of the mouse with respect to the canvas
    var x = e.offsetX;
    var y = e.offsetY;
    //makes a line from the previous ellipse to the new mouse location
    ctx.lineTo(x,y);
    ctx.stroke();
    //creates an ellipse where the mouse is
    ctx.beginPath();
    ctx.ellipse(x, y, 50, 50, 0, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    //moves the context to the new location for future lines
    ctx.moveTo(x,y)
})
