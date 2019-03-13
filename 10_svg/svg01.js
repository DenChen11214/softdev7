//Dennis Chen
//SoftDev pd7
//K #09: Connect the Dots
//3/12/19

var pic = document.getElementById("vimage");
pic.addEventListener('click', function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    //sets attribute of circle
    c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r",50);
    c.setAttribute("fill","blue");
    c.setAttribute("stroke","black");
    c.addEventListener('click', function(e){ //move out of this event listener
      if(c.getAttribute('fill') == "blue"){
        c.setAttribute('fill','yellow')
      }
      else{
        c.setAttribute('fill','blue')
        c.setAttribute('cx', 12) //replace w/random
        c.setAttribute('cy', 12)
      }
    }
    //adds path and dots to child nodes
    pic.appendChild(c);
    //updates oldX and oldY
})
var clear = document.getElementById("but_clear")
clear.addEventListener("click", function(e){
    //while the svg has children, keep removing the first one
    while (pic.hasChildNodes()) {
        pic.removeChild(pic.firstChild);
    }
})
