function setup() {
    createCanvas(1000,1000);
    background(0);
    ourFont = loadFont('EEEEP.otf')
    textFont(ourFont);
}

function draw() {
    background(0);
    fill(mouseY,mouseY,mouseY);
    textSize(mouseY);

    text("P",mouseX,mouseY);

}

