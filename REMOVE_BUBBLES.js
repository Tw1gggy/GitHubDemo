let bubbles = [];

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 10; i++) {
  let x = random(width);
  let y = random(height);
  let r = random(10, 50);

  let b = new Bubble(x, y, r, 0);
  bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++){
    if (bubbles[i].rollover(mouseX,mouseY)) {
      
      bubbles.splice(i, 1);
    }

  }
  
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].rollover(mouseX,mouseY)) {
      
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(tempX, tempY, tempR, tempB) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.brightness = tempB;
  }

  changeColor(bright){
    this.brightness = bright;
  }
  
  
  rollover(px, py) {
    let d = dist(px, py, this.x, this.y);

    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness);
    ellipse(this.x, this.y, this.r * 2);
  }
}
