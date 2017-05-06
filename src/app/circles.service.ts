import { Injectable } from '@angular/core';

import { Circle } from './circle';

@Injectable()
export class Circles {

	circleMap:Map<any, any> = new Map<any, any>();
	circles:Array<Circle> = [];
	sourceCircles:Array<Circle> = [];
	pairs:Array<any> = [];
	timeStep:number = 0;
	canvasWidth:number;
	canvasHeight:number;

	constructor() {

		this.canvasWidth = window.innerWidth;
		this.canvasHeight = window.innerHeight;

		for (let i = 0; i < 100; i += 1) {
			// Make a circle object with push.
			this.sourceCircles.push({
				x: this.randInt(this.canvasWidth), // 0..900
				y: this.randInt(this.canvasHeight), // 0..500
				radius: this.randInt(100) + 10, // 10..110
				visible: false,
				color: 'rgba(128,128,128,0.5)',

				// Move on each frame
				xMove: this.randInt(5) - 2, // -2..2
				yMove: this.randInt(5) - 2	// -2..2

			});
		}

		// NOT OPTIMAL -
		// 4950 is quite a big number for something we need to be iterating on every frame.
		// Collision detection is in fact one of the bigger performance bottlenecks of this
		// project.  A more sophisticated implementation might use some kind of spatial index
		// or other optimization tricks to do collision detection with less effort.
		for (let i = 0; i < this.sourceCircles.length - 1; i += 1) {
			for (let j = i; j < this.sourceCircles.length - 1; j += 1) {
				this.pairs.push([this.sourceCircles[i], this.sourceCircles[j + 1]]);
			}
		}
	}

	update() {
		this.timeStep++;

		for (const sourceCircle of this.sourceCircles) {
			this.moveCircle(sourceCircle);
		}

		for (const pair of this.pairs) {
			const [left, right] = pair;
			const dist = this.distance(left, right);
			const overlap = dist - left.radius - right.radius;

			if (overlap < 0) {
				// Overlap!
				// midpoint = average of the two coordinates
				const midX = (left.x + right.x) / 2;
				const midY = (left.y + right.y) / 2;

				const radius = -overlap / 2;
				let collisionCircle = this.circleMap.get(pair);
				if (collisionCircle) {
					collisionCircle.x = midX;
					collisionCircle.y = midY;
					collisionCircle.radius = radius;
				} else {
					collisionCircle = {x: midX, y: midY, radius};
					this.circles.push(collisionCircle);
					this.circleMap.set(pair, collisionCircle);
				}

				if (!collisionCircle.visible) {
					collisionCircle.visible = true;

					// Gray scale
//					const red = this.timeStep % 256;
//					const green = this.timeStep % 256;
//					const blue = this.timeStep % 256;

					// Color!
					const red = this.timeStep % 256;
					const green = (this.timeStep + 85) % 256;
					const blue = (this.timeStep + 85 + 85) % 256;

					collisionCircle.color = `rgba(${red}, ${green}, ${blue}, 0.5)`;
				}

			} else if (this.circleMap.has(pair)) {
				this.circleMap.get(pair).visible = false;
			}
		}
	}

	moveCircle(circle) {
		circle.x += circle.xMove;
		circle.y += circle.yMove;
		if (circle.x > (this.canvasWidth + circle.radius)) {
			circle.x = 0 - circle.radius;
		}
		if (circle.x < (0 - circle.radius)) {
			circle.x = this.canvasWidth + circle.radius;
		}
		if (circle.y > (this.canvasHeight + circle.radius)) {
			circle.y = 0 - circle.radius;
		}
		if (circle.y < (0 - circle.radius)) {
			circle.y = this.canvasHeight + circle.radius;
		}
	}

	// This is an application of the Pythagorean theorem that calculates the distance
	// between the centerpoints of two circles.
	distance(circle1, circle2) {
		return Math.sqrt(
			// The ** here is the ES7 exponentiation operator (https://github.com/rwaldron/exponentiation-operator)
			(circle2.x - circle1.x) ** 2 + (circle2.y - circle1.y) ** 2
		);
	}

	randInt(max) {
		return Math.floor(Math.random() * max);
	}
}

