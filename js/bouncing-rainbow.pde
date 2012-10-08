int x = 0;
int y = 0;
boolean xPlus = true;
boolean yPlus = true;
int squareWidth = 48;
int squareHeight = 48;
int squareSpeed = 8;


void setup() {
  size(888, 584);
  noStroke();
  frameRate(60);
  colorMode(HSB, height);
  background(height);
}


void draw() {
  // bounce direction checking
  if(x >= width - squareWidth){
    xPlus = false;
  }
  else if(x <= 0){
    xPlus = true;
  };

  if(y >= height - squareWidth){
    yPlus = false;
  }
  else if(y <= 0){
    yPlus = true;
  };

  // horizontal movement
  if(xPlus == true){
    x = x + squareSpeed;
  }
  else {
    x = x - squareSpeed;
  };

  // vertical movement
  if(yPlus == true){
    y = y + squareSpeed;
  }
  else {
    y = y - squareSpeed;
  }

  // color assignment and painting
  fill(y, height, height);
  rect(x, y, squareWidth, squareHeight);
}