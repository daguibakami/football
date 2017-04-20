import { Component } from '@angular/core';
@Component({
  selector: 'ponyracer-app',
  template: `
  <h1>PonyRacer</h1>
  <h2>{{numberOfUsers}} users</h2>
  <h2>Welcome {{user?.name}}</h2>
  <ns-races></ns-races>
  <ns-ponies></ns-ponies>
  `
})
export class PonyRacerAppComponent {
  numberOfUsers = 146;
  user: any = { name: 'Cédric' };
}