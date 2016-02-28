import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {CanvasComponent} from './Canvas.component';
import {Circles} from './Circles.service';
import {MathStuff} from './MathStuff.service';

declare var require:any;

require('style!css!./style.css');

enableProdMode();

bootstrap(CanvasComponent, [
  MathStuff,
  Circles,
  provide('canvasWidth', {useValue: 860}),
  provide('canvasHeight', {useValue: 512}),
  provide('sourceCircleCount', {useValue: 100})
]);
