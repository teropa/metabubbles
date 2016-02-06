import {Component, Inject, OnInit, OnDestroy} from 'angular2/core';
import {Circle} from './Circle';
import {Circles} from './Circles';
import {CircleComponent} from './Circle.component';

@Component({
  selector: 'a-canvas',
  template: `
    <svg [attr.viewBox]="'0 0 ' + width + ' ' + height"
         preserveAspectRatio="xMidYMid meet">
      <svg:g a-circle
             *ngFor="#c of circles.getCollisionCircles()"
             [circle]="c">
      </svg:g>
    </svg>
  `,
  styleUrls: ['app/Canvas.css'],
  directives: [CircleComponent]
})
export class CanvasComponent implements OnInit, OnDestroy {
  running = false;
  timeStep = 0;

  constructor(@Inject('canvasWidth') private width:number,
              @Inject('canvasHeight') private height:number,
              private circles:Circles) { }

  ngOnInit() {
    this.running = true;
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
