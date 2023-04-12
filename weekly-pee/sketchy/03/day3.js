function setup() {
    createCanvas(1000,1000);
    background(204,204,255);
}

function draw() {
stroke(204,204,255);
    if (mouseIsPressed) {
        fill(204,204,255);
      } else {
        fill(255);
      }

    rect(200,100,700,50);

    rect(600,100,50,300);

    rect(900,100,50,300);

    rect(600,400,350,50);

        

}

