function setup() {
    createCanvas(1000,1000);
    background(0);
}

function draw() {
    
    fill(255,0,0)
    rect(200,200,20,200)
    fill(0,255,0)
    rect(200,200,150,20)
    fill(0,0,255)
    rect(200,300,150,20)
    fill(255)
    rect(350,200,20,120)

}

function mousePressed(){
    saveCanvas(c,"fresh-sketch","png")
}