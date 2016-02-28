import {Component, Inject} from 'angular2/core';
import {Circles} from './Circles.service';
import {CircleComponent} from './Circle.component';

@Component({
  selector: 'a-canvas',
  template: `
    <svg [attr.viewBox]="'0 0 ' + canvasWidth + ' ' + canvasHeight"
         preserveAspectRatio="xMidYMid meet">
      <svg:g a-circle
             *ngFor="#c of circles.collisionCircles"
             [x]="c.x"
             [y]="c.y"
             [radius]="c.radius"
             [color]="c.color"
             [visible]="c.visible">
      </svg:g>
    </svg>
  `,
  styles: [require('css!./Canvas.component.css').toString()],
  directives: [CircleComponent]
})
export class CanvasComponent {

  static parameters = ['canvasWidth', 'canvasHeight', Circles];
  constructor(canvasWidth, canvasHeight, circles) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.circles = circles;
  }

  ngOnInit() {
    this.running = true;
    this.timeStep = 0;
    this.onAnimationFrame();
  }

  ngOnDestroy() {
    this.running = false;
  }

  onAnimationFrame() {
    this.timeStep++;
    this.circles.update(this.timeStep);
    if (this.running) {
      requestAnimationFrame(() => this.onAnimationFrame());
    }
  }
}
