var canvas = document.getElementById('playground');
var dotButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');
var ctx = canvas.getContext('2d');
var growing = true;
var radius = 0;
var requestID;

//clears the canvas
var clear = function(e) {
  ctx.clearRect(0,0,canvas.width,canvas.height);
};

var drawDot = (e) => {
  //clears the old circle
  clear()
  //makes it so that the growing doesn't speed up by making the window not have multiple animation frames
  window.cancelAnimationFrame(requestID)
  //creates the circle
  ctx.beginPath();
  ctx.arc(canvas.width/2,canvas.height/2,radius,0,2*Math.PI);
  ctx.stroke();
  ctx.fill();
  //makes the circle grow until it reaches the canvas edge
  if(growing){
    radius += 1;
    if(radius == canvas.width/2){
      growing = false;
    }
  }
  //makes the circle strink until it has no radius
  else{
    radius -= 1;
    if (radius == 0){
      growing = true;
    }
  }
  requestID = window.requestAnimationFrame(drawDot)
};
//stops the animation
var stopIt = function(){
  window.cancelAnimationFrame(requestID)
};
dotButton.addEventListener('click',drawDot)
stopButton.addEventListener('click',stopIt)
