//Dennis Chen
//SoftDev pd7
//K #09: Connect the Dots
//3/12/19

var pic = document.getElementById("vimage");
var oldX
var oldY
pic.addEventListener('click', function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    //if this isn't the first dot, make a line between this dot and the old one
    if(oldX){
      path.setAttribute("d",`M ${oldX} ${oldY} L ${x} ${y} Z`)
    }
    //sets attribute of circle
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r",10);
    c.setAttribute("fill","red");
    c.setAttribute("stroke","black");
    //adds path and dots to child nodes
    pic.appendChild(c);
    pic.appendChild(path);
    //updates oldX and oldY
    oldX = x;
    oldY = y;
    path.setAttribute("stroke","black")
})
var clear = document.getElementById("but_clear")
clear.addEventListener("click", function(e){
    //while the svg has children, keep removing the first one
    while (pic.hasChildNodes()) {
        pic.removeChild(pic.firstChild);
    }
    //reset oldX and oldY
    oldX = null
    oldY = null
})
