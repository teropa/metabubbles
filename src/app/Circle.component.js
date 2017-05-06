import {Component, ChangeDetectionStrategy} from 'angular2/core';

@Component({
  selector: '[a-circle]',
  inputs: ['x', 'y', 'radius', 'color', 'visible'],
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
  styles: [require('css!./Circle.component.css').toString()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleComponent {
  getTransform() {
    return `translate(${this.x}, ${this.y}) scale(${this.radius})`;
  }
}
