import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {CanvasComponent} from './Canvas.component';

require('style!css!./style.css');

enableProdMode();

bootstrap(CanvasComponent, [
  provide('canvasWidth', {useValue: 860}),
  provide('canvasHeight', {useValue: 512}),
  provide('sourceCircleCount', {useValue: 100})
]);
