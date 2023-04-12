let y = 0

function setup() {
    createCanvas(1000,1000);
    noStroke();
    frameRate(2000);
    noLoop();
    background(0);
}

function draw() {
   
   y = y - 1;
   if (y < 0) {
    y = width;
   }

   fill(random(255), random(0), random(255));
   textSize (50);
   text ('P', 0, y, width, y);

   fill(random(0), random (255), random (255));
   textSize (100);
   text ('P', 25, y, width, y);

   fill(random(255), random (255), random (0));
   textSize (150);
   text ('P', 75, y, width, y);

   fill(random(10), random (25), random (255));
   textSize (200);
   text ('P', 150, y, width, y);

   fill(random(100), random (55), random (255));
   textSize (250);
   text ('P', 250, y, width, y);

   fill(random(200), random (55), random (105));
   textSize (300);
   text ('P', 375, y, width, y);

   fill(random(20), random (255), random (105));
   textSize (350);
   text ('P', 525, y, width, y);

   fill(random(200), random (36), random (205));
   textSize (400);
   text ('P', 700, y, width, y);
}

function mousePressed(){
    loop();
}





