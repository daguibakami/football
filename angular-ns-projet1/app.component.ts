import { Component } from '@angular/core';
import { RaceService } from './services/race.service';

@Component({
  selector: 'ponyracer-app',
  template: `
  <h1>PonyRacer</h1>
  <h2>{{numberOfUsers}} users</h2>
  <h2>Welcome {{user?.name}}</h2>
  <ns-races></ns-races>

  <h2>chap8</h2>
  <ns-ponies></ns-ponies>

  <h2>chap9</h2>
  <p>{{list()}}</p>

  `
})
export class PonyRacerAppComponent {

  // add a constructor with RaceService
  constructor(private raceService: RaceService) {
  }
  

  numberOfUsers = 146;
  user: any = { name: 'Cédric' };

  list() {
   return this.raceService.list();
  }

}