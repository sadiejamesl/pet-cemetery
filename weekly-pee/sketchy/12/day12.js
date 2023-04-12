const particles = [];

function setup() {
    createCanvas(1000,1000);
    const particlesLength = Math.floor(window.innerWidth / 10);

    for(let i = 0; i< particlesLength; i++) {
        particles.push(new Particle());
    }

    ourFont = loadFont('EEEEP.otf')
    textFont(ourFont);
}

function draw() {
   background(60,100,0);
   particles.forEach((p, index) => {
    p.update();
    p.draw();
   });
   
   fill(255);
   textSize(500);
   text('P',600,700);
}

class Particle {
  constructor() {
    // Position
    this.pos = createVector(random(width),random(height));
    // Velocity
    this.vel = createVector(random(-2,2), random(-2,2));
    // Size
    this.size = 10;
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
        if(this.pos.x < 0 || this.pos.x > width){
          this.vel.x *= -1;
        }

        if(this.pos.y < 0 || this.pos.y > width){
            this.vel.y *= -1;
          }
    }

  }

