function setup() {
    createCanvas(1000,1000);
    background(0);
}

function draw() {
    stroke(285,182,193);
    fill(285,182,193);
    rect(400,150,20,300);
    rect(380,150,10,300);
    rect(365,150,5,300);
    rect(352,150,3,300)
    ellipse(500,230,200,200);
    fill(0);
    ellipse(500,230,100,100)


}

function mousePressed(){
    saveCanvas(c,"fresh-sketch","png")
}