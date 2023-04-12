let c;
let ourFont;
let points;

function preload(){
    ourFont = loadFont('BLAH.otf')
}

function setup() {
    c = createCanvas(1000,1000);
    background(random(255),25,85);
    colorMode(HSB,255);
    
    textSize(100);
    textFont(ourFont);


    
    points = ourFont.textToPoints("P",300,300,200);
    noStroke();

    for(let i=0; i<points.length; i++) {
        fill(random(25),85,255)
        rect(points[i].x+random(-2,2), points[i].y+random(-2,2),random(10,60))
    }


}

function draw() {


    //noFill()

    //let ferb = map(mouseX, 0, 1000, 0, 255);
    //fill(ferb,255,255);
    //ellipse(mouseX,mouseY,500);
    //textSize(mouseX/20)
    
}