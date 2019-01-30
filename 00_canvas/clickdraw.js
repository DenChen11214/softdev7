var canvas = document.getElementById('slate');
var ctx = canvas.getContext('2d');
canvas.addEventListener('click',getMouseCoord)
function getMouseCoord(e) {
  var x = e.clientX;
  var y = e.clientY;
  console.log(x)
  console.log(y)
}
var clear = document.getElementById("clear")
function clearCanvas(e){
  TLCX = canvas.offsetLeft;
  TLCY = canvas.offsetTop;
}
