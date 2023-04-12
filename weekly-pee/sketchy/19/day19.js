
let angle = 0.0;
let jitter = 0.0;

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  background(255,20,100);
}

function draw() {

  for (var x = 0; x < width; x = x + 2) {
  jitter = (random(0.2), random(-0.2));
  angle = angle + jitter;
  let c = cos(angle);
  translate(width / 2, height / 2);
  rotate(c);
  fill(random (255),random(20),random(178), 200);
  textSize(190);
  text('P',0, 0, 180, 180);
}

}
