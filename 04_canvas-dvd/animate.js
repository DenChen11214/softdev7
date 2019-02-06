//Team Orange: Dennis Chen & Jia Yang Chen
//SoftDev pd7
//K #04: What is it saving the screen from?
//2/5/19
var canvas = document.getElementById('playground');
var dotButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');
var dvdButton = document.getElementById('dvd');
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

var dvdLogoSetup = function() {
    //gets rid of previous animation frames
    window.cancelAnimationFrame(requestID);
    //sets up the coordinates and velocity and image for the dvd logo
    var rectWidth = 100;
    var rectHeight = 50;
    var rectX = Math.floor(Math.random() * (canvas.width - rectWidth));
    var rectY = Math.floor(Math.random() * (canvas.height - rectHeight));
    var xVel = 1;
    var yVel = 1;
    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    var dvdLogo = function() {
	//makes it so that the dvd doesn't go faster with each button click
	window.cancelAnimationFrame(requestID);
	//clears the canvas
	clear();
	//if the dvd hits the canvas border, it bounces off 
	if(rectX == 0 || rectX == canvas.width - rectWidth){
	    xVel *= -1;
	}
	if(rectY == 0 || rectY == canvas.height - rectHeight){
	    yVel *= -1;
	}
	//add velocity to coordinates
	rectX += xVel;
	rectY += yVel;
	//draws the image
	ctx.drawImage(logo,rectX,rectY,rectWidth,rectHeight);
	requestID = window.requestAnimationFrame(dvdLogo);
    }
    dvdLogo();
}

//stops the animation
var stopIt = function(){
  window.cancelAnimationFrame(requestID)
};



dotButton.addEventListener('click',drawDot);
stopButton.addEventListener('click',stopIt);
dvdButton.addEventListener('click', dvdLogoSetup);
