let num = 200;
let mx = [];
let my = [];

function setup() {
  myFont = loadFont('EEEEP.otf');
  textFont(myFont);
  createCanvas(1000, 1000);
  noStroke();
  for (let i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }
}

function draw() {
  background(0);
  let which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;

  for (let i = 0; i < num; i++) {
    fill(random(255), random(255),random(255),100);
    textSize(120);
    let index = (which + 4 + i) % num;
    text('P',mx[index], my[index], i, i);
  }
}
