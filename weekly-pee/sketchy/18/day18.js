function setup() {
    createCanvas(1000, 1000);
    noStroke();
    background(0);
  
    let gridSize = 55;
      for (let x = gridSize; x <= width - gridSize; x += gridSize) {
      for (let y = gridSize; y <= height - gridSize; y += gridSize) {
        noStroke();
        textSize(13);
        fill(random(255),random(255),random(255))
        text("P", x, y);
        stroke(random(255),random(255),random(255));
        line(x, y, width / 2, height / 2);
      }
      }
    }
  
  