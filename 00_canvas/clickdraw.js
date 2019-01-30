//Dennis CHen
//SoftDev pd7
//K #00: I See A Red Door...
//1/30/19
var canvas = document.getElementById('slate');
var ctx = canvas.getContext('2d');
canvas.addEventListener('click',makeShape);
var shape = document.getElementById('rect');
shape.addEventListener('click',function(){
  if (shape.innerHTML == 'rectangle'){
    shape.innerHTML = 'dot';
  }
  else{
    shape.innerHTML = "rectangle";
  }
});
function makeShape(e) {
  var x = e.clientX;
  var y = e.clientY;
  x = x - canvas.offsetLeft;
  y = y - canvas.offsetTop;
  if (shape.innerHTML == "rectangle"){
    ctx.fillRect(x,y,50,100);
  }
  else{
    ctx.beginPath();
    ctx.arc(x,y,5, 0, 2 * Math.PI);
    ctx.fill()
  }
};
var clear = document.getElementById("clear");
function clearCanvas(e){
  ctx.clearRect(0,0,canvas.width,canvas.height);
};
clear.addEventListener('click',clearCanvas);
