let message = 'P',
  font,
  bounds, 
  fontsize = 150,
  x,
  y; 
function preload() {
  font = loadFont('beep.otf');
}

function setup() {
  createCanvas(1000,1000);

 
  textFont(font);
  textSize(fontsize);

  
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {
  background(49, 133,252);

 
  fill(247, 240,82);
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

 
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
  fill(27, 40,82);
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

 
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
}
