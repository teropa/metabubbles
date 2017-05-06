import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: '[mb-circle]',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template:
`<svg:circle [attr.cx]="x" [attr.cy]="y" [attr.r]="radius" [attr.fill]="color" [ngStyle]="{ 'display' : getDisplay() }"></svg:circle>`
})

export class CircleComponent {
	@Input() x: number;
	@Input() y: number;
	@Input() radius: number;
	@Input() visible: boolean;
	@Input() color: string;

	getDisplay() {
		return (this.visible ? 'inherit' : 'none');
	}
}

