import {Component, Input} from 'angular2/core';
import {Circle} from './Circle';
import {RgbaPipe} from './Rgba.Pipe';

@Component({
  selector: '[a-circle]',
  template: `
    <svg:circle
      cx=0
      cy=0
      r=0.15
      vector-effect="non-scaling-stroke"
      [attr.transform]="getTransform()"
      [attr.fill]="circle.color | rgba">
    </svg:circle>
  `,
  styleUrls: ['app/Circle.css'],
  pipes: [RgbaPipe]
})
export class CircleComponent {
  @Input() circle:Circle;

  getTransform() {
    return `translate(${this.circle.x}, ${this.circle.y}) scale(${this.circle.radius}) `;
  }

}
