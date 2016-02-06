import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {CanvasComponent} from './Canvas.component';
import {Circles} from './Circles';
import {MathStuff} from './MathStuff';

enableProdMode();

bootstrap(CanvasComponent, [
  MathStuff,
  Circles,
  provide('canvasWidth', {useValue: 860}),
  provide('canvasHeight', {useValue: 512}),
  provide('sourceCircleCount', {useValue: 100})
]);
