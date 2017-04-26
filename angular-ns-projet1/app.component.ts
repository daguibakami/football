import { Component } from '@angular/core';
import { RacesService } from './services/race.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ponyracer-app',
  template: `
  <h1>PonyRacer</h1>

  <h2>chap10 et 11</h2>
  <p>{{ birthday | date:'dd/MM/yyyy' }}</p>
  <p>{{ birthday | fromNow }}</p>
  <div>{{ asyncGreeting | async }}</div>

  <h2>chap7</h2>
  <p>{{numberOfUsers | number:'.2'}} users</p>
  <p>Welcome {{user?.name | slice:0:3 | uppercase}}</p>
  <ns-races></ns-races>

  <h2>chap8</h2>
  <ns-ponies></ns-ponies>

  <h2>chap9</h2>
  <p>{{list()}}</p>

  `
})
export class PonyRacerAppComponent {

  // add a constructor with RaceService
  constructor(private raceService: RacesService,
              private jsonPipe: JsonPipe) {
  }
  

  numberOfUsers = 146;
  user: any = { name: 'Cédric' };
  birthday = new Date();

 asyncGreeting = new Promise(resolve => {
   // after 1 second, the promise will resolve
   window.setTimeout(() => resolve('hello'), 1000);
  });
  list() {
   return this.jsonPipe.transform(this.raceService.list());
  }

}