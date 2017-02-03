function Ship(num) {
  // this.x1 = width/2 - 15; //bottom-left x coordinate of triangle
  // this.x2 = width/2; //top x coordinate of triangle
  // this.x3 = width/2 + 15; //bottom-right x coordinate of triangle
  //
  // this.y1 = height - 10; //bottom-left y coordinate of triangle
  // this.y2 = height - 40; //top y coordinate of triangle
  // this.y3 = height - 10; //bottom-right y coordinate of triangle

  //this.xDir = 0; //this will handle horizontal movement.

  //this.show = function() {
    //fill(255);
    //triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  //}

  //this.move = function() {
    // this.x1 += this.xDir * 5;
    // this.x2 += this.xDir * 5;
    // this.x3 += this.xDir * 5;
  //}
  var img = loadImage('images/ship.png');
  if(num != 2){
    var ship = createSprite(width/2, height - 40, 30, 30);
    ship.addImage(img);
  } else {
    var ship = createSprite((width/2 + 50), height - 40, 30, 30);
  }
  //ship.addImage(loadImage('images/ship.png'));
  return ship;
}
