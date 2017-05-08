import { Saison } from './saison';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SaisonsService {

    private saisonssUrl = 'http://localhost:9000/saison';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {
    }

    getSaisons(): Promise<Saison[]> {
        return this.http.get(this.saisonssUrl)
            .toPromise()
            .then(response => response.json() as Saison[])
            .catch(this.handleError);
    }

    updateSaison(saison: Saison): Promise<Saison> {
        const url = `${this.saisonssUrl}/${saison.id}`;
        return this.http
            .put(url, JSON.stringify(saison), { headers: this.headers })
            .toPromise()
            .then(() => saison)
            .catch(this.handleError);
    }

    addSaison(saison: Saison): Promise<Saison> {
        return this.http
            .post(this.saisonssUrl, JSON.stringify(saison), { headers: this.headers })
            .toPromise()
            .then(() => saison)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}