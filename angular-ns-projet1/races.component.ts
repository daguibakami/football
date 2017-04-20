import { Component } from '@angular/core';
@Component({
  selector: 'ns-races',
  template: `
  <div *ngIf="races.length > 0; else empty"><h2>Races</h2></div>
  <ng-template #empty><h2>No races.</h2></ng-template>
  <button (click)="refreshRaces()">Refresh the races list</button>
  <p>{{races.length}} races</p>
<ul>
  <li *ngFor="let race of races; index as i">{{i}} - {{race.name}}</li>
</ul>
  <div (click)="onButtonClick($event)">
  <button>Click me!</button>
  <input type="text" #name>
<button (click)="name.focus()">Focus the input</button>
</div>
  `
})
export class RacesComponent {
  races: any = [];
  refreshRaces() {
   this.races = [{ name: 'London' }, { name: 'Lyon' }];
  }

  onButtonClick(event) {
    console.log(event);
  }
}