export class SourceCircle {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = this.randInt(this.canvasWidth);
    this.y = this.randInt(this.canvasHeight);
    this.radius = this.randInt(100) + 10;
    this.xMove = this.randInt(4) - 2;
    this.yMove = this.randInt(4) - 2;
  }

  move() {
    this.x += this.xMove;
    this.y += this.yMove;
    if (this.x > (this.canvasWidth + this.radius)) {
      this.x = 0 - this.radius;
    }
    if (this.x < (0 - this.radius)) {
      this.x = this.canvasWidth + this.radius;
    }
    if (this.y > (this.canvasHeight + this.radius)) {
      this.y = 0 - this.radius;
    }
    if (this.y < (0 - this.radius)) {
      this.y = this.canvasHeight + this.radius;
    }
  }

  randInt(max) {
    return Math.floor(Math.random() * max);
  }

}
