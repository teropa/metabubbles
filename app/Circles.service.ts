import {Inject, Injectable} from 'angular2/core';
import {Circle} from './Circle';
import {Color} from './Color';
import {MathStuff} from './MathStuff.service';
import {SourceCircle} from './SourceCircle';

interface SourceCirclePair {
  left:SourceCircle;
  right:SourceCircle;
}

@Injectable()
export class Circles {
  sourceCircles:SourceCircle[] = [];
  sourceCirclePairs:SourceCirclePair[] = [];
  collisionCircles:Circle[] = [];
  private collisionCircleMap:Map<SourceCirclePair, Circle> = new Map<SourceCirclePair, Circle>();

  constructor(@Inject('canvasWidth') private canvasWidth:number,
              @Inject('canvasHeight') private canvasHeight:number,
              @Inject('sourceCircleCount') private sourceCircleCount:number,
              @Inject(MathStuff) private math:MathStuff) {
    this.makeSourceCircles();
    this.makeSourceCirclePairs();
  }

  update(timeStep:number) {
    for (const circle of this.sourceCircles) {
      circle.move();
    }
    for (const pair of this.sourceCirclePairs) {
      const {left, right} = pair;
      const dist = this.math.distance(left.x, left.y, right.x, right.y);
      const overlap = dist - left.radius - right.radius;
      if (overlap < 0) {
        const midX = (left.x + right.x) / 2;
        const midY = (left.y + right.y) / 2;
        let collisionCircle = this.collisionCircleMap.get(pair);
        if (collisionCircle) {
          collisionCircle.x = midX;
          collisionCircle.y = midY;
          collisionCircle.radius = -overlap;
        } else {
          collisionCircle = {x: midX, y: midY, radius: -overlap};
          this.collisionCircleMap.set(pair, collisionCircle);
          this.collisionCircles.push(collisionCircle);
        }
        if (!collisionCircle.visible) {
          collisionCircle.visible = true;
          collisionCircle.color = this.colorString({
            red: timeStep % 255,
            green: (timeStep + 170) % 230,
            blue: (timeStep + 85) % 230,
            alpha: 0.5
          });
        }
      } else if (this.collisionCircleMap.has(pair)) {
        this.collisionCircleMap.get(pair).visible = false;
      }
    }
  }

  private makeSourceCircles() {
    for (let i=0 ; i<this.sourceCircleCount ; i++) {
      this.sourceCircles.push(new SourceCircle(this.math, this.canvasWidth, this.canvasHeight));
    }
  }

  private makeSourceCirclePairs() {
    for (let i = 0 ; i < this.sourceCircles.length - 1 ; i++) {
      for (let j = i ; j < this.sourceCircles.length - 1 ; j++) {
        this.sourceCirclePairs.push({left: this.sourceCircles[i], right: this.sourceCircles[j + 1]});
      }
    }
  }

  private colorString(color:Color):string {
    return `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
  }
}
