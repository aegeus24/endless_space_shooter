var ship;

function setup() {
  createCanvas(600, 400);
  ship = Ship();
  ship2 = Ship(2);
}

function draw() {
  background(0);
  //ship.show();
  //ship.move();
  drawSprites();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    console.log("RIGHT");
    ship.xDir = 1;
  } else if(keyCode === LEFT_ARROW){
    console.log("LEFT");
    ship.xDir = -1;
  } else if(keyCode === ' '){
    ship.shoot();
  }
}

function keyReleased(){
  if(keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW){
    ship.xDir = 0;
  }
}
