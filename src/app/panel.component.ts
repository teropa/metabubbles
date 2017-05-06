import { Component, OnInit, OnDestroy } from '@angular/core';

import { CircleComponent } from './circle.component';
import { Circle } from './circle';
import { Circles } from './circles.service';

@Component({
	selector: 'mb-panel',
	styleUrls: [ './panel.component.css' ],
	templateUrl: './panel.component.html'
})

export class PanelComponent implements OnInit, OnDestroy {
	running = false;
	height: number;
	width: number;
	circs: Array<Circle> = [];

	constructor(private circles: Circles) {
		this.circs = circles.circles;
	}

	ngOnInit() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.running = true;
		this.animationFrame();
	}

	ngOnDestroy() {
		this.running = false;
	}

	toggleRunning() {
		this.running = !this.running;
		if (this.running) {
			this.animationFrame();
		}
	}

	animationFrame() {
		this.circles.update();
		if (this.running) {
			requestAnimationFrame(() => this.animationFrame());
		}
	}

	getViewBox() {
		return `0 0 ${this.width} ${this.height}`;
	}

}

