import {Circle} from './Circle';
import {Color} from './Color';
import {MathStuff} from './MathStuff';

export class SourceCircle implements Circle {
  x: number;
  y: number;
  radius: number;
  xMove: number;
  yMove: number;

  constructor(private math:MathStuff,
              private canvasWidth:number,
              private canvasHeight:number) {
    this.x = this.math.randInt(this.canvasWidth);
    this.y = this.math.randInt(this.canvasHeight);
    this.radius = this.math.randInt(100) + 10;

    this.xMove = this.math.randInt(4) - 2;
    this.yMove = this.math.randInt(4) - 2;
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

}
