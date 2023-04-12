function setup() {
    createCanvas(1000,1000);
}

function draw() {
if (mouseIsPressed) {
        background(144,238,144);
        stroke(285,182,193);
    fill(285,182,193);
    rect(400,150,20,300);
    rect(380,150,10,300);
    rect(365,150,5,300);
    rect(352,150,3,300)
    ellipse(500,230,200,200);
    fill(144,238,144);
    ellipse(500,230,100,100)
      } 
    
    else {
        background(285,182,193);
        stroke(144,238,144);
    fill(144,238,144);
    rect(400,150,20,300);
    rect(380,150,10,300);
    rect(365,150,5,300);
    rect(352,150,3,300)
    ellipse(500,230,200,200);
    fill(285,182,193);
    ellipse(500,230,100,100)
      } 

}

