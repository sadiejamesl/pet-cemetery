function setup() {
    createCanvas(1000,1000);
    background(0);
}

function draw() {

    rect(200,200,20,200)

    rect(200,200,150,20)

    rect(200,300,150,20)

    rect(350,200,20,120)

}

function mousePressed(){
    saveCanvas(c,"fresh-sketch","png")
}

