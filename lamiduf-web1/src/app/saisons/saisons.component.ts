import { Component } from '@angular/core';
import { Saison } from './saison';
import { SaisonsService } from './saisons.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-saisons',
  templateUrl: './saisons.component.html',
  styleUrls: ['./saisons.component.css']
})

export class SaisonsComponent implements OnInit {

  selectedSaison: Saison;
  modeVueDetail: string = "none";

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

  visuSaison(saison: Saison): void {
    this.selectedSaison = saison;
    this.modeVueDetail = "visu";
  }

  reloadSaisons(saison: Saison) {
    this.selectedSaison = undefined;
    this.getSaisons();
    this.modeVueDetail = "none";
  }

  createSaison(): void {
    this.selectedSaison = new Saison();
    this.modeVueDetail = "create";
  }

  updateSaison(saison: Saison): void {
    this.selectedSaison = saison;
    this.modeVueDetail = "update";
  }

  deleteSaison(saison: Saison): void {
    this.selectedSaison = saison;
    this.modeVueDetail = "delete";
  }

}
