import { Component } from '@angular/core';
@Component({
  selector: 'ns-ponies',
  template: `<button (click)="refreshPonies()">Refresh</button>
  <ul>
  <li *ngFor="let pony of ponies | slice:0:3; even as isEven"
  [style.color]="isEven ? 'green' : 'black'">
  {{pony.name}}
  </li>
  </ul>`
})
export class PoniesComponent {
  ponies: Array<any> = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }, {name : 'Gde le poney'}, {name : 'JP le cheval'}];
  refreshPonies() {
   this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }];
  }
}