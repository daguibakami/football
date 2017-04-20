import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PonyRacerAppComponent } from './app.component';
import { RacesComponent } from './races.component';
import { PoniesComponent } from './ponies.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [PonyRacerAppComponent,RacesComponent,PoniesComponent],
  bootstrap: [PonyRacerAppComponent]
})
export class AppModule {
}