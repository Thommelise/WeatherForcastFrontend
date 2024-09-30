import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
