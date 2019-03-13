//Dennis Chen
//SoftDev pd7
//K #10: Connect the Dots
//3/13/19

var pic = document.getElementById("vimage");
var clicked = false;
pic.addEventListener('click', function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    //checks if you clicked a circle
    if(!circleClicked()){
      //if not, create a circle
      var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx",x);
      c.setAttribute("cy",y);
      c.setAttribute("r",50);
      c.setAttribute("fill","blue");
      c.setAttribute("stroke","black");
      pic.appendChild(c);
      //add eventlistener to it
      addClick();
    }
    else{
      //sets clicked to false to reset after clicking the circle
      clicked = false;
    }
})
function addClick(){
  //adds event listener to circle- makes it turn yellow or move to a random spot
  child = pic.lastChild;
  child.addEventListener('click',function(e){
    if(this.getAttribute('fill') == "blue"){
      this.setAttribute('fill','yellow')
    }
    else{
      this.setAttribute('fill','blue')
      this.setAttribute('cx', Math.random() * 500)
      this.setAttribute('cy', Math.random() * 500)
    }
    clicked = true;
  })
}
function circleClicked(){
  //if no circles on the svg, return false, else return clicked
  if(pic.children.length == 0){
    return false;
  }
  return clicked
}
var clear = document.getElementById("but_clear")
clear.addEventListener("click", function(e){
    //while the svg has children, keep removing the first one
    while (pic.hasChildNodes()) {
        pic.removeChild(pic.firstChild);
    }
})
