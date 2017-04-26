import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { PonyRacerAppComponent } from './app.component';
import { RacesComponent } from './races.component';
import { PoniesComponent } from './ponies.component';
import { ApiService } from './services/api.service';
import { RacesService } from './services/race.service';
import { FakeRaceService } from './services/fakerace.service';
import { JsonPipe } from '@angular/common';
import {FromNowPipe} from './fromdatenow-directive';


@NgModule({
  imports: [BrowserModule,HttpModule],
  declarations: [PonyRacerAppComponent,RacesComponent,PoniesComponent,FromNowPipe],
  providers: [
   ApiService,
   { provide: RacesService, useClass: FakeRaceService },
   JsonPipe
  ],
  bootstrap: [PonyRacerAppComponent]
})
export class AppModule {
}