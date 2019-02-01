//Team MS Paint: Dennis Chen Imad Belkebir
//SoftDev pd7
//K #00: I See A Red Door...
//1/30/19

var canvas = document.getElementById('slate');
var ctx = canvas.getContext('2d');
canvas.addEventListener('click',makeShape);
var shape = document.getElementById('rect');
state = true;
//changes the state from rectangle to dot or vice versa
shape.addEventListener('click',function(){
  state = !state
});

function makeShape(e) {
  /*
    offsetX and offsetY provides the offset in the X or Y coordinate
    of the mouse pointer between that event(canvas in this case)
    and the padding edge of the target node
  */
  var x = e.offsetX;
  var y = e.offsetY;
  if (state){
    ctx.fillRect(x,y,50,100);
  }
  else{
    //beginPath() starts a new path so that the dots on the canvas don't become connected
    ctx.beginPath();
    ctx.arc(x,y,5, 0, 2 * Math.PI);
    ctx.fill()
  }
};
var clear = document.getElementById("clear");
function clearCanvas(e){
  var blank = document.createElement('canvas');
  blank.width = canvas.width;
  blank.height = canvas.height;
  warning = document.getElementById('warning');
  if(canvas.toDataURL() == blank.toDataURL()){
    /*
    tells the user that if the event isn't handled correctly, the default action should
    not be done. in this case, the clear function isn't activated
    */
    e.preventDefault();
    warning.innerHTML = "Can't clear a blank canvas";
  }
  else{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    warning.innerHTML = "";
  }
}
clear.addEventListener('click',clearCanvas);
