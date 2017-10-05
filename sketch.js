var ship;
var shipBeams = [];
var BGimg;
function setup() {
  createCanvas(600, 600);
  BGimg = loadImage('images/background.gif');
  ship = Ship();
}

function draw() {
  background(BGimg);
  if(keyIsDown(RIGHT_ARROW)){
      moveShip(ship, 1, "horizontal");
  }

  if(keyIsDown(LEFT_ARROW)){
    moveShip(ship, -1, "horizontal");
  }

  if(keyIsDown(UP_ARROW)){
    moveShip(ship, -1, "vertical");
  }

  if(keyIsDown(DOWN_ARROW)){
    moveShip(ship, 1, "vertical");
  }

  for(var i = shipBeams.length - 1; i >= 0; i--){
    moveBeam(shipBeams[i], -1);
    if (shouldDestructBeam(shipBeams[i])){
      shipBeams.splice(i, 1);
    }
  }
  checkBounds(ship);
  drawSprites();
}

function keyReleased(){
  if(keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW){
    moveShip(ship, 0, "horizontal");
  }
  if(keyCode === UP_ARROW || keyCode === DOWN_ARROW){
    moveShip(ship, 0, "vertical");
  }
}

function keyPressed(){
  if(key === ' '){
    var beam = fireWeapon(ship);
    shipBeams.push(beam);
  }
}
