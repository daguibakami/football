
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Saison } from './saison';
import { SaisonsService } from './saisons.service';

@Component({
    selector: 'my-saison-detail',
    templateUrl: './saisons-detail.component.html',
})
export class SaisonDetailComponent {

    @Input() saison: Saison;

    @Output() saisonUpdated = new EventEmitter<Saison>();

    constructor(
        private saisonsService: SaisonsService,
    ) { }

    updateSaison(saison: Saison): void {
        this.saisonsService.updateSaison(this.saison)
            .then(() => this.saisonUpdated.emit(saison));
    }


    addSaison(saison: Saison): void {
        this.saisonsService.addSaison(saison)
            .then((saison) => this.saisonUpdated.emit(saison));
    }

}