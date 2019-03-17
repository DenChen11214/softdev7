//Dennis Chen
//SoftDev pd7
//K #11: Ask Circles [Change || Die] …While On The Go
//3/15/19

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
      vel.push([1,1])
    }
    else{
      //sets clicked to false to reset after clicking the circle
      clicked = false;
    }
});
function addClick(){
  //adds event listener to circle- makes it turn yellow or move to a random spot
  child = pic.lastChild;
  child.addEventListener('click',function(e){
    if(this.getAttribute('fill') == "blue"){
      this.setAttribute('fill','yellow');
    }
    else{
      this.setAttribute('fill','blue');
      this.setAttribute('cx', Math.random() * 500);
      this.setAttribute('cy', Math.random() * 500);
    }
    clicked = true;
  });
};
function circleClicked(){
  //if no circles on the svg, return false, else return clicked
  if(pic.children.length == 0){
    return false;
  }
  return clicked;
};
var clear = document.getElementById("but_clear");
var clearDots = function(e){
  //remove svg children
  while (pic.hasChildNodes()) {
      pic.removeChild(pic.firstChild);
  }
  //set velociity list to empty and cancel the animation frame
  vel = []
  moveButClicked = false;
  window.cancelAnimationFrame(requestID);
}
clear.addEventListener("click", clearDots)

var requestID;
var move = document.getElementById("but_move");
var moveButClicked = false;
var vel = [];
var moveDotsSetup = function(e) {
    window.cancelAnimationFrame(requestID);
    //below setup only happens on first move button click
    if(!moveButClicked){
        vel = []
        var children = Array.from(pic.children);
        for(var i = 0; i < children.length; i++){
            vel.push([1,1])
        }
        moveButClicked = true;
    }
    var moveDots = function(){
        window.cancelAnimationFrame(requestID);
        //gets coords of every dot
        var children = Array.from(pic.children);
        var coords = []
        for(var i = 0; i < children.length; i++){
            var x = children[i].getAttribute("cx")
            var y = children[i].getAttribute("cy")
            coords.push([x,y])
        }
        //clears the svg
        while (pic.hasChildNodes()) {
            pic.removeChild(pic.firstChild);
        }
        for(var i = 0; i < coords.length; i++){
            //make a new circle
            var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            //if a dot hits a wall, reverse its velocity
            if(coords[i][0] <= 50 || coords[i][0] >= 450){
                vel[i][0] *= -1
            }
            if(coords[i][1] <= 50 || coords[i][1] >= 450){
                vel[i][1] *= -1
            }
            //change its coords according to its vel
            coords[i][0] = parseInt(coords[i][0]) + vel[i][0]
            coords[i][1] = parseInt(coords[i][1]) + vel[i][1]
            //set the attributes for the dot being animated
            c.setAttribute("cx",coords[i][0]);
            c.setAttribute("cy",coords[i][1]);
            c.setAttribute("r",50);
            c.setAttribute("fill","blue");
            c.setAttribute("stroke","black");
            pic.appendChild(c);
        }
        requestID = window.requestAnimationFrame(moveDots);
    }
    moveDots();
};
move.addEventListener('click',moveDotsSetup);

var rand = document.getElementById("but_?")
//reverses directions of dots
var randDots = function(e) {
    for(var i = 0;i < vel.length; i++){
      vel[i][0] *= -1
      vel[i][1] *= -1
    }
};
rand.addEventListener('click',randDots);
