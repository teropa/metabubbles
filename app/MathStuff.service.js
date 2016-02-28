import {Injectable} from 'angular2/core';

@Injectable()
export class MathStuff {

  randInt(max) {
    return Math.floor(Math.random() * max);
  }

  distance(x1, y1, x2, y2) {
    return Math.sqrt(
      Math.pow(x2 - x1, 2) +
      Math.pow(y2 - y1, 2)
    );
  }

}
