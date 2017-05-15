
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Saison } from './saison';
import { SaisonsService } from './saisons.service';

@Component({
    selector: 'my-saison-detail',
    templateUrl: './saisons-detail.component.html',
})
export class SaisonDetailComponent {

    titre: string;
    _mode: string = '';
    afficheId: boolean = true;

    @Input()
    set mode(value: string) {

        console.log("mode=" + value);

        this._mode = value;
        if (value == 'visu') {
            this.titre = "Detail d'une saison";
        }
        else if (value == 'create') {
            this.titre = "Ajout d'une saison";
        }
        else if (value == 'update') {
            this.titre = "Modification d'une saison";
        }
        else if (value == 'delete') {
            this.titre = "Suppression d'une saison";
        }
        else {
            this.titre = "BIZARRE...";
        }
    }

    @Input() saison: Saison;

    @Output() saisonUpdated = new EventEmitter<Saison>();

    constructor(
        private saisonsService: SaisonsService,
    ) { }


    saveSaison(saison: Saison): void {

        if (this._mode == 'create') {
            this.addSaison(saison);
        }
        else if (this._mode == 'update') {
            this.updateSaison(saison);
        }
        else if (this._mode == 'delete') {
            this.deleteSaison(saison);
        }
    }

    updateSaison(saison: Saison): void {
        this.saisonsService.updateSaison(this.saison)
            .then(() => this.saisonUpdated.emit(saison));
    }


    addSaison(saison: Saison): void {
        this.saisonsService.addSaison(saison)
            .then((saison) => this.saisonUpdated.emit(saison));
    }

    deleteSaison(saison: Saison): void {
        this.saisonsService.deleteSaison(saison)
            .then(() => this.saisonUpdated.emit(null));
    }

}