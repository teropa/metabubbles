import {Color} from './Color';

export class MathStuff {

  randInt(max:number):number {
    return Math.floor(Math.random() * max);
  }

  distance(x1: number, y1: number, x2: number, y2: number):number {
    return Math.sqrt(
      Math.pow(x2 - x1, 2) +
      Math.pow(y2 - y1, 2)
    );
  }

}
