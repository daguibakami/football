import { Component,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'ns-ponies',
  template: `<button (click)="refreshPonies()">Refresh</button>
  <ul>
  <ns-pony changeDirective *ngFor="let currentPony of ponies" [pony]="currentPony" (ponySelected)="betOnPony($event)"></ns-pony>

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

  betOnPony(pony) {
  console.log('j ai parié sur le poney '+pony.name);
  }
}


@Component({
  selector: 'ns-pony',
  template: `<div (click)="selectPony()">nom du poney : {{pony.name}}</div>`
})
export class PonyComponent {
  @Input() pony: Pony;
  @Output() ponySelected = new EventEmitter<Pony>();

  selectPony() {
   this.ponySelected.emit(this.pony);
  }
}

export class Pony {
  name: any;
}