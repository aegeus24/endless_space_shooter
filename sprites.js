function Ship(num) {

  var img = loadImage('images/ship.png');
  if(num != 2){
    var ship = createSprite(width/2, height - 40, 40, 24);
    ship.addImage(img);
  } else {
    var ship = createSprite((width/2 + 50), height - 40, 40, 24);
  }
  return ship;
}

function checkBounds(object){
  if (object.position.x < 20){
    object.position.x = 20
  }
  if (object.position.y < 12){
    object.position.y = 12
  }
  if (object.position.x > (width - 20)){
    object.position.x = width - 20
  }
  if (object.position.y > (height - 12)){
    object.position.y = height - 12
  }
}

function shouldDestructBeam(beam){
  if(beam.position.y < 0 || beam.position.y > height){
    return true;
  }
  return false;
}

function moveShip(ship, direction, horizontal_vertical) {
  var moveSpeed = 4;
  if(horizontal_vertical === "horizontal"){
    ship.velocity.x = moveSpeed * direction;
  } else if (horizontal_vertical === "vertical"){
    ship.velocity.y = moveSpeed * direction;
  }
}

function fireWeapon(ship){
  var beam = createSprite(ship.position.x, ship.position.y - 24, 5, 10);
  console.log('firing');
  return beam;
}

function moveBeam(beam, direction){
  var beamSpeed = 10;
  beam.velocity.y = beamSpeed * direction;
}
