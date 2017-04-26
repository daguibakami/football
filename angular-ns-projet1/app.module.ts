import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { PonyRacerAppComponent } from './app.component';
import { RacesComponent } from './races.component';
import { PoniesComponent,PonyComponent } from './ponies.component';
import { ApiService } from './services/api.service';
import { RacesService } from './services/race.service';
import { FakeRaceService } from './services/fakerace.service';
import { JsonPipe } from '@angular/common';
import {FromNowPipe} from './fromdatenow-directive';
import {DoNothingDirective,ComplexSelectorDirective,SimpleTextWithSetterDirective,OnChangesDirective} from './directives';


@NgModule({
  imports: [BrowserModule,HttpModule],
  declarations: [PonyRacerAppComponent,RacesComponent,PoniesComponent,PonyComponent
  ,FromNowPipe,DoNothingDirective,
  ComplexSelectorDirective,SimpleTextWithSetterDirective,OnChangesDirective],
  providers: [
   ApiService,
   { provide: RacesService, useClass: FakeRaceService },
   JsonPipe
  ],
  bootstrap: [PonyRacerAppComponent]
})
export class AppModule {
}