import { Component } from '@angular/core';
import { Saison } from './saison';
import { SaisonsService } from './saisons.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-saisons',
  templateUrl: './saisons.component.html'
})

export class SaisonsComponent implements OnInit {

  constructor(private saisonsService: SaisonsService) {

  }

  saisons: Saison[];

  ngOnInit(): void {
    this.getSaisons();
  }

  getSaisons(): void {
    this.saisonsService.getSaisons()
      .then(saisons => this.saisons = saisons);
  }

}
