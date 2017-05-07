import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CircleComponent } from './circle.component';
import { PanelComponent } from './panel.component';
import { Circle }	from './circle';
import { Circles } from './circles.service';


@NgModule({
	declarations: [
		AppComponent,
		CircleComponent,
		PanelComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [
		Circles
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
