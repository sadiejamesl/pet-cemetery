function setup() {
    createCanvas(1000,1000);
}

function draw() {
    background(mouseY,mouseX);
    translate (mouseX,mouseY)
    translate(p5.Vector.fromAngle(millis() / 100, 10));

    textSize(300);
    text('P', 175, 350);

for (var x = 0; x < 500; x = x + 10) {
    fill(random(55),random(255),random(106), random (100));
    textSize(random(30));
    text('p', x, 500)
  }
  
  for (var y = 0; y < 500; y = y + random(10)) {
    fill(random(55),random(255),random(106), random (100));
    textSize(random(50));
    text('p', 20, y)
  }

  for (var x = 0; x < 500; x = x + 10) {
    fill(random(55),random(255),random(106), random (100));
    textSize(random(100));
    text('p', x, 15)
  }

  for (var y = 0; y < 500; y = y + random(10)) {
    fill(random(55),random(255),random(106), random (100));
    textSize(random(150));
    text('p', 500, y)
  }

  


  
}