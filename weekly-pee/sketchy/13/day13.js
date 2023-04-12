const particles = [];

function setup() {
    createCanvas(1000,1000);
    const particlesLength = Math.floor(window.innerWidth / 10);

    for(let i = 0; i< particlesLength; i++) {
        particles.push(new Particle());
    }

    ourFont = loadFont('nasa.otf')
    textFont(ourFont);
}

function draw() {
   background(112,100,200);
   particles.forEach((p, index) => {
    p.update();
    p.draw();
   });
   
   fill(112,100,220);
   textSize(1500);
   text('P',5,1000);
}

class Particle {
  constructor() {
    // Position
    this.pos = createVector(random(width),random(height));
    // Velocity
    this.vel = createVector(random(-9,9), random(-9,9));
    // Size
    this.size = 280;
  }

  // Update movement added velocity
  update () {
    this.pos.add(this.vel);
    this.edges();
  }


    draw(){
        noStroke();
        fill('rgba(255,255,255,0.5)');
        circle(this.pos.x, this.pos.y, this.size);
    }

    // detect edges
    edges(){
        if(this.pos.x < 0 || this.pos.x > 200){
          this.vel.x *= -1;
        }

        if(this.pos.y < 0 || this.pos.y > 200){
            this.vel.y *= -1;
          }
    }

  }

