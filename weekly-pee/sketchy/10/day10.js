function setup(){
    createCanvas(1000,1000);
    noStroke();
    ourFont = loadFont('engage.otf');
}

function draw(){
    background(100,50,100)
    let t1 = map(mouseX,0,width,0,height);
    let t2 = height - t1;
    
    textFont(ourFont);
    textSize(500);
    fill(200,67,20,t1);
    text('P',width/2 + t1/2, height/2, t1, t1);
    fill(200,67,20,t2);
    text('P',width/2 - t2/2, height/2, t2, t2);
}