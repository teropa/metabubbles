import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';
import {Circle} from './Circle';

@Component({
  selector: '[a-circle]',
  template: `
    <svg:circle
      cx=0
      cy=0
      r=0.15
      vector-effect="non-scaling-stroke"
      [attr.transform]="getTransform()"
      [attr.fill]="color"
      [style]="visible ? '' : 'display: none;'">
    </svg:circle>
  `,
  styleUrls: ['app/Circle.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleComponent {
  @Input() x:number;
  @Input() y:number;
  @Input() radius:number;
  @Input() color:string;
  @Input() visible:boolean;

  getTransform() {
    return `translate(${this.x}, ${this.y}) scale(${this.radius})`;
  }

}
