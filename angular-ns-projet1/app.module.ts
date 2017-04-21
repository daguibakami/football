import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PonyRacerAppComponent } from './app.component';
import { RacesComponent } from './races.component';
import { PoniesComponent } from './ponies.component';
import { ApiService } from './services/api.service';
import { RaceService } from './services/race.service';
import { FakeRaceService } from './services/fakerace.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [PonyRacerAppComponent,RacesComponent,PoniesComponent],
  providers: [
   ApiService,
   { provide: RaceService, useClass: FakeRaceService }
  ],
  bootstrap: [PonyRacerAppComponent]
})
export class AppModule {
}