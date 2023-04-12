let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage('lol.png');
}

function setup() {
  createCanvas(1000,1000);
  smallPoint = 7;
  largePoint = 25;
  imageMode(CENTER);
  noStroke();
  background(100,100,250);
  img.loadPixels();
}

function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}
