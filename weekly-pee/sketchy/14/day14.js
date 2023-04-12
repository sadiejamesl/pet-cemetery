

function setup() {
    createCanvas(1000,1000);
    

}

function draw() {
   background(random(255));
   fill(random(255));
   textSize(random(1000));
   text('P',random(1000),random(1000));
   for (var x = 0; x < height; x = x + 10) {
    fill(random(255));
    textSize(random(50));
    text("p", random(1000), x);
}
}




